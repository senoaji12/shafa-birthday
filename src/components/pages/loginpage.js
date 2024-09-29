import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username ==='shafacantik08' && password === 'sayangajibanyakbanyakdanseterusnya') {
            sessionStorage.setItem('isLoggedIn', true);
            navigate('/question')
        } else {
            alert('Hayooo kamuu udah ga sayang aku lagii yaa? :<')
        }
    }

    return(
        <div class="bg-pink-100 flex items-center justify-center min-h-screen">
            <div class="bg-white rounded-lg shadow-lg p-8 md:p-12 w-full max-w-md relative">
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg class="w-24 h-24 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                </div>

                <h2 class="text-3xl font-bold text-center text-pink-600 mb-2">Welcome, Love!</h2>
                <p class="text-center text-pink-600 mb-8">Isinyaa pakee username dan password yang udahh aku kasih yaa!</p>

                <form onSubmit={handleLogin}>
                <div class="mb-4">
                    <label for="username" class="block text-gray-700 font-semibold mb-2">Username</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Isi usernamenya sayang <3" class="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>

                <div class="mb-6">
                    <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Isi passwordnya jugaa <3" class="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>

                <button type="submit" class="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
                    Log In
                </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;