import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: 'Who is Something Comical?',
      content: `I’m Ezra, a detail-oriented and creative guy with a passion for technology and aviation. My interests range from developing custom effects in Microsoft Flight Simulator (TriTriSim.com) to contributing to tech in theatre productions. I bring enthusiasm, problem-solving skills, and a commitment to delivering high-quality results in every project I undertake.`
    },
    {
      title: 'Coding',
      content: `I have a lot of experience in coding. From JS to C++, I have used them all. I also have experience with server backends and frontends.`
    },
    {
      title: 'Audio Mixing',
      content: `One huge aspect of my life is music. I love music. With the love of music, comes (at least for me) the love of making it sound good. I do audio mixing for a few local companies. I primarily mix on the Allen & Heath SQ5 and the Behringer X32.`
    },
    {
      title: 'Lighting',
      content: `With the love of music and making it sound good also comes the love of making it look good. I love lighting and did lighting for a local company part time for a few years. I'm trained in ONYX by Obsidian Control Systems however I'm looking to expand my knowledge into other software.`
    },
    {
      title: 'My involvement in TFX',
      content: 'I’m currently in the main 10 dev center for TriTriSim TFX (TriTriSim.com). We help bring realistic FX to MSFS 2020 and 24. I love the TFX community and I’m so excited to see what else our dev team can cook up.'
    },
    {
      title: 'Random photos and screenshots',
      content: 'None yet!'
    }
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <style>{`
        @keyframes textShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .shimmer-text {
          position: relative;
          display: inline-block;
          background: linear-gradient(
            90deg,
            #00c6ff 0%,
            #ff00c6 50%,
            #00c6ff 100%
          );
          background-size: 200% 100%;
          background-position: -200% 0;
          background-repeat: no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          color: ${theme === 'dark' ? '#ffffff' : '#000000'};
          transition: color 0.6s ease;
        }

        .shimmer-text:hover {
          animation: textShimmer 1.5s linear forwards;
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
          filter: theme === 'dark' ? 'brightness(1)' : 'brightness(1)'
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
            backgroundColor: theme === 'dark'
              ? 'rgba(0, 0, 0, 0.4)'
              : 'rgba(255, 255, 255, 0.5)',
            backdropFilter: theme === 'dark' ? 'blur(10px)' : 'blur(5px)',
            WebkitBackdropFilter: theme === 'dark' ? 'blur(10px)' : 'blur(5px)'
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.075, 0.82, 0.165, 1] }}
          style={{ position: 'relative', zIndex: 10, width: '100%' }}
        >
          <header className="mb-16 text-center max-w-md mx-auto">
            <h1
              className="shimmer-text"
              style={{
                fontFamily: "'Poppins', sans-serif",
                textAlign: 'center',
                width: '100%',
                fontSize: '4rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem'
              }}
            >
              Something Comical
            </h1>
            <p
              className="text-xl sm:text-2xl lg:text-3xl leading-relaxed"
              style={{
                fontFamily: "'Roboto', sans-serif",
                color: theme === 'dark' ? '#ffffff' : '#000000'
              }}
            >
              A bit about me
            </p>
            <button
              onClick={toggleTheme}
              className="mt-6 px-6 py-3 rounded-lg shadow-md transition-all duration-300 text-lg"
              style={{
                backgroundColor: theme === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(255, 255, 255, 0.4)',
                color: theme === 'dark' ? '#ffffff' : '#000000',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: theme === 'dark'
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
                aria-expanded={index === expandedIndex}
                className={`cursor-pointer rounded-2xl shadow-lg p-8 mb-6 flex flex-col space-y-3 transition-all duration-[1200ms]`}
                style={{
                  backgroundColor: theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: theme === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.15)'
                    : '1px solid rgba(0, 0, 0, 0.1)',
                  color: theme === 'dark' ? '#ffffff' : '#000000'
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: theme === 'dark'
                    ? '0 4px 6px rgba(0, 0, 0, 0.3)'
                    : '0 4px 6px rgba(0, 0, 0, 0.15)'
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.04, 0.62, 0.23, 0.98]
                }}
              >
                <motion.h2
                  className="shimmer-text"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    display: 'inline-block'
                  }}
                  layout="position"
                >
                  {section.title}
                </motion.h2>
                <AnimatePresence>
                  {index === expandedIndex && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      animate={{
                        opacity: 1,
                        height: 'auto',
                        overflow: 'hidden'
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        overflow: 'hidden',
                        transition: {
                          duration: 0.6,
                          ease: [0.075, 0.82, 0.165, 1]
                        }
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.075, 0.82, 0.165, 1]
                      }}
                      className="text-base sm:text-lg leading-relaxed"
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

          <footer className="mt-16 text-center">
            <p
              className="text-base sm:text-lg"
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
