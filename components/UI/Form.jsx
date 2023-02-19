import React, { useRef, useState } from "react";
import classes from "../../styles/form.module.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [message, setMessage] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(`message sent`);
          setMessage(true);
          setTimeout(() => {
            setMessage(false);
          }, [3000]);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {message && (
        <p style={{ color: `#01d293 ` }}>Message Sent Successfully</p>
      )}
      <form ref={form} className={`${classes.form}`} onSubmit={submitHandler}>
        <div className={`${classes.form__group}`}>
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            required
          />
        </div>
        <div className={`${classes.form__group}`}>
          <input
            type="email"
            placeholder="Email Address"
            name="user_email"
            required
          />
        </div>
        <div className={`${classes.form__group}`}>
          <textarea
            type="text"
            rows={5}
            placeholder="Message"
            name="message"
            required
          />
        </div>

        <button className="primary__btn" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
