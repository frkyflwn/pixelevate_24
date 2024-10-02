'use client'


import styles from './App.module.css';
import { Navigation } from "./components/Navigation";
import React from 'react';
import { StartPage } from './components/StartPage';
import { ProjectRequestP1 } from './components/ProjectRequest/ProjectRequest'
import { useToggleAnimation } from './components/ProjectRequest/toggleProjectRequest'


export default function Home() {

  const { isAnimated, toggleAnimation } = useToggleAnimation();


  return (

    <main>


      <ProjectRequestP1 isAnimated={isAnimated} toggleAnimation={toggleAnimation} />

      <div className={styles['App']}>
        <Navigation />

        <StartPage toggleAnimation={toggleAnimation} />

        {/* <Footer /> */}

      </div>



    </main>

  );
}
