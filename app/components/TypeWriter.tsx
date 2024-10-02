'use client'

import React, { useState, useEffect } from "react";
import './TypeWriter.scss';


interface TextAnimationProps {
  strings: string[];
}

export function TextAnimation({ strings }: TextAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Bestimmt, ob eine Pause vor dem Löschen erforderlich ist.
    const shouldPause = !isDeleting && currentCharIndex === strings[currentIndex].length;

    if (shouldPause) {
      // Eine Pause, nachdem der ganze Text angezeigt wurde, bevor das Löschen beginnt
      const pauseBeforeDeleting = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(pauseBeforeDeleting);
    }

    // Das Hauptintervall für das Tippen und Löschen
    const mainInterval = setInterval(() => {
      setCurrentCharIndex((prevCharIndex) => {
        if (isDeleting) {
          return prevCharIndex - 1;
        } else {
          return Math.min(prevCharIndex + 1, strings[currentIndex].length);
        }
      });

      if (isDeleting && currentCharIndex === 0) {
        // Wechsel zum nächsten String, nachdem der aktuelle vollständig gelöscht wurde
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
      }
    }, isDeleting ? 20 : 30); // Unterschiedliche Geschwindigkeiten für Tippen und Löschen

    // Bereinigung
    return () => clearInterval(mainInterval);
  }, [currentIndex, isDeleting, strings, currentCharIndex]);

  const currentString = strings[currentIndex];
  const currentDisplayedString = currentString.substring(0, currentCharIndex);
  const isBlinking = !isDeleting && currentCharIndex === currentString.length;

  return (
    <div className="typewritercon">
      <b><h2 id="type">{currentDisplayedString}<span id="blinker" className={isBlinking ? "blink" : ""}>|</span></h2></b>
      
    </div>
  );
}
