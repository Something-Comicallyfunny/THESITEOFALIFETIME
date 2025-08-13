```jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: 'What is TriTriSim TFX?',
      content: `TFX Is an addon for **Microsoft Flight Simulator** , focusing mainly on emergency effects that aren’t visible in the normal game. This includes fires, sparks, and even crash animations. TFX supports both **MSFS 2020 and 2024** , and includes support for a wide range of aircraft.`
    },
    {
      title: 'What is included in TFX?',
      content: `TFX includes a wide range of effects, including **fires, sparks, water splashes, and crash animations** . It also includes support for **both native and custom aircrafts**  that are compatible with the **MSFS2020**  and **MSFS2024** . TFX is constantly being updated with new effects and aircrafts.`
    },
    {
      title: 'What is the price of TFX?',
      content: `TFX is **completely free**  — yep, you read that right! No subscriptions, no paywalls, and no hidden fees. We believe in making **high-quality, immersive content accessible to everyone in the flight sim community.**  That said, if you enjoy the addon and wanna support the project, **donations are always welcome through our Ko-fi page.**  Every bit helps us keep the fire effects (literally) coming!`
    },
    {
      title: 'System Requirements',
      content: `### Minimum\n### Recommended`
    },
    {
      title: 'Gallery',
      content: ''
    }
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <style>{`
        .text-effect {
          position: relative;
          display: inline-block;
          background: radial-gradient(
            circle at center,
            #00c6ff 0%,
            #00c6ff 100%
          );
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
                textAlign: 'center',
                width: '100%',
                fontSize: '3.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}
            >
              About TriTriSim TFX
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl leading-relaxed"
              style={{
                fontFamily: "'Roboto', sans-serif",
                color: theme === 'dark' ? '#ffffff' : '#000000'
              }}
            >
              Experience the next level of realism in Microsoft Flight Simulator.
            </p>
            <button
              onClick={toggleTheme}
              className="mt-4 px-4 py-2 rounded-lg shadow-md transition-all duration-300"
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
                className={`cursor-pointer rounded-lg shadow-lg p-6 mb-4 flex flex-col space-y-2 transition-all duration-[1200ms]`}
                style={{
                  backgroundColor: theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: theme === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(0, 0, 0, 0.05)',
                  color: theme === 'dark' ? '#ffffff' : '#000000'
                }}
                whileHover={{
                  scale: 1.001,
                  boxShadow: theme === 'dark'
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
```
