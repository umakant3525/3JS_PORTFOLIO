import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = () => {
    console.log("Form fill");
  };

 const handelFocus = () =>{

 } 
 const handelBlur = () =>{
  
 } 


  return (
    <section className="relative flex lg:flex-row flex-col max-container ">
      <h1 className=" head-text"> Get in Touch </h1>

      <form className="w-full flex flex-col gap-7 mt-14 ">
        <label className=" text-black-500 font-semibold ">
          Name
          <input type="text" name="name" className="input" placeholder="Umakant" required value={form.name} onChange={handleChange} onFocus={handelFocus} onBlur={handelBlur} />
        </label>
      </form>
    </section>
  );
};

export default Contact;
