import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BUG_ICONS = ['🐞', '🐛', '🕷️', '🐜', '🪲'];
const MAX_BUGS = 15;
const GAME_DURATION = 15; // seconds

const CatchTheBugs = ({ isPlaying, onGameOver }) => {
  const [bugs, setBugs] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameStatus, setGameStatus] = useState('playing'); // playing, won, lost

  // Initialize Game
  useEffect(() => {
    if (isPlaying) {
      setScore(0);
      setTimeLeft(GAME_DURATION);
      setGameStatus('playing');
      generateInitialBugs();
    } else {
      setBugs([]);
    }
  }, [isPlaying]);

  // Timer Logic
  useEffect(() => {
    if (!isPlaying || gameStatus !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameStatus('lost');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, gameStatus]);

  // Generate Bugs
  const generateInitialBugs = () => {
    const newBugs = Array.from({ length: MAX_BUGS }).map((_, i) => ({
      id: i,
      icon: BUG_ICONS[Math.floor(Math.random() * BUG_ICONS.length)],
      x: Math.random() * (window.innerWidth - 50),
      y: Math.random() * (window.innerHeight - 50),
      speed: Math.random() * 2 + 1,
    }));
    setBugs(newBugs);
  };

  // Move Bugs Continuously
  useEffect(() => {
    if (!isPlaying || gameStatus !== 'playing') return;

    const moveInterval = setInterval(() => {
      setBugs((currentBugs) =>
        currentBugs.map((bug) => {
          // Add some random scatter movement
          let nx = bug.x + (Math.random() - 0.5) * 100 * bug.speed;
          let ny = bug.y + (Math.random() - 0.5) * 100 * bug.speed;

          // Keep within bounds
          nx = Math.max(10, Math.min(window.innerWidth - 50, nx));
          ny = Math.max(10, Math.min(window.innerHeight - 50, ny));

          return { ...bug, x: nx, y: ny };
        })
      );
    }, 800);

    return () => clearInterval(moveInterval);
  }, [isPlaying, gameStatus]);

  // Handle Bug Click (Squash)
  const handleSquash = (id) => {
    if (gameStatus !== 'playing') return;

    setBugs((current) => current.filter((bug) => bug.id !== id));
    setScore((prev) => {
      const newScore = prev + 1;
      if (newScore >= MAX_BUGS) {
        setGameStatus('won');
      }
      return newScore;
    });
  };

  if (!isPlaying) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      
      {/* Game HUD */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white px-6 py-3 rounded-full flex items-center gap-6 shadow-2xl backdrop-blur border border-red-500/30">
        <div className="font-mono text-lg">⏳ {timeLeft}s</div>
        <div className="font-mono text-lg font-bold text-red-400">
          Squashed: {score}/{MAX_BUGS}
        </div>
      </div>

      {/* Bugs Area */}
      <AnimatePresence>
        {gameStatus === 'playing' &&
          bugs.map((bug) => (
            <motion.div
              key={bug.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ x: bug.x, y: bug.y, scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0, rotate: 180 }}
              transition={{
                x: { type: 'spring', stiffness: 50, damping: 20 },
                y: { type: 'spring', stiffness: 50, damping: 20 },
                default: { duration: 0.2 }
              }}
              onClick={() => handleSquash(bug.id)}
              className="absolute text-4xl cursor-crosshair pointer-events-auto hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
              style={{
                // Prevent text selection when frantically clicking
                userSelect: 'none', 
                WebkitUserSelect: 'none'
              }}
            >
              {bug.icon}
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Game Over / Victory Modal */}
      <AnimatePresence>
        {gameStatus !== 'playing' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm pointer-events-auto"
          >
            <div className="bg-[#0a0a0a] border border-[#333] shadow-[0_0_20px_rgba(0,0,0,0.8)] max-w-lg w-full mx-4 rounded-md overflow-hidden font-mono text-left">
              {/* Terminal Header */}
              <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-[#333]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-xs text-center flex-1 ml-4 truncate">root@portfolio:~ - bash</div>
              </div>

              {/* Terminal Body */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-green-500">root@portfolio:~$</span> ./check_system_status
                  <br/>
                  <span className="text-gray-300">Scanning for vulnerabilities...</span>
                </div>

                <div className="mb-6 mb-4">
                  {gameStatus === 'won' ? (
                    <>
                      <span className="text-green-400">[OK]</span> All identified bugs neutralized.
                      <br/>
                      <span className="text-green-400">[OK]</span> System stabilized.
                      <h2 className="text-2xl font-bold text-green-500 mt-2 mb-2 animate-pulse">
                        <span className="mr-2">🛡️</span> SYSTEM SECURE
                      </h2>
                      <p className="text-gray-400 text-sm">Great job! You squashed all the bugs and saved the portfolio.</p>
                    </>
                  ) : (
                    <>
                      <span className="text-red-500">[ERROR]</span> Critical systems compromised!
                      <br/>
                      <span className="text-red-500">[ERROR]</span> Debugging failed.
                      <h2 className="text-2xl font-bold text-red-500 mt-2 mb-2 animate-pulse">
                        <span className="mr-2">💥</span> KERNEL PANIC
                      </h2>
                      <p className="text-gray-400 text-sm">You ran out of time! {MAX_BUGS - score} bugs escaped into production.</p>
                    </>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6 border-t border-[#333] pt-6">
                  <span className="text-green-500 hidden sm:inline self-center mr-2">&gt;</span>
                  <button
                    onClick={() => {
                       setGameStatus('playing');
                       setScore(0);
                       setTimeLeft(GAME_DURATION);
                       generateInitialBugs();
                    }}
                    className="flex-1 bg-green-900/30 hover:bg-green-800/50 text-green-400 border border-green-500/50 font-mono py-2 px-4 transition-colors text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  >
                    ./retry.sh
                  </button>
                  <button
                    onClick={onGameOver}
                    className="flex-1 bg-gray-900/50 hover:bg-gray-800 text-gray-400 border border-gray-700 font-mono py-2 px-4 transition-colors text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                  >
                    exit
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CatchTheBugs;
