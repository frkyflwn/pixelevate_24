'use client'

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from '../../App.module.css';
import Formular from "./ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faX } from '@fortawesome/free-solid-svg-icons'

export function ProjectRequestP1({ isAnimated, toggleAnimation }: { isAnimated: boolean, toggleAnimation: () => void }) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      const animationDirection = isAnimated ? 0 : '-120%';
      gsap.to(divRef.current, { y: animationDirection, duration: 0.5 });
    }
  }, [isAnimated]);

  return (
    <div className='fixed flex justify-center sm:items-center w-full h-full z-40 translate-y-[-120%] backdrop-blur-md overflow-y-auto' ref={divRef}>
      <div className={styles.projectRequestCon}>

        <FontAwesomeIcon className="absolute right-0 text-xl text-white p-6 cursor-pointer" icon={faX} onClick={toggleAnimation} />
        <h3 className="text-white text-2xl uppercase mt-8 mb-10 text-center">Projekt Anfrage</h3>
        <Formular toggleAnimation={toggleAnimation}/>
        <div className="projectRequestFooter w-full py-[5px] bg-[#320435] text-white relative bottom-0">

          <p className="text-center">Mo-Sa 08:00 - 20:00 Uhr</p>
          <div className="flex justify-center">
            <p className="text-center" ><FontAwesomeIcon className="pr-1" icon={faEnvelope} />&nbsp;kontakt@pixelevate.de</p>
            <p className="text-center" ><FontAwesomeIcon className="pr-1 pl-2" icon={faPhone} />+49(0)&nbsp;162&nbsp;969&nbsp;4099</p>
          </div>

        </div>

      </div>
    </div>
  );
}