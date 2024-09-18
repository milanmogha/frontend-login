import React, { useState } from "react";
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:5000/api/users/register', {
            username,
            email,
            password
        });

        console.log(response.data);
    } catch (error) {
        console.error(error.response.data)
    }
    };

    return(
        <div>
            <h2>
                Signup
            </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username :</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;