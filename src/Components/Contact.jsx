import React, { useState } from "react";
import { Mail, MessageCircle, Send, User, AtSign, Copy, Phone } from "lucide-react";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import {  Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_c18iibc", // your service ID
        "template_gh5wrsw", // your template ID (you’ll define below)
        formData,
        "laz_nnjHRJiCAXYnq" // your public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Thank you for your message! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email send failed:", error.text);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Muhammad Ali! I found your portfolio and would like to discuss a project with you."
    );
    window.open(`https://wa.me/923250328377?text=${message}`, "_blank");
  };

  const handleGmail = () => {
    const subject = "Hiring Inquiry";
    const body =
      "Hi Muhammad Ali, I would like to hire you for a project. Let's discuss further.";
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=muhammadali.dev5@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied to clipboard: ${text}`);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 lg:ml-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-[#BFC2CB] max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work
            together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#0000001A] backdrop-blur-xl border border-[#2e3035] rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div
                  className="flex items-center space-x-4 group cursor-pointer"
                  onClick={handleGmail}
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500/30 transition-all duration-200">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#BFC2CB] text-sm">Email</p>
                    <p className="text-white hover:text-blue-300 transition-colors font-medium">
                      muhammadali.dev5@gmail.com
                    </p>
                  </div>
                  {/* <Copy
                    className="w-5 h-5 text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy("muhammadali.dev5@gmail.com");
                    }}
                  /> */}
                </div>

                {/* WhatsApp */}
                <div
                  className="flex items-center space-x-4 group cursor-pointer"
                  onClick={handleWhatsApp}
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30 group-hover:bg-green-500/30 transition-all duration-200">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#BFC2CB] text-sm">WhatsApp</p>
                    <p className="text-white hover:text-green-300 transition-colors font-medium">
                      0325 0328377
                    </p>
                  </div>
                  {/* <Copy
                    className="w-5 h-5 text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy("03250328377");
                    }}
                  /> */}
                </div>
                {/* LinkedIn */}
                <div
                  className="flex items-center space-x-4 group cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/muhammadali-dev5",
                      "_blank"
                    )
                  }
                >
                  <div className="w-12 h-12 bg-[#0A66C2]/20 rounded-full flex items-center justify-center border border-[#0A66C2]/30 group-hover:bg-[#0A66C2]/30 transition-all duration-200">
      
                    <Linkedin></Linkedin>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#BFC2CB] text-sm">LinkedIn</p>
                    <p className="text-white hover:text-[#0A66C2] transition-colors font-medium">
                      /muhammadali-dev5
                    </p>
                  </div>
                  {/* <Copy
                    className="w-5 h-5 text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(
                        "https://www.linkedin.com/in/muhammadali-dev5"
                      );
                    }}
                  /> */}
                </div>

                {/* GitHub */}
                <div
                  className="flex items-center space-x-4 group cursor-pointer"
                  onClick={() =>
                    window.open("https://github.com/mali14655", "_blank")
                  }
                >
                  <div className="w-12 h-12 bg-[#333]/20 rounded-full flex items-center justify-center border border-[#333]/30 group-hover:bg-[#333]/30 transition-all duration-200">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5c-6.63 0-12 5.37-12 12 0 5.3..." />
                    </svg> */}
                    <Github></Github>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#BFC2CB] text-sm">GitHub</p>
                    <p className="text-white hover:text-[#999] transition-colors font-medium">
                      /mali14655
                    </p>
                  </div>
                  {/* <Copy
                    className="w-5 h-5 text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy("https://github.com/mali14655");
                    }}
                  /> */}
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 space-y-4">
                <Button Text="Send Email" onClick={handleGmail} />
                <Button Text="WhatsApp Chat" onClick={handleWhatsApp} />
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-[#0000001A] backdrop-blur-xl border border-[#2e3035] rounded-3xl p-6 shadow-2xl">
              <h4 className="text-lg font-bold text-white mb-4">
                Why Work With Me?
              </h4>
              <ul className="space-y-3 text-[#BFC2CB]">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Fast response time (usually within 24 hours)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Clear communication throughout the project</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Quality code with proper documentation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Post-launch support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0000001A] backdrop-blur-xl border border-[#2e3035] rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-[#BFC2CB]" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-[#0000001A] border border-[#2e3035] rounded-2xl text-white placeholder-[#BFC2CB] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <AtSign className="w-5 h-5 text-[#BFC2CB]" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-[#0000001A] border border-[#2e3035] rounded-2xl text-white placeholder-[#BFC2CB] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none">
                  <MessageCircle className="w-5 h-5 text-[#BFC2CB]" />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full pl-12 pr-4 py-4 bg-[#0000001A] border border-[#2e3035] rounded-2xl text-white placeholder-[#BFC2CB] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
