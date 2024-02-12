import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    setIsLoading(true);

    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    console.log(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
    console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Umakant",
          to_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        //To do success message
        // to hide an alert
        setForm({ name: "", email: "", message: "" }); 
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        // to show error message n alert
      });
  };

  const handleFocus = () => {}; 
  const handleBlur = () => {}; 

  return (
    <section className="relative flex lg:flex-row flex-col max-container ">
      <div className="flex-1 min-w-[50%] flex flex-col ">
        <h1 className="head-text"> Get in Touch </h1>
        <form
          className="w-full flex flex-col gap-7 mt-14 "
          onSubmit={handleSubmit} 
        >
          <label className="text-black-500 font-semibold ">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Umakant"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus} 
              onBlur={handleBlur} 
            />
          </label>

          <label className="text-black-500 font-semibold ">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="umakant3525@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus} 
              onBlur={handleBlur} 
            />
          </label>

          <label className="text-black-500 font-semibold ">
            Your Message
            <textarea
              name="message"
              className="textarea"
              rows={4}
              placeholder="Enter your Message "
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus} 
              onBlur={handleBlur} 
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus} 
            onBlur={handleBlur} 
            disabled={isLoading}
          >
            {" "}
            {isLoading ? "Sending .... " : "Send Message "}{" "} 
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
