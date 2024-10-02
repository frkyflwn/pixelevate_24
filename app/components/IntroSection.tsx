import React, { useState, useRef } from 'react';
import './SmileToggle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import cardBg from '../../public/imgs/cardbg.jpg';
import { gsap } from 'gsap';

const IntroSection = () => {

    const [selectedRating, setSelectedRating] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const gradientDivRef = useRef(null);
    const challengesRef = useRef(null);
    const goalsRef = useRef(null);

    const handleFormClick = (rating: string) => {
        if (isAnimating) return;
        setIsAnimating(true);

        setSelectedRating(rating);
        const newGradient = rating === 'fun'
            ? 'linear-gradient(to right, rgba(72, 207, 173, 0.5), rgba(25, 255, 150, 0.5))'
            : 'linear-gradient(to right, rgba(255, 99, 72, 0.5), rgba(255, 48, 79, 0.5))';

        gsap.to(gradientDivRef.current, {
            duration: 0.5,
            backgroundImage: newGradient,
            ease: "none",
        });

        const firstRef = rating === 'fun' ? challengesRef.current : goalsRef.current;
        const secondRef = rating === 'fun' ? goalsRef.current : challengesRef.current;

        gsap.to(firstRef, {
            duration: 0.25,
            opacity: 0,
            onComplete: () => {
                gsap.to(secondRef, {
                    duration: 0.75,
                    opacity: 1,
                    onComplete: () => setIsAnimating(false),
                });
            }
        });
    };

    return (
        <div className='w-full flex flex-col items-center justify-center bg-[#f7f7f7] py-24'>
            <div className="w-3/5 flex flex-col text-center">
                <p className='text-black text-2xl'>Du bist <span className='text-4xl bg-clip-text text-transparent bg-gradient-to-br from-[#F67280] to-[#320435] font-bold'>Coach</span>, <span className='text-4xl bg-clip-text text-transparent bg-gradient-to-br from-[#F67280] to-[#320435] font-bold'>Trainer</span> oder <span className='text-4xl bg-clip-text text-transparent bg-gradient-to-br from-[#F67280] to-[#320435] font-bold'>Therapeut?</span><br /> Du willst deine nächsten Kunden nicht mehr dem Zufall überlassen oder dich allein auf Empfehlungen verlassen?
                    Du bist es leid, ständig wiederkehrende Aufgaben erledigen zu müssen und findest keine Zeit mehr, dich auf das Wesentliche zu konzentrieren?
                    Möchtest du endlich dein Plateau überwinden und ein System finden, das dir deine Lasten abnimmt?</p>

                <div ref={gradientDivRef} className="my-16 shadow-xl max-w-[700px] mx-auto pb-8 pt-8 rounded-lg relative bg-gradient-to-r from-red-300/50 to-red-500/50">
                    <Image
                        className='absolute z-[10] opacity-25 rounded-lg '
                        src={cardBg} // This is the imported image object
                        alt="Card Background"
                        object-position='center'
                        object-fit="cover"
                        fill
                        quality={100} // Image quality
                    />
                    <div className='w-full z-[20] flex flex-col justify-center relative'>

                        <div ref={challengesRef} className='flex flex-col min-h-[425px]'>
                            <h2 className='text-center'>Herausforderungen</h2>
                            <ul className='text-black text-left text-xl z-[20] relative inline-block w-[90%] mx-auto'>
                                <li className='pb-2 flex items-start'><FontAwesomeIcon className='pr-2 text-red-500 mt-1' icon={faXmark} /><span>Du hast noch keine Webseite oder diese erfüllt nicht ihren Zweck</span></li>
                                <li className='pb-2 flex items-start'><FontAwesomeIcon className='pr-2 text-red-500 mt-1' icon={faXmark} /><span>Deine Zielgruppe wird nicht auf dich aufmerksam</span></li>
                                <li className='pb-2 flex items-start'><FontAwesomeIcon className='pr-2 text-red-500 mt-1' icon={faXmark} /><span>Deine Marketingmaßnahmen sind unzuverlässig und führen nicht zu planbaren Ergebnissen</span></li>
                                <li className='pb-2 flex items-start'><FontAwesomeIcon className='pr-2 text-red-500 mt-1' icon={faXmark} /><span>Du hast keinen klaren Fahrplan um neue Kunden zu gewinnen</span></li>
                                <li className='pb-2 flex items-start'><FontAwesomeIcon className='pr-2 text-red-500 mt-1' icon={faXmark} /><span>Manuelle Arbeitsabläufe kosten dich zu viel Zeit und Ressourcen</span></li>
                            </ul>
                            <p className='text-black text-xl px-12 mt-4'>Lass deine Webseite <b>kostenlos</b> von uns checken und wir senden dir eine <b>Analyse mit Optimierungen</b></p>
                            <button className='mt-4 text-xl text-black font-bold'><FontAwesomeIcon className='pr-2 text-black' icon={faArrowRightLong} />zum Website Check-Up</button>
                        </div>

                        <div ref={goalsRef} className='flex flex-col min-h-[425px] absolute opacity-0'>
                            <h2 className='text-center'>Ziele</h2>
                            <ul className='text-black text-left text-xl z-[20] relative inline-block w-[90%] mx-auto'>
                                <li className='pb-2 flex items-start'><FontAwesomeIcon className='pr-2 text-green-500 mt-1' icon={faCheck} /><span>Online-Präsenz die deine Zielgruppe überzeugt</span></li>
                                <li className='pb-2 flex items-start'><FontAwesomeIcon className='pr-2 text-green-500 mt-1' icon={faCheck} /><span>Gezieltes SEO und Content-Marketing, das deine Reichweite erhöht</span></li>
                                <li className='pb-2 flex items-start'><FontAwesomeIcon className='pr-2 text-green-500 mt-1' icon={faCheck} /><span>Automatisierte Leadgenerierung für zuverlässige und messbare Ergebnisse.</span></li>
                                <li className='pb-2 flex items-start'><FontAwesomeIcon className='pr-2 text-green-500 mt-1' icon={faCheck} /><span>Arbeite mit deinen Wunschkunden zusammen</span></li>
                                <li className='pb-2 flex items-start'><FontAwesomeIcon className='pr-2 text-green-500 mt-1' icon={faCheck} /><span>Zeit und Kosten sparen durch optimierte und automatisierte Arbeitsabläufe</span></li>
                            </ul>
                            <p className='text-black text-xl px-12 mt-4'>Bereit für Veränderung? Mache jetzt den ersten Schritt</p>
                            <button className='mt-4 text-xl text-black font-bold'><FontAwesomeIcon className='pr-2 text-black' icon={faArrowRightLong} />Projekt anfragen</button>
                        </div>
                    </div>



                    <div className="smile-rating-container" onClick={() => handleFormClick(selectedRating === 'fun' ? 'meh' : 'fun')}>
                        <div className="smile-rating-toggle-container">
                            <form className="submit-rating">
                                <input id="meh" name="satisfaction" type="radio" checked={selectedRating === 'meh'} onChange={() => { }} />
                                <input id="fun" name="satisfaction" type="radio" checked={selectedRating === 'fun'} onChange={() => { }} />
                                <label hidden htmlFor="meh" className="rating-label rating-label-meh"></label>
                                <div className="smile-rating-toggle"></div>

                                <div className="rating-eye rating-eye-left"></div>
                                <div className="rating-eye rating-eye-right"></div>

                                <div className="mouth rating-eye-bad-mouth"></div>

                                <div className="toggle-rating-pill"></div>
                                <label hidden htmlFor="fun" className="rating-label rating-label-fun"></label>
                            </form>
                        </div>
                    </div>

                </div>

                <br /><p className='text-black text-2xl mt-4'>Wir kennen deine Herausforderungen!<br /> Deshalb haben wir uns darauf spezialisiert,
                    <b> genau diese Probleme zu lösen</b>. Dabei nutzen wir bewährte Marketingmethoden und Technologien, die den aktuellen Trends entsprechen und auch dir helfen können, <b>dein Business auf das nächste Level zu&nbsp;bringen.</b></p>
            </div>
        </div>
    )
}

export default IntroSection