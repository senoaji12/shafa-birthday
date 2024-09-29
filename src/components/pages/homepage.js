import React, { useState, useEffect } from "react";
import documentPdf from '../../assets/docs/PANDUAN PENGGUNAAN BIRTHDAY LOVE WEBSITE ❤.pdf';
import { saveAs } from 'file-saver';
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    const handleDownload = () => {
        saveAs(documentPdf, 'PANDUAN PENGGUNAAN BIRTHDAY LOVE WEBSITE ❤.pdf');
    };

    const handleQuestion = () => {
        navigate('/login')
    }

    return (
        <div className="bg-pink-100 flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4 justify-center text-center">Heii, hari ini anak baikk sedang ulang tahun yaa?</h2>
            <p className="text-lg mb-4 mx-5 justify-center text-center">Aku adaa hadiah nihh buatt anakk baikk satu iniii ❤ tapi tolongg ikutin arahan yang adaa di pdf yaa sayangg ❤ </p>
            <p className="text-lg mb-4 justify-center text-center">Arahaannya ada di bawahh sinii anakk baikk 👇</p>
            <div>
                <button
                    onClick={handleQuestion}
                    className="bg-pink-500 mr-10 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out"
                > 
                    Login
                </button>
                <button
                    onClick={handleDownload}
                    className="text-pink-500 border-2 border-pink-500 font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                >
                    Download PDF
                </button>
            </div>
        </div>
    );
}

export default HomePage;