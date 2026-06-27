import React from "react";
import telephone from "../assets/contactTelephone.png";
import headphone from "../assets/contactHeadphone.png";
import { FiUser } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { LuNewspaper } from "react-icons/lu";
import { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setContactData({ ...contactData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // validation on contactData

    // payload

    const payload = { ...contactData };
    console.log(payload);
  }

  return (
    <>
      <main className="px-50 bg-(--color-base-100) space-y-5 pb-10">
        <section className="flex items-center w-full">
          <div className="space-y-3 w-[50%] ">
            <div className="text-xs font-semibold text-(--color-primary) bg-(--color-primary-subtle) rounded-xl w-fit px-2 py-1 ">
              WE'D LOVE TO HEAR FROM YOU
            </div>
            <h1 className="text-5xl font-semibold">Contact Us</h1>
            <p className="text-(--color-secondary) w-[55%]">
              Have a question, suggestion, or need support? We're here to help!
              Reach out to us anytime.
            </p>
          </div>

          <div className="w-[50%]">
            <img src={telephone} alt="" />
          </div>
        </section>

        <section className="grid grid-cols-[2fr_1fr] gap-10  bg-white shadow rounded p-10 ">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold">Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you soon.</p>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              className="space-y-5"
            >
              <div className="flex gap-3">
                <div className="border border-(--color-secondary) flex gap-2 items-center p-2 rounded-md w-[50%]">
                  <FiUser className="text-(--color-secondary)" />
                  <input
                    type="text"
                    name="name"
                    id="contactName"
                    placeholder="Enter your name"
                    className="w-full outline-none "
                    value={contactData.name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="border border-(--color-secondary) flex gap-2 items-center p-2 rounded-md w-[50%]">
                  <MdOutlineMail className="text-(--color-secondary)" />
                  <input
                    type="text"
                    name="email"
                    id="contactEmail"
                    placeholder="Enter your Email"
                    className="w-full outline-none "
                    value={contactData.email}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
              </div>
              <div className="border border-(--color-secondary) flex gap-2 items-center p-2 rounded-md w-[100%]">
                <LuNewspaper className="text-(--color-secondary)" />
                <input
                  type="text"
                  name="subject"
                  id="contactSubject"
                  placeholder="Enter your subject"
                  className="w-full outline-none "
                  value={contactData.subject}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="border border-(--color-secondary) flex gap-2 items-top p-2 rounded-md w-[100%]">
                <LuPencil className="text-(--color-secondary)" />
                <textarea
                  type="text"
                  rows="10"
                  name="message"
                  id="contactMessage"
                  placeholder="Enter your Message"
                  className="w-full outline-none "
                  value={contactData.message}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <button
                type="submit"
                className="rounded bg-(--color-primary) text-white text-lg font-semibold py-2 px-3 flex gap-2 items-center active:scale-95"
              >
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>

          <div className="bg-(--color-base-100) p-10 space-y-3 rounded">
            <h2 className="text-2xl font-semibold text-(--color-primary)">
              We're Here to Help!
            </h2>
            <p>
              Our team is dedicated to providing you with the best support. Let
              us know how we can assist you.
            </p>
            <img src={headphone} alt="" className="w-100" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
