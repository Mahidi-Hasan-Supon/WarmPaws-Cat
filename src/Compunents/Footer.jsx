import React from "react";
import petImg from '../assets/twoCat.jpg';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content py-20">
      {/* Logo */}
      <div>
        <img src={petImg} className="h-[100px] w-[100px] items-center ml-5" alt="WarmPaws Logo" />
      </div>

      {/* Contact Info */}
      <nav>
        <h6 className="footer-title">Contact Info</h6>
        <ul>
          <li className="text-2xl flex items-center gap-2">
            <FaPhoneAlt className="h-[20px]" /> +8801742169682
          </li>
        </ul>
        <ul>
          <li className="link link-hover text-2xl flex items-center gap-2">
            <FaEnvelope className="h-[20px]" /> mahidihasansupon@gmail.com
          </li>
        </ul>
      </nav>

      {/* Privacy Policy */}
      <nav>
        <h6 className="footer-title">Privacy Policy</h6>
        <p className="text-sm leading-6">
          We value your trust. Your information is kept secure and used only <br />
          to improve your experience with WarmPaws. For details, read our{" "} <br />
          <a href="#" className="text-[#FF0000] hover:underline">
            full privacy policy
          </a>.
        </p>
      </nav>

      {/* Social Links */}
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          {/* LinkedIn icon replaces Twitter */}
          <a href="https://www.linkedin.com/in/mahidi-hasan-supon/" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.728V1.728C24 .774 23.208 0 22.23 0zM7.08 20.452H3.548V9h3.532v11.452zM5.314 7.636c-1.132 0-2.048-.924-2.048-2.064 0-1.14.916-2.064 2.048-2.064s2.048.924 2.048 2.064c0 1.14-.916 2.064-2.048 2.064zM20.452 20.452h-3.532v-5.605c0-1.337-.025-3.058-1.862-3.058-1.862 0-2.147 1.454-2.147 2.958v5.705h-3.532V9h3.392v1.561h.047c.472-.896 1.628-1.84 3.354-1.84 3.586 0 4.246 2.36 4.246 5.426v6.305z"></path>
            </svg>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/happypawsclub/" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
