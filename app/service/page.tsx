'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../App.module.css';
import webdesignpic from '../../public/imgs/devicesdesign2.jpg';
import webdevpic from '../../public/imgs/webdevservice.png';
import ecomservicepic from '../../public/imgs/ecommerceservice.jpg';
import autoservicepic from '../../public/imgs/automationservice.jpg';
import wartungupdatespic from '../../public/imgs/wartungupdates.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBrush, faCartPlus, faCode, faMicrochip, faPaintBrush, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

type ServiceType = {
  title: string;
  image: JSX.Element;
  content: JSX.Element;
};

const RequestProjectButton = () => (
  <div>
    <button className={styles["cta"]}>
      <span className={styles["span"]}>PROJEKT ANFRAGEN</span>
      <span className={styles["second"]}>
        <svg width="50px" height="20px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path className={styles["one"]} d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
            <path className={styles["two"]} d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
            <path className={styles["three"]} d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
          </g>
        </svg>
      </span>
    </button>
  </div>
);

const WebdesignService = () => {
  const imageRef = useRef(null);
  const listRef = useRef(null);
  const list2Ref = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(listRef.current,
      { autoAlpha: 0, x: -50 },
      {
        autoAlpha: 1, x: 0, duration: 0.5,
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top bottom-=150',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.fromTo(imageRef.current,
      { autoAlpha: 0, x: 50 },
      {
        autoAlpha: 1, x: 0, duration: 0.5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom-=270',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.fromTo(list2Ref.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1, duration: 0.5,
        scrollTrigger: {
          trigger: list2Ref.current,
          start: 'top bottom-=230',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.to(parentRef.current,
      { autoAlpha: 0, delay: 29, duration: 1 });
  }, []);

  return (
    <div ref={parentRef} className="flex flex-col md:flex-row flex-wrap justify-center">
      <div ref={listRef} className='max-h-full w-full xl:w-2/4 max-w-full pt-6 2xl:pt-12 order-[1]'>
        <h1 className='uppercase text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-[#F67280] to-[#320435] drop-shadow-[4px_8px_6px_rgba(0,0,0,0.2)] font-extrabold pb-5'>Webdesign <FontAwesomeIcon className='ServiceIcon text-[#F67280]' icon={faPaintBrush} /></h1>
        <p className='text-[1.125rem] md:text-xl text-black'>Ihr Online-Auftritt ist <b>mehr als Ihre digitale Visitenkarte</b>. Der erste Eindruck ist entscheidend dafür, ob ein Kunde Kunde
          wird. Daher sind <b>die Performance der Webseite und eine klare Botschaft ausschlaggebend für Ihren Online-Erfolg</b>. Als&nbsp;erfahrene Webdesigner
          kreieren wir <b>ansprechende und funktionale Webseiten, die nicht nur gut aussehen, sondern auch Ihre Zielgruppe überzeugen</b>. Lassen Sie uns gemeinsam
          Ihre Vision in eine beeindruckende Online-Präsenz verwandeln, die Ihre Marke ins beste Licht rückt und Ihre Kunden&nbsp;begeistert.</p>
        <RequestProjectButton />
      </div>
      {/* <img ref={imageRef} className='max-h-full w-auto xl:w-2/4 max-w-full pt-0 order-[0] xl:order-[1]' src={webdesignpic} alt="Webdesign" /> */}
      <Image
        ref={imageRef}
        className='max-h-full w-auto xl:w-2/4 max-w-full pt-0 order-[0] xl:order-[1]'
        src={webdesignpic} // This is the imported image object
        alt="Webdesign"
        quality={100} // Image quality
      />
      <div ref={list2Ref} className={styles['wdServiceHeadlines']}>
        <ul className='list-none flex flex-wrap pb-2 text-[1.125rem] md:text-xl justify-center lg:w-[90%] max-w-full m-auto'>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Konzept & Strategie</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>schnelle Ladezeiten</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Logo Design</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>UI/UX-Design</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Corporate Design</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Relaunch / Redesign</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Responsive Design</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>DSGVO Konform</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Barrierefreiheit</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>SEO</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Webhosting</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Custom CMS & Wordpress</li>
        </ul>
      </div>
    </div>
  );
};

const WebdevService = () => {
  const imageRef = useRef(null);
  const listRef = useRef(null);
  const list2Ref = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(listRef.current,
      { autoAlpha: 0, x: -50 },
      {
        autoAlpha: 1, x: 0, duration: 0.5,
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top bottom-=150',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.fromTo(imageRef.current,
      { autoAlpha: 0, x: 50 },
      {
        autoAlpha: 1, x: 0, duration: 0.5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom-=270',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.fromTo(list2Ref.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1, duration: 0.5,
        scrollTrigger: {
          trigger: list2Ref.current,
          start: 'top bottom-=230',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.to(parentRef.current,
      { autoAlpha: 0, delay: 29, duration: 1 });
  }, []);

  return (
    <div ref={parentRef} className="flex flex-col md:flex-row flex-wrap justify-center">
      <div ref={imageRef} className='max-h-full w-full xl:w-2/4 max-w-full pt-6 2xl:pt-12 order-[1] xl:order-[2]'>
        <h1 className='uppercase text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-[#F67280] to-[#320435] drop-shadow-[4px_8px_6px_rgba(0,0,0,0.2)] font-extrabold pb-5'>Webentwicklung <i className="ServiceIcon fas fa-code"></i></h1>
        <p className='text-[1.125rem] md:text-xl text-black'>Wir bieten <b>maßgeschneiderte Lösungen, die perfekt auf Ihre Bedürfnisse und Ziele abgestimmt sind</b>.
          Ob <b>Termin- und Reservierungssysteme, Login-Systeme, Schnittstellen zu externen Diensten, oder andere individuelle Funktionen</b> – wir sorgen dafür,
          dass Ihre Webseite <b>nicht nur gut aussieht, sondern auch hochfunktional ist</b>. Von der Konzeption über die Programmierung bis hin zur Integration
          und Wartung stehen wir Ihnen zur Seite. Vertrauen Sie auf unsere Expertise, um Ihre Kunden mit vielseitigen Funktionen und herausragender
          Benutzerfreundlichkeit zu&nbsp;begeistern.</p>
        <RequestProjectButton />
      </div>

      <Image
        ref={listRef}
        className='max-h-full w-auto xl:w-2/4 max-w-full pt-0 order-[0] xl:order-[1] sm:px-12 lg:px-36 xl:px-12'
        src={webdevpic} // This is the imported image object
        alt="Webdesign"
        quality={100} // Image quality
      />
      <div ref={list2Ref} className={styles['wdServiceHeadlines']}>
        <ul className='list-none flex flex-wrap pb-2 text-[1.125rem] md:text-xl justify-center lg:w-[90%] max-w-full m-auto'>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Konzept & Planung</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Terminbuchungs- & Reservierungssysteme</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>API & Integration</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Sichere Login-Systeme</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Datenbanksysteme</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Webanwendungen</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Modulare Erweiterungen</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Performance-Optimierung</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Mobile Apps</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Systemwartung & Updates</li>
        </ul>
      </div>
    </div>
  );
};

const ShopService = () => {
  const imageRef = useRef(null);
  const listRef = useRef(null);
  const list2Ref = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(listRef.current,
      { autoAlpha: 0, x: 50 },
      {
        autoAlpha: 1, x: 0, duration: 0.5,
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top bottom-=150',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.fromTo(imageRef.current,
      { autoAlpha: 0, x: -50 },
      {
        autoAlpha: 1, x: 0, duration: 0.5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom-=270',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.fromTo(list2Ref.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1, duration: 0.5,
        scrollTrigger: {
          trigger: list2Ref.current,
          start: 'top bottom-=230',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.to(parentRef.current,
      { autoAlpha: 0, delay: 29, duration: 1 });
  }, []);

  return (
    <div ref={parentRef} className="flex flex-col md:flex-row flex-wrap justify-center">
      <div ref={listRef} className='max-h-full w-full xl:w-2/4 max-w-full pt-6 2xl:pt-12 order-[1] xl:order-[2]'>
        <h1 className='uppercase text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-[#F67280] to-[#320435] drop-shadow-[4px_8px_6px_rgba(0,0,0,0.2)] font-extrabold pb-5'>E-Commerce <i className="ServiceIcon fas fa-cart-plus"></i></h1>
        <p className='text-[1.125rem] md:text-xl text-black'>Unsere maßgeschneiderten Online-Shops sind darauf ausgelegt, <b>Ihre Geschäftsziele
          zu unterstützen und den Online-Verkauf zu optimieren</b>. Wir bieten umfassende Funktionen wie <b>Produktkataloge, Warenkörbe, sichere
            Zahlungssysteme und Bestandsverwaltung</b>. Von der ersten Idee bis zur finalen Implementierung und darüber hinaus stehen wir Ihnen zur Seite.
          Mit unserem Know-how schaffen wir eine Plattform, die Ihren Kunden ein nahtloses und angenehmes Einkaufserlebnis bietet und Ihr Geschäft
          effizient vorantreibt.</p>
        <RequestProjectButton />
      </div>

      <Image
        ref={imageRef}
        className='max-h-full w-auto xl:w-2/4 max-w-full pt-0 order-[0] xl:order-[1] sm:px-12 lg:px-36 xl:px-12'
        src={ecomservicepic} // This is the imported image object
        alt="Webdesign"
        quality={100} // Image quality
      />
      <div ref={list2Ref} className={styles['wdServiceHeadlines']}>
        <ul className='list-none flex flex-wrap pb-2 text-[1.125rem] md:text-xl justify-center lg:w-[90%] max-w-full m-auto'>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Konzept & Strategie</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Online-Shops</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Produktkatalog-Management</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Warenkorb- und Checkout-Systeme</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Sichere Zahlungssysteme</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Bestandsverwaltung</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Rabatt- und Gutscheinverwaltung</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Performance-Optimierung</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Mobile E-Commerce</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Integration von Drittanbieter-APIs</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Systemwartung & Updates</li>

        </ul>
      </div>
    </div>
  );
};

const AutoService = () => {
  const imageRef = useRef(null);
  const listRef = useRef(null);
  const list2Ref = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(listRef.current,
      { autoAlpha: 0, x: -50 },
      {
        autoAlpha: 1, x: 0, duration: 0.5,
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top bottom-=150',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.fromTo(imageRef.current,
      { autoAlpha: 0, x: 50 },
      {
        autoAlpha: 1, x: 0, duration: 0.5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom-=270',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.fromTo(list2Ref.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1, duration: 0.5,
        scrollTrigger: {
          trigger: list2Ref.current,
          start: 'top bottom-=200',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.to(parentRef.current,
      { autoAlpha: 0, delay: 29, duration: 1 });
  }, []);

  return (
    <div ref={parentRef} className="flex flex-col md:flex-row flex-wrap justify-center">
      <div ref={listRef} className='max-h-full w-full xl:w-2/4 max-w-full pt-6 2xl:pt-12 order-[1]'>
        <h1 className='uppercase text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-[#F67280] to-[#320435] drop-shadow-[4px_8px_6px_rgba(0,0,0,0.2)] font-extrabold pb-5'>Automatisierung <i className="ServiceIcon fas fa-microchip"></i></h1>
        <p className='text-[1.125rem] md:text-xl text-black'>Unsere Automatisierungslösungen sind darauf ausgelegt, <b>Ihre Geschäftsabläufe zu optimieren und Ihnen
          wertvolle Zeit zu sparen</b>. Ob es um die Automatisierung von <b>wiederkehrenden Aufgaben, die Integration von Systemen oder die Einrichtung
            effizienter Workflows</b> geht – wir entwickeln <b>maßgeschneiderte Lösungen, die Ihre Prozesse vereinfachen und Ihre Mitarbeiter entlasten</b>.
          Von der Analyse über die Implementierung bis hin zur kontinuierlichen Betreuung stehen wir Ihnen zur Seite. Nutzen Sie unsere Lösungen,
          um Ihre Effizienz zu steigern und sich auf das Wesentliche zu&nbsp;konzentrieren.</p>
        <RequestProjectButton />
      </div>

      <Image
        ref={imageRef}
        className='max-h-full w-auto xl:w-2/4 max-w-full pt-0 order-[0] xl:order-[1] md:px-12 xl:px-6'
        src={autoservicepic} // This is the imported image object
        alt="Webdesign"
        quality={100} // Image quality
      />
      <div ref={list2Ref} className={styles['wdServiceHeadlines']}>
        <ul className='list-none flex flex-wrap pb-2 text-[1.125rem] md:text-xl justify-center lg:w-[90%] max-w-full m-auto'>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Prozessanalyse & Optimierung</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Automatisierte Workflows</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Integration von Systemen & APIs</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Datenverarbeitung & -management</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Newsletter</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Kundenbeziehungsmanagement (CRM)</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Bestell- & Lagerverwaltung</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Rechnungsstellung & Buchhaltung</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Terminplanung & Erinnerungen</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Mitarbeiterverwaltung</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Kontinuierliche Überwachung & Wartung</li>

        </ul>
      </div>
    </div>
  );
};

const SeoService = () => (
  <div>
    <h2>SEO</h2>
    <p>Suchmaschinenoptimierung</p>
  </div>
);

const ConsultingService = () => (
  <div>
    <h2>Wartung & Updates</h2>
    <p>More detailed content here...</p>
  </div>
);

const MaintainService = () => {
  const imageRef = useRef(null);
  const listRef = useRef(null);
  const list2Ref = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(listRef.current,
      { autoAlpha: 0, x: 50 },
      {
        autoAlpha: 1, x: 0, duration: 0.5,
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top bottom-=150',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.fromTo(imageRef.current,
      { autoAlpha: 0, x: -50 },
      {
        autoAlpha: 1, x: 0, duration: 0.5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom-=270',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.fromTo(list2Ref.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1, duration: 0.5,
        scrollTrigger: {
          trigger: list2Ref.current,
          start: 'top bottom-=230',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.to(parentRef.current,
      { autoAlpha: 0, delay: 29, duration: 1 });
  }, []);

  return (
    <div ref={parentRef} className="flex flex-col md:flex-row flex-wrap justify-center">
      <div ref={listRef} className='max-h-full w-full xl:w-2/4 max-w-full pt-6 2xl:pt-12 order-[1] xl:order-[2]'>
        <h1 className='uppercase text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-[#F67280] to-[#320435] drop-shadow-[4px_8px_6px_rgba(0,0,0,0.2)] font-extrabold pb-5'>Wartung & Updates <i className="ServiceIcon fas fa-screwdriver-wrench"></i></h1>
        <p className='text-[1.125rem] md:text-xl text-black'>Unser Wartungs- und Update-Service sorgt dafür, dass Ihre Systeme stets auf dem neuesten Stand sind.
          Wir übernehmen <b>regelmäßige Updates und Aktualisierungen für Ihre bestehenden Projekte, um Sicherheit, Leistung und Funktionalität</b> zu gewährleisten.
          Egal, ob es sich um <b>Software-Updates, Sicherheits-Patches oder Optimierungen handelt – wir kümmern uns um alle notwendigen Maßnahmen, damit
            Ihre Webseite oder Anwendung reibungslos läuft</b>. Vertrauen Sie auf unsere Zuverlässigkeit und Fachkenntnisse, um Ihre digitalen Projekte
          kontinuierlich zu pflegen und zu verbessern.</p>
        <RequestProjectButton />
      </div>
      
      <Image
        ref={imageRef}
        className='max-h-full w-auto xl:w-2/4 max-w-full pt-0 order-[0] xl:order-[1] sm:px-12 lg:px-48 xl:px-28'
        src={wartungupdatespic} // This is the imported image object
        alt="Webdesign"
        quality={100} // Image quality
      />
      <div ref={list2Ref} className={styles['wdServiceHeadlines']}>
        <ul className='list-none flex flex-wrap pb-2 text-[1.125rem] md:text-xl justify-center lg:w-[90%] max-w-full m-auto'>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Regelmäßige Software-Updates</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Sicherheits-Patches</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Performance-Optimierungen</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Fehlerbehebungen</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Backup-Management</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Kompatibilitätsprüfungen</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Content-Updates</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Überwachung und Monitoring</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Datenbank-Wartung</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Benutzer-Support</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>System-Optimierungen</li>
          <li><i className={`fa-solid fa-check ${styles.checkIcon}`}></i>Notfallwiederherstellung</li>
        </ul>
      </div>
    </div>
  );
};

const ServicePage = () => {

  const services: ServiceType[] = [
    { title: 'Webdesign', image: <FontAwesomeIcon className='ServiceIcon' icon={faPaintBrush} />, content: <WebdesignService /> },
    { title: 'Webentwicklung', image: <FontAwesomeIcon className='ServiceIcon' icon={faCode} />, content: <WebdevService /> },
    { title: 'E-Commerce', image: <FontAwesomeIcon className='ServiceIcon' icon={faCartPlus} />, content: <ShopService /> },
    { title: 'Automatisierung', image: <FontAwesomeIcon className='ServiceIcon' icon={faMicrochip} />, content: <AutoService /> },
    // { title: 'SEO', image: <i className="serviceicon fa fa-magnifying-glass"></i>, content: <SeoService /> },
    { title: 'Wartung & Updates', image: <FontAwesomeIcon className='ServiceIcon' icon={faScrewdriverWrench} />, content: <MaintainService /> },
  ];

  const pageTitleRef = useRef(null);
  const serviceNavRef = useRef(null);
  const serviceCardsContainerRef = useRef<HTMLDivElement | null>(null);
  const serviceCardRefs = services.map(() => React.createRef<HTMLDivElement>());
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [mouseDownX, setMouseDownX] = useState(0);
  const [mouseDownPos, setMouseDownPos] = useState<{ x: number, y: number } | null>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    gsap.fromTo(pageTitleRef.current,
      { autoAlpha: 0, y: -50 },
      {
        autoAlpha: 1, y: 0, duration: 0.5,
        scrollTrigger: {
          trigger: pageTitleRef.current,
          start: 'top bottom-=150',
          scrub: false,
          toggleActions: 'play none none reverse'
        }
      });
    gsap.to(serviceNavRef.current, { bottom: '0', duration: 1, ease: 'power1.out' });
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setDragging(false);
    if (serviceCardsContainerRef.current) {
      setScrollLeft(serviceCardsContainerRef.current.scrollLeft);
    }
    setMouseDownX(e.clientX);
    setMouseDownPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (e: MouseEvent) => {
    setIsMouseDown(false);
    setMouseDownPos(null);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isMouseDown && serviceCardsContainerRef.current) {
      const dx = e.clientX - mouseDownX;
      serviceCardsContainerRef.current.scrollLeft = scrollLeft - dx;
      if (mouseDownPos && (Math.abs(e.clientX - mouseDownPos.x) > 5 || Math.abs(e.clientY - mouseDownPos.y) > 5)) {
        setDragging(true);
      }
    }
  };

  useEffect(() => {
    const serviceCardsContainerElement = serviceCardsContainerRef.current;
    if (serviceCardsContainerElement) {
      serviceCardsContainerElement.addEventListener('mousemove', handleMouseMove);
      serviceCardsContainerElement.addEventListener('mouseup', handleMouseUp);

      return () => {
        serviceCardsContainerElement.removeEventListener('mousemove', handleMouseMove);
        serviceCardsContainerElement.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isMouseDown, scrollLeft, mouseDownX, mouseDownPos, dragging]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the top of the page when currentIndex changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Reset ServiceNav position when currentIndex changes
    const serviceNav = document.querySelector('.ServiceNav') as HTMLElement;
    if (serviceNav) {
      serviceNav.style.transform = 'translateY(0px)';
    }
  }, [currentIndex]); // Depend on currentIndex

  const handleServiceClick = (index: number) => {
    setCurrentIndex(index);
    // The scrolling is now handled in the useEffect hook
  };

  useEffect(() => {
    let lastScrollPosition = window.scrollY;
    const serviceNav = document.querySelector('.ServiceNav') as HTMLElement;
    if (!serviceNav) return;

    let ticking = false;

    // Calculate the viewport height once when the component mounts
    const viewportHeight = window.innerHeight;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const serviceNavHeight = serviceNav.offsetHeight;

      serviceNav.style.transition = 'transform 0.3s ease';

      if (scrollPosition < lastScrollPosition || scrollPosition + viewportHeight < scrollHeight) {
        serviceNav.style.transform = 'translateY(0px)';
      } else if (scrollPosition + viewportHeight >= scrollHeight) {
        serviceNav.style.transform = 'translateY(-50px)';
      }

      lastScrollPosition = scrollPosition;
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', requestTick);
    };
  }, []); // Run only once when component mounts


  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % services.length);
    }, 30000); // Change card every 10 seconds

    // Scroll the active card into view
    serviceCardRefs[currentIndex].current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

    return () => {
      clearTimeout(timer); // Clear the timer when the component unmounts
    };
  }, [currentIndex, services.length]);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.animation = 'none';
      progressRef.current.offsetHeight; /* trigger reflow */
      progressRef.current.style.animation = '';
    }
  }, [currentIndex]);

  const selectedService = services[currentIndex];

  return (
    <div>
      <div className={`${styles['ContentCon']} !max-w-[1600px] min-h-screen pb-[120px] content-center`}>
        <h1 ref={pageTitleRef} className="text-4xl sm:text-5xl text-[#320435] text-center uppercase mb-10">Service</h1>

        {/*}
                <div className={styles['ServiceCards']}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`${styles['ServiceCard']} ${currentIndex === index ? styles['Selected'] + ' ' + styles['ActiveCard'] : ''}`}
                            onClick={() => {
                                handleServiceClick(index);
                            }}
                        >
                            {service.image}
                            <h4>{service.title}</h4>
                            {currentIndex === index && (
                                <i className="fa-solid fa-caret-up pb-0"></i>
                            )}
                        </div>
                    ))}
                </div> */}

        {selectedService && (
          <div className={styles['ContentSection']}>
            {selectedService.content}
          </div>
        )}

        {/* <button className="bg-[#320435] font-bold text-xl uppercase px-8 py-2 text-white my-6 mx-auto block drop-shadow-[4px_8px_6px_rgba(0,0,0,0.2)]">Projekt anfragen</button> */}

      </div>


      <div ref={serviceNavRef} className={`${styles['ServiceNav']} ServiceNav`}>

        <div className="w-full bg-[#dddddd]">
          <div ref={progressRef} className={styles['LoadingBar']}></div>
        </div>

        <div className={styles['ServiceCards']} style={{ overflowY: 'auto', scrollbarWidth: 'thin' }}>
          <div ref={serviceCardsContainerRef} className='max-w-[1400px] flex justify-start lg:justify-around space-x-4 pr-2 lg:px-2 lg:py-2 mx-auto' onMouseDown={handleMouseDown} style={{ overflowY: 'auto', scrollbarWidth: 'thin', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            {services.map((service, index) => (
              <div
                ref={serviceCardRefs[index]}
                key={index}
                className={`${styles['ServiceCard']} ${currentIndex === index ? styles['Selected'] + ' ' + styles['ActiveCard'] : ''}`}
                onClick={() => {
                  if (!dragging) {
                    handleServiceClick(index);
                  }
                }}
              >
                {service.image}
                <h4>{service.title}</h4>
                {currentIndex === index && (
                  <i className="fa-solid fa-caret-up pb-0"></i>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ServicePage