import { useState } from "react";
import React from "react";
export default function RegistrationForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [otpEmail, setOtpEmail] = useState("");
    const [otpPhone, setOtpPhone] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [error, setError] = useState("");

    const generateOtp = () => {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedOtp(otp);
        alert(`OTP Sent: ${otp}`);
    };

    const verifyOtp = () => {
        if (otpEmail === generatedOtp && otpPhone === generatedOtp) {
            setIsOtpVerified(true);
            alert("OTP Verified! Now you can submit.");
        } else {
            setError("Invalid OTP. Try again!");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isOtpVerified) {
            setError("Please verify OTP first!");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        alert(`Registration successful!\nUsername: ${email}\nPassword: ${password}`);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-red-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[800px] border border-red-500">
                <h2 className="text-center text-2xl font-bold mb-4 text-red-600">Register</h2>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="flex space-x-4 items-center">
                        <label className="text-gray-700 w-40">First Name:</label>
                        <input 
                            type="text" 
                            className="flex-1 p-3 border border-red-300 rounded" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                            required
                        />
                        <label className="text-gray-700 w-40">Last Name:</label>
                        <input 
                            type="text" 
                            className="flex-1 p-3 border border-red-300 rounded" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="flex space-x-2 items-center mt-2">
                        <label className="text-gray-700 w-40">Email:</label>
                        <input 
                            type="email" 
                            className="flex-1 p-3 border border-red-300 rounded" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="flex space-x-2 items-center mt-2">
                        <label className="text-gray-700 w-40">Phone Number:</label>
                        <input 
                            type="tel" 
                            className="flex-1 p-3 border border-red-300 rounded" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="flex space-x-2 items-center mt-2">
                        <label className="text-gray-700 w-40">Password:</label>
                        <input 
                            type="password" 
                            className="flex-1 p-3 border border-red-300 rounded" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="flex space-x-2 items-center mt-2">
                        <label className="text-gray-700 w-40">Confirm Password:</label>
                        <input 
                            type="password" 
                            className="flex-1 p-3 border border-red-300 rounded" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required
                        />
                    </div>
                    <button 
                        type="button" 
                        className="w-full bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600" 
                        onClick={generateOtp}
                    >
                        Send OTP
                    </button>
                    <div className="flex space-x-2 items-center mt-2">
                        <label className="text-gray-700 w-40">Email OTP:</label>
                        <input 
                            type="text" 
                            className="flex-1 p-3 border border-red-300 rounded" 
                            value={otpEmail} 
                            onChange={(e) => setOtpEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex space-x-2 items-center mt-2">
                        <label className="text-gray-700 w-40">Phone OTP:</label>
                        <input 
                            type="text" 
                            className="flex-1 p-3 border border-red-300 rounded" 
                            value={otpPhone} 
                            onChange={(e) => setOtpPhone(e.target.value)}
                        />
                    </div>
                    <button 
                        type="button" 
                        className="w-full bg-green-500 text-white p-3 rounded mt-2 hover:bg-green-600" 
                        onClick={verifyOtp}
                    >
                        Verify OTP
                    </button>
                    <button 
                        type="submit" 
                        className={`w-full text-white p-3 rounded mt-4 ${isOtpVerified ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-400 cursor-not-allowed'}`} 
                        disabled={!isOtpVerified}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
