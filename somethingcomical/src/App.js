import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: 'Who is Something Comical?',
      content: `I’m Ezra, a detail-oriented and creative guy with a passion for technology and aviation. My interests range from developing custom effects in Microsoft Flight Simulator to contributing to tech in theatre productions. I bring enthusiasm, problem-solving skills, and a commitment to delivering high-quality results in every project I undertake.`
    },
    {
      title: 'Coding',
      content: `I have a lot of experience in coding. From JS to C++, I have used them all. I also have experience with server backends and frontends.`
    },
    {
      title: 'Audio Mixing',
      content: `One huge aspect of my life is music. I love music. With the love of music comes (at least for me) the love of making it sound good. I do audio mixing for a few local companies. I primarily mix on the Allen & Heath SQ5 and the Behringer X32.`
    },
    {
      title: 'Lighting',
      content: `With the love of music and making it sound good also comes the love of making it look good. I love lighting and did lighting for a local company part-time for a few years. I'm trained in ONYX by Obsidian Control Systems; however, I'm looking to expand my knowledge into other software.`
    },
    {
      title: 'Random photos and screenshots',
      content: 'None yet!'
    },
    {
      title: 'Gallery',
      content: ''
    }
  ];

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <style>{`
        .text-effect {
          position: relative;
          display: inline-block;
          background: radial-gradient(circle at center, #00c6ff 0%, #00c6ff 100%);
          background-size: 0% 100%;
          background-position: center;
          background-repeat: no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          color: ${theme === 'dark' ? '#ffffff' : '#000000'};
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 8px;
        }
        .text-effect:hover {
          background-size: 100% 100%;
          color: transparent;
        }
      `}</style>

      <div
        style={{
          backgroundImage: `url('https://website.cdn.tritrisim.com/compressed/737.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          position: 'relative',
          filter: 'brightness(1)'
        }}
        className="flex flex-col items-center justify-center overflow-hidden"
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor:
              theme === 'dark'
                ? 'rgba(0, 0, 0, 0.3)'
                : 'rgba(255, 255, 255, 0.4)',
            backdropFilter: theme === 'dark' ? 'blur(5px)' : 'blur(0px)',
            WebkitBackdropFilter: theme === 'dark' ? 'blur(5px)' : 'blur(0px)'
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.075, 0.82, 0.165, 1] }}
          style={{ position: 'relative', zIndex: 10, width: '100%' }}
        >
          <header className="mb-12 text-center max-w-md mx-auto">
            <h1
              className="text-effect"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '3.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}
            >
              About Something Comical
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl leading-relaxed"
              style={{
                fontFamily: "'Roboto', sans-serif",
                color: theme === 'dark' ? '#ffffff' : '#000000'
              }}
            >
              A little about my work, passions, and projects.
            </p>
            <button
              onClick={toggleTheme}
              className="mt-4 px-4 py-2 rounded-lg shadow-md transition-all duration-300"
              style={{
                backgroundColor:
                  theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(255, 255, 255, 0.4)',
                color: theme === 'dark' ? '#ffffff' : '#000000',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border:
                  theme === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.2)'
                    : '1px solid rgba(0, 0, 0, 0.1)'
              }}
            >
              Switch to {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </header>

          <section className="max-w-md sm:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-4">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                layout
                onClick={() =>
                  setExpandedIndex(index === expandedIndex ? null : index)
                }
                className="cursor-pointer rounded-lg shadow-lg p-6 mb-4 flex flex-col space-y-2 transition-all duration-[1200ms]"
                style={{
                  backgroundColor:
                    theme === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border:
                    theme === 'dark'
                      ? '1px solid rgba(255, 255, 255, 0.1)'
                      : '1px solid rgba(0, 0, 0, 0.05)',
                  color: theme === 'dark' ? '#ffffff' : '#000000'
                }}
                whileHover={{
                  scale: 1.001,
                  boxShadow:
                    theme === 'dark'
                      ? '0 1px 3px rgba(0, 0, 0, 0.2)'
                      : '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.04, 0.62, 0.23, 0.98]
                }}
              >
                <motion.h2
                  className="text-effect"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem'
                  }}
                  layout="position"
                >
                  {section.title}
                </motion.h2>
                <AnimatePresence>
                  {index === expandedIndex && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          duration: 0.6,
                          ease: [0.075, 0.82, 0.165, 1]
                        }
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.075, 0.82, 0.165, 1]
                      }}
                      className="text-sm sm:text-base leading-relaxed"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        color: theme === 'dark' ? '#ffffff' : '#000000'
                      }}
                    >
                      {section.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </section>

          <footer className="mt-12 text-center">
            <p
              className="text-sm sm:text-base"
              style={{
                fontFamily: "'Roboto', sans-serif",
                color: theme === 'dark' ? '#ffffff' : '#000000'
              }}
            >
              &copy; 2025 something_comical. All rights reserved.
            </p>
          </footer>
        </motion.div>
      </div>
    </>
  );
};

export default App;
