import React from 'react';
import Image from 'next/image';
import styles from '../App.module.css';
import beautykosmetikLogo from '../../public/imgs/KundenLogos/beautykosmetikLogo.png';
import contoLogo from '../../public/imgs/KundenLogos/contoLogo.png';
import akayLogo from '../../public/imgs/KundenLogos/akayLogo.png';
import mpucoachLogo from '../../public/imgs/KundenLogos/mpucoachLogo.png';
import myomechanicsLogo from '../../public/imgs/KundenLogos/MyomechanicsLogo.png';
import vlearLogo from '../../public/imgs/KundenLogos/vlearLogo.png';
import Marquee from "react-fast-marquee";

const logos = [
  { src: vlearLogo, alt: 'Vlear', height: 80 },
  { src: myomechanicsLogo, alt: 'Myomechanics', height: 50 },
  { src: mpucoachLogo, alt: 'MPUCoach', height: 80 },
  { src: akayLogo, alt: 'Akay', height: 80 },
  { src: contoLogo, alt: 'Conto', height: 80 },
  { src: beautykosmetikLogo, alt: 'Beautykosmetik', height: 80 },
];

const CustomerLogos = () => {
  return (
    <div className="customerLogos w-full flex flex-col overflow-x-hidden">
        <h1 className='font-bold'>Diese Kunden vertrauen uns</h1>
        <div className={`${styles["customerLogosContainer"]} flex items-center w-[90%] self-center mt-4 mb-8`}>
    <Marquee>


          <Image
            className={`${styles["customerLogo"]} h-[80px] w-auto`}
            src={vlearLogo} // This is the imported image object
            alt="Webdesign"
            quality={100} // Image quality
          />
          <Image
            className={`${styles["customerLogo"]} h-[50px] w-auto`}
            src={myomechanicsLogo} // This is the imported image object
            alt="Webdesign"
            quality={100} // Image quality
          />
          <Image
            className={`${styles["customerLogo"]} `}
            src={mpucoachLogo} // This is the imported image object
            alt="Webdesign"
            quality={100} // Image quality
          />
          <Image
            className={`${styles["customerLogo"]} `}
            src={akayLogo} // This is the imported image object
            alt="Webdesign"
            quality={100} // Image quality
          />
          <Image
            className={`${styles["customerLogo"]} `}
            src={contoLogo} // This is the imported image object
            alt="Webdesign"
            quality={100} // Image quality
          />
          <Image
            className={`${styles["customerLogo"]} `}
            src={beautykosmetikLogo} // This is the imported image object
            alt="Webdesign"
            quality={100} // Image quality
          />

        
    </Marquee>
    </div>
    </div>
  );
};

export default CustomerLogos;