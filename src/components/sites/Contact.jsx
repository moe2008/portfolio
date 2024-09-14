import React, { useState } from "react";
import emailjs from "emailjs-com";
import DarkmodeToggle from "../layout/Navbar/DarkModeToggle";
import contact from "../../assets/contact.svg";
import BackButton from "../ui/BackButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sendMessage, setSendMessage] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_KEY,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_KEY,
        formData,
        import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSendMessage("Successfully sent email.");
        },
        (error) => {
          console.log(error.text);
          setError(true);
          setSendMessage("Failed to send email.");
        }
      );
  };

  return (
    <div className="flex flex-col relative w-screen min-h-screen md:h-screen bg-gray-300 dark:bg-darkMode-bg font-Technor">
      <div className="flex w-full h-1/5 items-center justify-between p-8">
        <BackButton />
        <DarkmodeToggle />
      </div>
      <div className="flex flex-col md:flex-row w-full md:h-4/5 md:max-h-screen min-h-96 p-8 justify-evenly gap-8 md:gap-0">
        <div className="card bg-accentColors-lila md:w-1/2 w-full h-full">
          <div className="card-body items-center text-center">
            <h1 className="text-whiteMode-text dark:text-darkMode-text">
              Contact
            </h1>
            <p className="text-whiteMode-text dark:text-darkMode-text">
              If you have any questions or are interested in working together,
              contact me!
            </p>
            <div className="card-actions justify-end">
              <img
                src={contact}
                alt="Contact"
                className="md:h-60 md:w-60 h-42 w-42"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full h-full flex flex-col gap-8 justify-center">
          <form
            onSubmit={sendEmail}
            className="w-full h-full flex flex-col gap-8 justify-center"
          >
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="Daisy"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="email"
                name="email"
                className="grow"
                placeholder="daisy@site.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Subject
              <input
                type="text"
                name="subject"
                className="grow"
                placeholder="Let's work together"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </label>
            <textarea
              className="textarea resize-none"
              name="message"
              placeholder="Your Email Content"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="btn bg-accentColors-lila text-white"
            >
              Send
            </button>
            {sendMessage && !error && (
              <div role="alert" className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{sendMessage}</span>
              </div>
            )}

            {sendMessage && error && (
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{sendMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
