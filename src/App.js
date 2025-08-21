import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'; // for Google Fonts

const SectionList = ({ sections, theme, expandedIndex, handleExpand }) => (
  <>
    {sections.map((section, index) => (
      <motion.div
        key={index}
        onClick={() => handleExpand(index)}
        whileHover={{ scale: 1.02 }}
        style={{
          background: theme === "dark"
            ? "rgba(0,0,0,0.35)"
            : "rgba(255,255,255,0.35)",
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)",
          borderRadius: "50px",
          padding: "1rem",
          marginBottom: "1rem",
          cursor: "pointer",
          overflow: "hidden",
          boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
          border: theme === "dark"
            ? "1px solid rgba(255,255,255,0.2)"
            : "1px solid rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ margin: 0, color: theme === "dark" ? "#fff" : "#000" }}>
          {section.title}
        </h2>

        <AnimatePresence>
          {expandedIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                color: theme === "dark" ? "#ddd" : "#333",
                marginTop: "0.5rem"
              }}
            >
              {typeof section.content === "string" ? (
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              ) : (
                section.content
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </>
);
// Random image setup
const randomImages = [
  "https://website.cdn.tritrisim.com/compressed/737.jpg",
  "https://raw.githubusercontent.com/Something-Comicallyfunny/THESITEOFALIFETIME/refs/heads/main/Screenshot%202025-07-22%20214311.png",
  "https://raw.githubusercontent.com/Something-Comicallyfunny/THESITEOFALIFETIME/refs/heads/main/4E5270B9-4E99-449B-9CEE-D943622A5451.png?raw=true",
  "https://raw.githubusercontent.com/Something-Comicallyfunny/THESITEOFALIFETIME/refs/heads/main/image.png"
];


const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];

const sections = [
    {
      title: 'Who is Something Comical?',
      content: 'I\'m Ezra, a detail-oriented and creative guy with a passion for technology and aviation. My interests range from developing custom effects in Microsoft Flight Simulator (TriTriSim.com) to contributing to tech in theatre productions. I bring enthusiasm, problem-solving skills, and a commitment to delivering high-quality results in every project I undertake.'
    },
    {
      title: 'Coding',
      content: 'I have a lot of experience in coding. From JS to C++, I have used them all. I also have experience with server backends and frontends.'
    },
    {
      title: 'Audio Mixing',
      content: 'One huge aspect of my life is music. I love music. With the love of music, comes (at least for me) the love of making it sound good. I do audio mixing for a few local companies. I primarily mix on the Allen & Heath SQ5 and the Behringer X32.'
    },
    {
      title: 'Lighting',
      content: 'With the love of music and making it sound good also comes the love of making it look good. I love lighting and did lighting for a local company part time for a few years. I\'m trained in ONYX by Obsidian Control Systems however I\'m looking to expand my knowledge into other software.'
    },
    {
      title: 'My involvement in TFX',
      content: 'I’m currently in the main 10 devs for TriTriSim TFX (TriTriSim.com). We help bring realistic FX to MSFS 2020 and 24. I love the TFX community and I’m so excited to see what else our dev team can cook up.'
    },
    {
      title: 'Random photos and screenshots',
      content: (
        <img
          src={randomImage}
          alt="Random from TriTriSim"
          style={{ width: "100%", borderRadius: "12px" }}
        />
      )
    },
    { 
      title: 'Contact Me',
      content:'You can message me on Discord at <a href="https://discord.com/users/1244909861922410571" style="color: rgba(255, 0, 0, 1); text-decoration: underline;">Something Comical#1234</a> or email me at <a href="mailto:ezradixon29@gmail.com" style="color: rgba(255, 0, 0, 1); text-decoration: underline;">ezradixon29@gmail.com</a>.'
    },
    {
      title: 'Thanks',
      content: 'I want to take the time to thank a few key people in in the development of this site. I want to thank <a href="https://discord.com/users/1098292586839543919" style="color: rgba(255, 0, 0, 1); text-decoration: underline;">Ted</a> for helping me and encouradging me while I made the site and hosting the current background image. (he will also hopefully contribute to the prod in the future) I also want to thank <a href="https://discord.com/users/1388995060678529196" style="color: rgba(255, 0, 0, 1); text-decoration: underline;">Pepe</a> for uploading the first background I used and letting me piggy back off of it..  And I cant forget to mention <a href="https://discord.com/users/1373679841068711956" style="color: rgba(255, 0, 0, 1); text-decoration: underline;">TriTriTheCuber</a> for bug fixes. I also want to thank the TFX Team <a href="https://tritrisim.com" style="color: rgba(255, 0, 0, 1); text-decoration: underline;">(TriTriSim.com)</a> for being the amazing team that we are and for all the hard work we do to make TFX the best it can be. And finally, I want to thank <a href="YOU" style="color: rgba(255, 5, 105, 1); text-decoration: underline;">YOU</a> for visiting my site and taking the time to read this. I hope you have a great day! Oh and hi TriTriTheCube'
    },
    {
      title: 'Download TFX',
      content: (
        <div style={{ textAlign: "center" }}>
          <p>Wanna download TFX to see what its all about? Click the link below!:</p>
          <a 
            href="https://installer.cdn.tritrisim.com/TriTriSim%20Installer%20Source%201.7.5.zip"   
            download 
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "#0004ffff",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              marginTop: "10px"
            }}
          >
            ⬇ Download TFX
          </a>
        </div>
      )
    }
  ];

function App() {
  const [theme, setTheme] = useState('dark');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const handleExpand = (index) => setExpandedIndex(expandedIndex === index ? null : index);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url('https://github.com/somethingcomicalalt/SomethingLux/blob/main/FlightSimulator_2025-08-17_14-08-30_761.png?raw=true')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '1rem',
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {/* Full-page overlay for slight dark/light tint */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: theme === 'dark'
            ? 'rgba(0,0,0,0.3)'
            : 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(0px)',
          WebkitBackdropFilter: 'blur(0px)',
          zIndex: 0
        }} />

      <div style={{ zIndex: 1, textAlign: 'center', maxWidth: '800px', width: '100%' }}>
        {/* Title */}
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: theme === 'dark' ? '#fff' : '#000',
            marginBottom: '0.5rem',
            textShadow: '2px 2px 8px rgba(0,0,0,0.4)'
          }}
        >
          Something Comical
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '1.25rem',
            color: theme === 'dark' ? '#eee' : '#333',
            marginBottom: '1.5rem',
            textShadow: '1px 1px 4px rgba(0,0,0,0.2)'
          }}
        >
          A bit about me and what I do
        </p>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            border: 'none',
            background: theme === 'dark' ? '#fff' : '#000',
            color: theme === 'dark' ? '#000' : '#fff',
            cursor: 'pointer',
            marginBottom: '2rem'
          }}
        >
          Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>

        {/* Section List */}
        <SectionList
          sections={sections}
          theme={theme}
          expandedIndex={expandedIndex}
          handleExpand={handleExpand}
        />
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Something Comical. Last updated: 21/8/25 9:15 PM AEST 
      </p>
    </footer>
  );
};
// Add Footer to the App component
export default App;
