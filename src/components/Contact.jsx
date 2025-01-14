import { CONTACT } from "../constants"
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import axios from "axios";



const Contact = () => {
  const [result, setResult] = useState("");
  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(
      /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
      '($1) $2 - $3 - $4 - $5'
    );
  };
  const notify = (message, isSuccess = true) => {
    if (isSuccess) {
      toast.success(message, { theme: "colored" });
    } else {
      toast.error(message, { theme: "colored" });
    }
  };

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending...")
      const formData = new FormData(event.target);
  
      formData.append("access_key", import.meta.env.VITE_REACT_GMAIL_API_KEY);
  
      const object = Object.fromEntries(formData);
  
      try {
        const res = await axios.post("https://api.web3forms.com/submit", object, {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (res.data.success) {
          setResult("Your message has been successfully submitted!");
          notify("Your message has been successfully submitted!");
        } else {
          notify("Failed to send your message. Please try again.", false);
        }
      } catch (error) {
        setResult("An unexpected error occurred. Please try again later.");
        notify(error.message || "An unexpected error occurred.", false);
      }
    };
  return (
    <section className="text-white body-font border-neutral-900">
      {/* Title */}
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      {/* Contact Form */}
      <div className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
        id="contact-form">
        <div className="md:w-1/3 w-full">
          <h1 className="text-4xl text-white sm:text-4xl font-bold title-font mb-4">Contact Us</h1>
          <p className="leading-relaxed text-xl text-white">
            We&lsquo;re here to assist you! If you have any questions or need assistance, please feel free to reach out to
            us.
            <br></br>
            You can also email us at{" "}
            <a href="mailto:fuad.beybutov099@gmail.com"
              className="font-semibold border-b-4 border-green-400">fuad.beybutov099@gmail.com</a>
          </p>
          <p className="leading-relaxed text-xl text-white mt-8">
            Connect with us on social media:
          </p>
          <span className="inline-flex mt-6 justify-center sm:justify-start">
            <a className="text-white hover:text-gray-900" target="_blank" href="https://twitter.com/example">
              <SiGmail className="size-6" />
            </a>
            <a className="ml-3 text-gray-500 hover:text-gray-900" href="https://www.instagram.com/example/"
              target="_blank">
              <FaLinkedin className="size-6 text-white" />
            </a>
            <a className="ml-3 text-gray-500 hover:text-gray-900" href="https://www.instagram.com/example/"
              target="_blank">
              <FaGithub className="size-6 text-white" />
            </a>
            <a className="ml-3 text-gray-500 hover:text-gray-900" href="https://www.instagram.com/example/"
              target="_blank">
              <FaWhatsapp className="size-6 text-white" />
            </a>
            <a className="ml-3 text-gray-500 hover:text-gray-900" href="https://www.instagram.com/example/"
              target="_blank">
              <FaTelegramPlane className="size-6 text-white" />
            </a>
          </span>
        </div>
        <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
          <h1 className="text-4xl text-white sm:text-4xl font-bold title-font mb-4">Contact Form</h1>
          <form onSubmit={onSubmit} method="post" id="submit-contact-form">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="name" className="leading-7 py-4 text-lg text-white">Your Name</label>
                <input type="text" id="name" name="name" required
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 py-4 text-lg text-white">Your Email</label>
                <input type="email" id="email" name="email" required
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 py-4 text-lg text-white">Your Message</label>
                <textarea id="message" name="message" required
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button onClick={notify}
                type="submit"
                className="flex text-white bg-green-600 border-0 py-4 px-6 focus:outline-none hover:bg-green-500 active:bg-green-400 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha">
                Send Message ✉
              </button>
              <ToastContainer/>
            </div>
          </form>
          <span>{result}</span>
        </div>
      </div>
      {/* Contact informations */}
      <div className="border-b border-neutral-900 pb-20">

        {/* Contact Information */}
        <div className="text-center tracking-tighter">
          {/* Address */}
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Bak%C4%B1/@40.394737,49.6901475,11z/data=!3m1!4b1!4m6!3m5!1s0x40307d6bd6211cf9:0x343f6b5e7ae56c6b!8m2!3d40.4092617!4d49.8670924!16zL20vMDFnZjU?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          >
            <p className="my-4">{CONTACT.address}</p>
          </a>

          {/* Phone Number */}
          <a href="https://wa.me/+994504993511" target="_blank" rel="noopener noreferrer">
            <p className="phone-number">{formatPhoneNumber(CONTACT.phoneNo)}</p>
          </a>

          {/* Email */}
          <a href="mailto:fuad.beybutov099@gmail.com" className="border-b">{CONTACT.email}</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
