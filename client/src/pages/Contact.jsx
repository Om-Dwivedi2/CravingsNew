import React from "react";
import telephone from "../assets/contactTelephone.png";
import headphone from "../assets/contactHeadphone.png";
import { FiUser } from "react-icons/fi";
const Contact = () => {
  return (
    <>
      <main className="px-40 bg-(--color-base-100)">
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

        <section className="flex">
          <div>
            <h2 className="text-2xl">Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you soon.</p>
            <div>
              <div className="border border-(--color-secondary) flex gap-2 items-center p-2 rounded-md">
                <FiUser className="text-(--color-secondary)" />
                <input
                  type="text"
                  name="name"
                  id="contactName"
                  placeholder="Enter your name"
                />
              </div>
            </div>
          </div>

          <div className="bg-(--color-base-100)">
            <h2 className="text-2xl font-semibold text-(--color-primary)">We're Here to Help!</h2>
            <p>
              Our team is dedicated to providing you with the best support. Let
              us know how we can assist you.
            </p>
            <img src={headphone} alt="" className="w-100"/>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
