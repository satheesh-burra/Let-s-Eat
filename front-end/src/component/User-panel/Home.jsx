
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "../User-panel/About";
import Items from "../User-panel/Items";
import Services from "../User-panel/Services";
import Whychoose from "../User-panel/Whychoose";
import BookTablePage from "./BookTableMain";
import EventsPage1 from "./EventBookigMain";
import ContactUs from "./ContactUs";

AOS.init();

const Home = () => {
  const [showChatBox, setShowChatBox] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    setMessages([...messages, { from: "user", text: userInput }]);
    setUserInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks for your message. We'll get back to you shortly!",
        },
      ]);
    }, 1000);
  };

  const handleBookNowScroll = () => {
    const element = document.getElementById("book-table");
    if (element) {
      const yOffset = -98;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      

<div 
  className="relative h-screen w-full overflow-hidden font-sans" 
  style={{
    backgroundImage: "url('../image/home200.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Layered Glow Background */}
  <div className="absolute w-full h-full bg-gradient-to-tr from-pink-300/30 to-red-400/30 animate-pulse blur-2xl scale-110 z-0"></div>

  {/* Floating Food Icons */}
  {/* <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
    <img src="https://hips.hearstapps.com/hmg-prod/images/chicken-burgers-index-667b185b5f528.jpg?crop=0.500xw:1.00xh;0.282xw,0&resize=1200:" alt="burger" className="w-14 absolute top-10 left-20 animate-float" />
    <img src="/food/pizza.png" alt="pizza" className="w-16 absolute bottom-16 right-10 animate-float-delay" />
    <img src="/food/sushi.png" alt="sushi" className="w-12 absolute top-1/2 left-1/3 animate-float-slow" />
  </div> */}

  {/* Main Content */}
  <div className="relative z-20 flex flex-col justify-center items-end h-full text-right px-10 sm:px-20">
    <div className="max-w-xl space-y-6 p-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-pink-500 animate-textPulse">
        Welcome to <br />
        <span className="text-red-600">Let's Eat</span>
      </h1>
      <p className="text-lg text-gray-800">
        Explore a world of taste. Let our chefs serve joy on your plate.
      </p>

      <div>
        <button
          onClick={handleBookNowScroll}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:ring-4 hover:ring-red-300 animate-bounce-slow"
        >
          🍴 Reserve Your Table
        </button>
      </div>
    </div>
  </div>
</div>




      {/* Sections */}
      <div id="menu">
        <Items />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="book-now">
        <section id="book-event">
          <EventsPage1 />
        </section>

        <section id="book-table">
          <BookTablePage />
        </section>
      </div>

      <Whychoose />
      <About />

      <div id="contact">
        <ContactUs />
      </div>

      {/* Floating Chat Button & Box */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        {showChatBox && (
          <div className="bg-white border border-pink-300 p-4 rounded-lg shadow-lg w-72 h-96 flex flex-col justify-between relative mb-2">
            {/* Close Button */}
            <button
              onClick={() => setShowChatBox(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl font-bold"
              aria-label="Close chat"
            >
              &times;
            </button>

            <div className="overflow-y-auto mb-2 flex-1 space-y-2 pr-1">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`text-sm p-2 rounded-lg max-w-[80%] ${
                    msg.from === "user"
                      ? "bg-red-100 self-end text-right"
                      : "bg-gray-200 self-start text-left"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="bg-red-500 text-white px-3 rounded hover:bg-red-600 text-sm"
              >
                Send
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowChatBox(!showChatBox)}
          className="bg-red-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-red-600 transition-all"
        >
          Can I help you?
        </button>
      </div>
    </>
  );
};

export default Home;
