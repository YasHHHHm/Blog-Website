"use client"; // Marks this component as a Client Component

import React, { useState } from 'react';
import styles from './contactpage.module.css';
import Swal from 'sweetalert2';

const ContactPage = () => {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "54ff367a-4627-4c97-b16c-bb15f11a04bc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          title: "Submitted!",
          text: "Your issue is being looked after",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Your form was not submitted.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to submit the form.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className={styles.description}>
        <h1 className={styles.heading}><b>Reach out to us !</b></h1>
        <p className={styles.instructions}>
          If you are experiencing any difficulties while using our platform, do not hesitate to reach out. Below are some common issues we can assist you with: <br />
          <br />

          Account & Functionality Issues: <br />
          <br />
          Trouble logging into your account? <br />
          Problems writing or publishing a blog? <br />
          Issues with commenting on posts? <br />
          Facing difficulties uploading files? <br />
          <br />
          Content & Community Concerns: <br />
          <br />

          Encountering inappropriate or offensive comments? <br />
          Noticing harmful or offensive blog content? <br />
          We take user experience seriously and are committed to ensuring a safe and smooth environment for all. Let us know how we can help resolve your issue.
          <br />
          <br />
          Contact us today, and we&apos;ll get back to you promptly!
          <br />
        </p>
      </div>

      <div className={styles.submission}>
        <button className={styles.buttonDown} onClick={() => handleClick('info1')}>Contact Now</button>
      </div>

      {activeButton === 'info1' && (
        <div className={styles.contact}>
          <form className={styles.form} onSubmit={onSubmit}>
            <h2>Contact Us!</h2>
            <div className={styles.inputBox}>
              <label>Full Name</label>
              <input
                type="text"
                className={styles.field}
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label>Email Address</label>
              <input
                type="email"
                className={styles.field}
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label>Your Message</label>
              <textarea
                name="message"
                className={styles.fieldMess}
                placeholder="Enter your message"
                required
              ></textarea>
              <button className={styles.button} type="submit">Send Message</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactPage;
