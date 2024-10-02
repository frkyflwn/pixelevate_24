'use client'

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import styles from '../../App.module.css';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


interface FormularProps {
  toggleAnimation: () => void;
}

const Formular: React.FC<FormularProps> = ({ toggleAnimation }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phoneNumber: '',
    timeSlots: [] as string[],
    branche: '',
    companyurl: '',
    projectDescription: '',
    deadline: '',
    AVBcheckbox: false,
  });

  const [showSecondPart, setShowSecondPart] = useState(false);
  const [showThirdPart, setShowThirdPart] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [fehlerMeldung, setFehlerMeldung] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [time1IsChecked, setTime1IsChecked] = useState(false);
  const [time2IsChecked, setTime2IsChecked] = useState(false);
  const [time3IsChecked, setTime3IsChecked] = useState(false);

  const toggleCheckbox = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setFormData(prevState => ({
      ...prevState,
      AVBcheckbox: newCheckedState
    }));
  };

  const toggleCheckboxTime = (time: string, setTimeIsChecked: React.Dispatch<React.SetStateAction<boolean>>, timeIsChecked: boolean) => {
    setTimeIsChecked(!timeIsChecked);
    setFormData(prevState => {
      if (!timeIsChecked) {
        return {
          ...prevState,
          timeSlots: [...prevState.timeSlots, time]
        };
      } else {
        return {
          ...prevState,
          timeSlots: prevState.timeSlots.filter(slot => slot !== time)
        };
      }
    });
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      phoneNumber: value,
    }));

    // Wenn das Input-Feld der Telefonnummer ausgefüllt wird, zeige die Erreichbarkeit an
    if (value.trim() !== '') {
      setShowTimeSlots(true);
    } else {
      setShowTimeSlots(false); // Wenn das Input-Feld leer ist, Ausblenden der Erreichbarkeit
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setIsSubmitting(true);

    const { name, email, company } = formData;

    if (name.trim() !== '' && email.trim() !== '' && company.trim() !== '') {

      gsap.to('.progress-bar', {
        duration: 0.5, width: '50%', onComplete: () => {
          gsap.to('.circle-2', { duration: 0.5, backgroundColor: 'white', color: '#320435' }); // Change circle color
          gsap.to('.circle-2 p', { duration: 0.5, color: '#fff' }); // Change circle color
          setShowSecondPart(true);
          gsap.from('.second-part', { duration: 0.5, x: '100%', opacity: 0 });
          setIsSubmitting(false);
          setFehlerMeldung('');
        }
      }); // Animate progress bar
    } else {
      setFehlerMeldung('*Bitte alle Pflichtfelder ausfüllen.');
      setIsSubmitting(false);
    }
  };

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const { name, email, company, phoneNumber, timeSlots, branche, projectDescription, deadline, AVBcheckbox } = formData;
  
    if (name.trim() !== '' && email.trim() !== '' && company.trim() !== '' && branche.trim() !== '' && projectDescription.trim() !== '' && AVBcheckbox) {
      emailjs.send('service_iczu9qk', 'template_u8rno9a', formData, 'JluAWciS9GF7clFtV')
        .then((response) => {
          console.log('Email sent successfully:', response);
          // Hier könntest du die Zustände aktualisieren oder eine Benachrichtigung anzeigen, dass die E-Mail erfolgreich gesendet wurde.
          
          gsap.to('.progress-bar', {
            duration: 0.5, width: '100%', onComplete: () => {
              gsap.to('.circle-3', { duration: 0.5, backgroundColor: 'white', color: '#320435' }); // Change circle color
              gsap.to('.circle-3 p', { duration: 0.5, color: '#fff' }); // Change circle color
  
              setShowSecondPart(false); // Hide second part
              setShowThirdPart(true); // Show third part
              gsap.from('.third-part', { duration: 0.5, x: '100%', opacity: 0 }); // Animate third part
              setIsSubmitting(false);
            }
          }); // Animate progress bar
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          // Hier könntest du die Zustände aktualisieren oder eine Fehlermeldung anzeigen.
          setFehlerMeldung('*Fehler beim Senden der E-Mail.');
          setIsSubmitting(false);
        });
    } else {
      setFehlerMeldung('*Bitte alle Pflichtfelder ausfüllen.');
      setIsSubmitting(false);
    }
  };
  

    return (
      <div className="max-w-3xl mx-auto relative">
        <div className="flex items-center justify-between sm:w-8/12 w-9/12 mb-10 relative m-auto">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-[#320435] mr-2 relative z-10">
            1
            <p className="absolute top-14 text-white">Kontakt</p>
          </div>
          <div className="circle-2 flex items-center justify-center h-12 w-12 rounded-full bg-[#320435] text-white mx-2 relative z-10">
            2
            <p className="absolute top-14 text-[#320435]">Projekt</p>
          </div>
          <div className="circle-3 flex items-center justify-center h-12 w-12 rounded-full bg-[#320435] text-white ml-2 relative z-10">
            3
            <p className="absolute top-14 text-[#320435]">Feedback</p>
          </div>
          <div className="absolute w-full h-0.5 bg-[#320435] z-0"></div>
          <div className="absolute w-full h-0.5 bg-white z-0 progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="mt-16 mb-8">
          <div className={`first-part ${!showSecondPart && !showThirdPart ? '' : 'hidden'} mx-4`}>
            <p className="text-white text-left font-[400] mb-3 text-xl">Bitte geben Sie Ihre Kontaktdaten ein:</p>
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-[48%]">
                <label htmlFor="name" className="text-white block text-left mt-2">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-b p-2 border-white rounded-none w-full bg-transparent text-white"
                />
              </div>
              <div className="w-full md:w-[48%] mt-4 sm:mt-0">
                <label htmlFor="company" className="text-white block text-left mt-2">Unternehmen*</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-b p-2 border-white rounded-none w-full bg-transparent text-white"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-[48%] mt-4 sm:mt-0">
                <label htmlFor="email" className="text-white block text-left mt-2">E-Mail*</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b p-2 border-white rounded-none w-full bg-transparent text-white"
                />
              </div>
              <div className="w-full md:w-[48%] mt-4 sm:mt-0">
                <label htmlFor="phoneNumber" className="text-white block text-left mt-2">Telefonnummer</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="border-b p-2 border-white rounded-none w-full bg-transparent text-white"
                />
              </div>
            </div>

            {showTimeSlots && (
              <div className="flex flex-wrap justify-between">
                <p className="text-white text-left font-[400] mt-5 text-xl">Erreichbarkeit:</p>
                <div className={styles['timescon']} >

                  <div className='mt-6 sm:mt-3 text-left'>
                    <div className="w-5 h-5 border border-white absolute cursor-pointer" onClick={() => toggleCheckboxTime("8-12 Uhr", setTime1IsChecked, time1IsChecked)} >
                      <input
                        type="checkbox"
                        name="time1checkbox"
                        checked={time1IsChecked}
                        onChange={() => toggleCheckboxTime("8-12 Uhr", setTime1IsChecked, time1IsChecked)}
                        className="hidden" />
                      {time1IsChecked && <FontAwesomeIcon className={styles["checkbox-icon"]} icon={faCheck} />}
                    </div>
                    <label htmlFor="time1checkbox" className="text-white text-left relative bottom-[2px] ml-7">08:00-12:00 Uhr</label>
                  </div>

                  <div className='ml-0 sm:ml-4 mt-6 sm:mt-3 text-left'>
                    <div className="w-5 h-5 border border-white absolute cursor-pointer" onClick={() => toggleCheckboxTime("13-17 Uhr", setTime2IsChecked, time2IsChecked)}>
                      <input
                        type="checkbox"
                        name="time2checkbox"
                        checked={time2IsChecked}
                        onChange={() => toggleCheckboxTime("13-17 Uhr", setTime2IsChecked, time2IsChecked)}
                        className="hidden" />
                      {time2IsChecked && <FontAwesomeIcon className={styles["checkbox-icon"]} icon={faCheck} />}
                    </div>
                    <label htmlFor="time2checkbox" className="text-white text-left relative bottom-[2px] ml-7">13:00-17:00 Uhr</label>
                  </div>

                  <div className='ml-0 sm:ml-4 mt-6 sm:mt-3 text-left'>
                    <div className="w-5 h-5 border border-white absolute cursor-pointer" onClick={() => toggleCheckboxTime("17-20 Uhr", setTime3IsChecked, time3IsChecked)} >
                      <input
                        type="checkbox"
                        name="time3checkbox"
                        checked={time3IsChecked}
                        onChange={() => toggleCheckboxTime("17-20 Uhr", setTime3IsChecked, time3IsChecked)}
                        className="hidden" />
                      {time3IsChecked && <FontAwesomeIcon className={styles["checkbox-icon"]} icon={faCheck} />}
                    </div>
                    <label htmlFor="time3checkbox" className="text-white text-left relative bottom-[2px] ml-7">17:00-20:00 Uhr</label>
                  </div>

                </div>

              </div>
            )}
            {fehlerMeldung && <div className="errorMessage text-red-500 bg-white border-2 border-red-500 text-center relative mt-6">{fehlerMeldung}</div>}
            <div className="text-right">
              <button type="button" onClick={handleNext} disabled={isSubmitting} className="my-5 bg-transparent border border-white text-white px-6 py-2 rounded-none hover:bg-white hover:text-blue-500">
                Weiter
              </button>
            </div>
          </div>

          <div className={`second-part ${showSecondPart && !showThirdPart ? '' : 'hidden'} mx-4`}>
            <p className="text-white text-left font-[400] mb-3 text-xl">Erzählen Sie uns von Ihrem Projekt:</p>
            <div className='flex flex-row flex-wrap justify-between align-items-stretch'>
              <div className="w-full md:w-[48%]">
                <div className="w-full">
                  <label htmlFor="branche" className="text-white block text-left mt-2">Branche*</label>
                  <input
                    type="text"
                    id="branche"
                    name="branche"
                    value={formData.branche}
                    onChange={handleChange}
                    className="border-b p-2 border-white rounded-none w-full bg-transparent text-white"
                  />
                </div>
                <div className="w-full mt-4 sm:mt-0">
                  <label htmlFor="companyurl" className="text-white block text-left mt-2">Webseite (falls vorhanden)</label>
                  <input
                    type="text"
                    id="companyurl"
                    name="companyurl"
                    value={formData.companyurl}
                    onChange={handleChange}
                    className="border-b p-2 border-white rounded-none w-full bg-transparent text-white"
                  />
                </div>
                <div className="w-full mt-4 sm:mt-0">
                  <label htmlFor="deadline" className="text-white block text-left mt-2">Deadline</label>
                  <input
                    type="text"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="mt-1 p-2 border-b border-white rounded-none w-full bg-transparent text-white"
                  />
                </div>

              </div>

              <div className="mb-2 w-full md:w-[48%] mt-4 sm:mt-0">
                <label htmlFor="projectDescription" className="text-white block text-left mt-2">Projekt-Beschreibung*</label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  className="h-[123px] mt-1 p-2 border border-white rounded-none w-full bg-transparent text-white resize-none"
                  rows={4} // Anzahl der sichtbaren Zeilen
                />

                <div className='mt-6 sm:mt-3 text-left'>
                  <div className="w-5 h-5 border border-white absolute cursor-pointer" onClick={toggleCheckbox}>
                    <input
                      type="checkbox"
                      name="AVBcheckbox"
                      value={formData.AVBcheckbox.toString()}
                      checked={isChecked}
                      onChange={toggleCheckbox}
                      className="hidden" />
                    {isChecked && <FontAwesomeIcon className={styles["checkbox-icon"]} icon={faCheck} />}
                  </div>
                  <label htmlFor="AVBcheckbox" className="text-white text-left relative bottom-[2px] ml-7">Ich habe die Datenschutzerklärung gelesen und akzeptiere diese.*</label>
                </div>

              </div>
            </div>
            {fehlerMeldung && <div className="errorMessage text-red-500 bg-white border-2 border-red-500 text-center relative mt-6">{fehlerMeldung}</div>}

            <div className="text-right relative">
              <button type="submit" disabled={isSubmitting} className="my-5 bg-transparent border border-white text-white px-4 py-2 rounded-none hover:bg-white hover:text-blue-500">
                Absenden
              </button>
            </div>
          </div>

          <div className={`third-part ${showThirdPart ? '' : 'hidden'} relative top-[-25px] mx-4`}>

            <div>
              <div className={styles["icons-animation"]}>
                <svg className={styles["explosion"]} width="120" height="140" viewBox="0 0 90 102" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(1 1)" stroke="#00bb38" fill="none" fillRule="evenodd">
                    <circle strokeWidth="20" cx="44" cy="50" r="27" />
                    <path className={styles["check"]} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M33 50.578l8.911 9.542L55 39" />
                    <path d="M44 0v40m43.301-15l-34.64 20M87.3 75L52.66 55M44 100V60M.699 75l34.64-20M.7 25l34.64 20" strokeWidth="10" strokeLinecap="round" />
                  </g>
                </svg>
              </div>

            </div>
            <p className="text-white mb-3 text-xl font-bold text-center">Vielen Dank für Ihre&nbsp;Anfrage!</p>
            <p className="text-white w-3/4 m-auto text-xl font-[400] text-center">Ihre Daten sind erfolgreich bei uns eingegangen und wir werden uns innerhalb von 2&nbsp;Werktagen bei Ihnen&nbsp;melden.
              <br /><br />Sie können dieses Fenster nun&nbsp;<b onClick={toggleAnimation} className='underline cursor-pointer'>schließen.</b><br />
            </p>
          </div>
        </form>
      </div>
    );
  };

  export default Formular;
