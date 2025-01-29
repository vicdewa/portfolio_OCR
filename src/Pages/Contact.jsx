import React, { useState } from 'react';
import '../Pages/Contact.css';
import '../Components/Footer';
import emailjs from '@emailjs/browser'; 

function Contact() {
  // States pour gérer les champs du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fonction de gestion du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

  // Vérification du remplissage des champs avant d'autoriser le submit
  if (!name || !email || !message) {
    setErrorMessage('Merci de remplir tous les champs.');
    setSuccessMessage('');
    return;
  }

  // EmailJS service ID, and public key
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Vérification dans la console
    console.log('Service ID:', serviceId);
    console.log('Template ID:', templateId);
    console.log('Public Key:', publicKey);

  // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Victoire Dewaegeneire',
      message: message,
    };

    //Vérification console.log
    console.log("Service ID:", serviceId);  
    console.log("Template ID:", templateId);  
    console.log("Public Key:", publicKey); 

    // Envoi du message via EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Message envoyé!', response);
      setSuccessMessage('Merci pour votre message');
      setErrorMessage('');
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi', error);
      setErrorMessage('Une erreur est survenue');
      setSuccessMessage('');
    });
  };

  // Fonction pour vider les messages d'erreur lorsqu'un champ est cliqué
  const handleFocus = () => {
    setErrorMessage('');
  };

  return (
    <div className="contact-container">
      <h1>Parlons de votre projet</h1>
      <p>
        Si vous avez en tête un projet, je serais ravie de vous écouter m'en parler.<br />
        Contactez-moi via le formulaire ci-dessous et je reviendrai vers vous au plus vite! 👩🏻‍💻
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            onFocus={handleFocus}
          />
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            onFocus={handleFocus}
          />
        </div>
        <textarea
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-field"
          onFocus={handleFocus}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="submit-button-container">
          <button type="submit" className="submit-button">Envoyer</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
