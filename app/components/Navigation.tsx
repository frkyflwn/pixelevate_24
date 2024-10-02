import styles from '../App.module.css';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHeart, faLaptopCode, faEnvelope, faQuestion } from '@fortawesome/free-solid-svg-icons';




export function Navigation() {


  //   const [isScrolled, setIsScrolled] = useState(false);
  //  const location = useRouter();



  //   useEffect(() => {
  //     const onScroll = () => {
  //       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //       setIsScrolled(scrollTop > 30);
  //     };

  //     window.addEventListener("scroll", onScroll);

  //     // Clean up function
  //     return () => {
  //       window.removeEventListener("scroll", onScroll);
  //     };
  //   }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <div className={styles['Nav']}>

      <Link className='z-30' href="/">
        <Image
          src="/imgs/logo.png"
          width={332} // Ursprüngliche Breite
          height={130} // Ursprüngliche Höhe
          alt="Pixelevate Logo"
        />
      </Link>

      <div className={`${styles['newMenu']}`}>

        <div className={styles['burgerMenu']}>
        <input hidden className={styles.checkIcon} id="check-icon" name="check-icon" type="checkbox" />
        <label className={styles.iconMenu} htmlFor="check-icon">
          <div className={`${styles.bar} ${styles.bar1}`}></div>
          <div className={`${styles.bar} ${styles.bar2}`}></div>
          <div className={`${styles.bar} ${styles.bar3}`}></div>
        </label>
        </div>

        <ul className={`${styles['newNav']} ${styles['visible']}`}>
          <li className={styles['active']}><Link href="/"><FontAwesomeIcon className='pr-1' icon={faHouse} /><span className={styles['menuText']}>Start</span></Link></li>
          <li><Link href="/service"><FontAwesomeIcon className='pr-1' icon={faHeart} /><span className={styles['menuText']}>Service</span></Link></li>
          <li><Link href="/projekte"><FontAwesomeIcon className='pr-1' icon={faLaptopCode} /><span className={styles['menuText']}>Projekte</span></Link></li>
          <li><Link href="/kontakt"><FontAwesomeIcon className='pr-1' icon={faEnvelope} /><span className={styles['menuText']}>Kontakt</span></Link></li>
          <li><Link href="/kontakt"><FontAwesomeIcon className='pr-1' icon={faQuestion} /><span className={styles['menuText']}>FAQ</span></Link></li>
        </ul>

      </div>
    </div>
  );
}