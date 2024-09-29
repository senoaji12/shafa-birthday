import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import audio from '../../assets/audio/background-song.mp3';
import birthdayPhotoSatu from '../../assets/img/fotosatu.png';
import birthdayPhotoDua from '../../assets/img/fotodua.png';
import birthdayPhotoTiga from '../../assets/img/fototiga.png';
import birthdayPhotoEmpat from '../../assets/img/fotoempat.png';
import birthdayPhotoLima from '../../assets/img/fotolima.png';
import birthdayPhotoEnam from '../../assets/img/fotoenam.png';
import birthdayPhotoTujuh from '../../assets/img/fototujuh.png';
import birthdayPhotoDelapan from '../../assets/img/fotodelapan.png';
import birthdayPhotoSembilan from '../../assets/img/fotosembilan.png';
import birthdayPhotoSepuluh from '../../assets/img/fotosepuluh.png';
import birthdayPhotoSebelas from '../../assets/img/fotosebelas.png';
import birthdayPhotoDuabelas from '../../assets/img/fotoduabelas.png';
import birthdayButton from '../../assets/img/button-love.png'
import birthdaySportify from '../../assets/img/sportify-logo.png'

function AboutYouPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const audioRef = useRef(null);
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const slideshowImages = [
        birthdayPhotoSatu,
        birthdayPhotoDua,
        birthdayPhotoTiga,
        birthdayPhotoEmpat,
        birthdayPhotoLima,
        birthdayPhotoEnam,
        birthdayPhotoTujuh,
        birthdayPhotoDelapan,
        birthdayPhotoSembilan,
        birthdayPhotoSepuluh,
        birthdayPhotoSebelas,
        birthdayPhotoDuabelas
    ];

    useEffect(() => {
        if (audioRef.current) {
            const handlePlay = () => {
                alert('Music is now playing!');
            };

            const audioElement = audioRef.current;
            audioElement.addEventListener('play', handlePlay);

            return () => {
                audioElement.removeEventListener('play', handlePlay);
            };
        }
    }, [audioRef]);

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [navigate]);

    const handlePlay = () => {
        setIsPlaying(true);
    };


    const toggleSection = () => {
        setIsVisible(!isVisible);
    };

    const handlePlayandToogleSection = () => {
        handlePlay();
        toggleSection();
    };

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
            }, 3000); 

            return () => clearInterval(interval);
        }
    }, [isVisible, slideshowImages.length]);

    const getVisibleImages = () => {
        const visibleImages = [];

        for (let i = 0; i < 6; i++) {
            const index = (currentSlide + i) % slideshowImages.length;
            visibleImages.push(slideshowImages[index]);
        }

        return visibleImages;
    };

    const renderDots = () => {
        return (
            <div className="flex justify-center mt-4">
                {slideshowImages.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full mx-2 transition-all duration-300 ${currentSlide === index ? 'bg-pink-500' : 'bg-gray-300'}`}
                    ></div>
                ))}
            </div>
        );
    };

    const openModal = () => {
        setIsModalOpen(true); // Open modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close modal
    };

    return (
        <div className="bg-pink-100 flex flex-col items-center justify-center min-h-screen">
            {isPlaying ? (
                <audio
                    ref={audioRef}
                    autoPlay
                    loop
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            ) : (
                <button
                    onClick={handlePlayandToogleSection}
                    className="bg-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out mb-4"
                >
                    {isVisible ? 'Hide Section' : 'Tekan ini duluuu sayaangg ❤'}
                </button>
            )}

            {isVisible && (   
                <>
                <button className="max-w-40 mb-12 shadow-lg" onClick={openModal}>
                    <img src={birthdayButton}></img>
                </button>
                <div className="grid grid-cols-6 gap-4 overflow-hidden">
                      {getVisibleImages().map((image, index) => (
                        <img
                            key={index}
                            className="w-full aspect-square transition-transform duration-1000"
                            src={image}
                            alt={`Slide ${index + 1}`}
                        />
                        ))}
                </div>
                </>
            )}

            {isVisible && renderDots()}


            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="relative bg-white p-6 w-full max-w-md rounded-lg shadow-lg">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-4 text-pink-500 text-xl font-bold hover:text-pink-700"
                        >
                            &times;
                        </button>

                        {/* Love Letter Content */}
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2 text-red-500">Sepucuk cinta yang ditulis dengan beribu tinta</h2>
                            
                            <div className="text-gray-700 text-justify mb-4 overflow-y-scroll h-96">
                                <p className="mb-8">
                                    Heiii.. teruntuk kamu nan jauh di jauh sana, di bandungg.. iyaaaa, ituu kamu sayangg ❤
                                </p>
                                <p className="mb-8">
                                   Teruntuk kamu, aku menulis surat ini, ternyataa.. Bidadari di dunia itu benar benar ada yaa.. Terima kasihh sudah membuktikan itu yaa sayaang ❤ hari inii, tanggal 10 Oktober adalah hari dunia tau bahwa benar adanya bidadari dalam dunia😗 ihiii nambahh tuaa dehh ayangg 😗 Tapi gapapaa, samaa seperti laguu ini, berapa pun usia kamu, kamu selalu cantik di mata aku, kamu selalu menjadi yang terbaik buat akuu ❤ Sejujurnya, aku binggung dalam menulis surat ini, harus dengan kata kata bagaimana atau dengan kalimat apa aku mendeskripsikannya, Karena.. kamu selalu membuktikan apa arti cinta yang sesungguhnya❤ Cara kamu bicara, cara kamu menuntun aku ketika salah, cara kamu ngebujuk aku, semuanyaa sempurnaa sayang ❤ Tuhan benar-benar baik yaa sama aku, dan aku sangat amat beruntung akan hal ituu ❤ Semogaa kamu merasakan hal yang samaa juga yaa sengg❤
                                </p>
                                <p className="mb-8">
                                    Kalau ada sesuatu yang membuat aku terus-terus excited untuk hidup dan merayakannya, kamu adalah salah satunya.. Dalam dirimu.. terdapat banyak cinta, kasih sayang, dan puitis yang menyeret diri ku untuk terjebak di dalam zona hati mu dan kamu bisa menembus kejantanan ku.. mari kita lupakan semua rasa sakit itu yaa sayang karena sejujurnya, aku terlahir untuk mencintamu❤ Aku benar-benar bisa menerima dan mencintai kekurangan mu, hanya satu yang aku gabisa, yaitu kepergian mu.. beri tahu aku di mana letak ujung perpisahan itu? akan ku tunggu kamu di sana dan menjaga mu untuk tidak memasuki zona tersebut❤ Tolong ajarkan aku untuk menjadi seperti apa yang kamu mau yaa sayang ❤ Tolong jangan gantikan posisi ku dengan yang lain.. Pasti banyak orang-orang di sekitar kamu yang suka sama kamu secara diam diam atau bahkan brutal? bagaimana tidak? cara kamu bersikap.. cara kamu bicara.. semuanya lembut ❤  Tetapi kamu tetap memilih aku untuk menjadi pasangan kamu ❤ Terima kasih yaa sayangg ❤ 
                                </p>
                                <p>
                                  Hari ini, aku langitkan semua doa terbaik untuk kamu sayang ❤ semoga apa yang patah dalam diri kamu, menjadi alasan untuk kamu tumbuh ❤ Semoga dunia senantiasa menjaga kamu kapan pun dan di mana pun kamu berada ❤ Semoga hari hari mu dipenuhi dengan rasa cinta dan kasih sayang tanpa batas, senantiasa tumbuh untuk menjadi manusia yang baik, yang menolong orang lain saat membutuhkan, dan semoga senyum orang tua yang engkau usahakan hingga saat ini dan seterusnya sudah terlaksana yaa sayang ❤ Aku selalu mengharapkan hari-hari mu dilengkapi dengan sebuah kebahagiaan ❤ Di bawahnya ada playlist untuk kamu sayangg, dengerin yaa ❤
                                </p>

                                <div className="flex justify-center mt-8 mb-8">
                                    <a href="https://open.spotify.com/playlist/5c5KgnFUvJ1U7tPVrJ66TX?si=s33rZD_FTWqA7CQw1Iewpg&pi=NHsaM9WtS0GiS" target="_blank">
                                        <img src={birthdaySportify} className="max-w-32"></img>
                                    </a>
                                </div>
                            </div>

                            <p className="mt-4 text-pink-500 font-bold">With all my love ❤️</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AboutYouPage;
