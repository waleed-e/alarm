import React, { useRef, useState } from 'react';
import './contact.scss';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xiw8jns', 'template_v1jihyj', formRef.current, {
        publicKey: 'auYOjewDE2eUg9-K0',
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true);
        }
      );
  };

  return (
    <motion.div className="contact" variants={variants} initial="initial" animate="animate">
      <motion.div className="textContainer" variants={variants} style={{ marginBottom: '100px' }}>
        <motion.h1 variants={variants}>Members Of Team</motion.h1>
        <motion.div className="item" variants={variants}></motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div className="phoneSvg" initial={{ opacity: 1 }}>
          <ul className="teamMembersList" style={{ padding: 0, margin: 0 }}>
            {[
              { name: 'Wafaa', role: null },
              { name: 'Weaam', role: null },
              { name: 'Hajar', role: null },
              { name: 'Yasin', role: null },
              { name: 'Yehia', role: null },
              { name: 'Waleed', role: null },
            ].map((member, index) => (
              <motion.li
                key={index}
                variants={variants}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 2, color: '#ffffff' }}
                style={{ fontSize: '1.5rem', marginBottom: '20px' }}
              >
                {member.name}
                {member.role && (
                  <>
                    <span style={{ marginLeft: '5px' }}>{'\u25B6'}</span> 
                    <span style={{ marginLeft: '5px' }}>({member.role})</span>
                  </>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
