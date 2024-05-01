import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
export const Contact = () => {
  const form = useRef();

  const [getemail,setEmail]=useState()
  const [error,setError]=useState()
  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs
      .sendForm("service_q5qesvb", "template_x894o4i", form.current, {
        publicKey: "RLbdr2I5qOEe-CqZW",
      })
      .then(
        () => {
          alert("Mail sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      className="flex flex-col max-w-[600px] w-[100%] text-blue-950 "
      ref={form}
      onSubmit={sendEmail}
    >
      <label className="pt-[10px]">Name </label>
      <input type="text" style={{backgroundColor:"white"}} name="from_name" required/>
      <label className="pt-[10px]">Email</label>
      <input type="email" name="from_email" onChange={()=>{setEmail(e.target.value)}} formNoValidate required />{error}
      <label className="pt-[10px]">Message</label>
      <textarea name="message" required/>
      <input
        className="border border-black w-[80px] rounded-md bg-blue-950 text-white mt-[20px]"
        type="submit"
        value="Send"
      />
    </form>
  );
};
