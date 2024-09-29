import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function QuestionPage() {
    const navigate = useNavigate();
    const [position, setPosition] = useState({ top: '50%', left: '50%' });
    const [textIndex, setTextIndex] = useState(0);

    // Daftar teks yang muncul di tombol secara berurutan
    const texts = ['Udah engga!', 'Ih diklik :(', 'Ih diklik lagi :(', 'Parah banget diklik lagi :('];

    // Fungsi untuk memindahkan tombol secara acak dan mengganti teks
    const moveButton = () => {
        const randomTop = Math.floor(Math.random() * 80) + 10 + '%'; // Top antara 10%-90%
        const randomLeft = Math.floor(Math.random() * 80) + 10 + '%'; // Left antara 10%-90%

        setPosition({ top: randomTop, left: randomLeft });
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Ganti teks secara berurutan
    };

    // Mengecek session login, jika tidak ada, arahkan ke halaman login
    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [navigate]);

    // Fungsi logout
    const handleLogout = () => {
        sessionStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    // Fungsi navigasi ke halaman 'About You'
    const handleAboutYou = () => {
        navigate('/aboutyou');
    };

    return (
        <div className="relative bg-pink-100 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl mb-8">Kamu masih cinta engga sama aku? Tolong jawab jujur yaa!</h1>
            
            <div>
                <button
                    onClick={handleAboutYou}
                    className="mb-4 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 mr-60"
                >
                    Masih dong ❤
                </button>

                <button
                    onClick={moveButton}
                    style={{ position: 'absolute', top: position.top, left: position.left, zIndex: 10 }}
                    className="bg-red-500 mt-1 text-white py-2 px-4 rounded-full transition duration-300"
                >
                    {texts[textIndex]}
                </button>
            </div>
        </div>
    );
}

export default QuestionPage;
