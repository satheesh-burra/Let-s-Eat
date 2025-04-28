import React from "react";
import { useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
            alert("Login successful!");
        } else {
            setError("Invalid credentials!");
        }
    };

    const handleSocialLogin = (provider) => {
        alert(`Logging in with ${provider}`);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-red-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 border border-red-500">
                <h2 className="text-center text-2xl font-bold mb-4 text-red-600">Login</h2>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="w-full p-2 border border-red-300 rounded mt-2" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required
                    />
                    <input 
                        type="password" 
                        className="w-full p-2 border border-red-300 rounded mt-2" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-red-600">Or login with</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <button 
                            className="bg-red-700 text-white p-2 rounded w-full hover:bg-red-800" 
                            onClick={() => handleSocialLogin("Facebook")}
                        >
                            Facebook
                        </button>
                        <button 
                            className="bg-red-500 text-white p-2 rounded w-full hover:bg-red-600" 
                            onClick={() => handleSocialLogin("Google")}
                        >
                            Google
                        </button>
                    </div>
                </div>
                <p className="text-center text-sm mt-4 text-red-600">
                    Don't have an account? <a href="#" className="text-red-500 hover:text-red-700">Register</a>
                </p>
            </div>
        </div>
    );
}
