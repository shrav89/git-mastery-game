import { useState } from 'react';
import { GitBranch, Coffee } from 'lucide-react';
import { totalMissions } from '../../data/chapters';

const WelcomeScreen = ({ onStart }) => {
  const [name, setName] = useState('');
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-950 via-violet-950 to-stone-950 text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full">
        {step === 0 && (
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-violet-500 to-pink-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-violet-500/30">
                <GitBranch className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                Git Mastery
              </h1>
              <p className="text-stone-400 text-lg">The Full-Stack Designer&apos;s Journey</p>
            </div>

            <div className="bg-stone-900/50 backdrop-blur rounded-2xl p-6 mb-8 border border-stone-800 text-left">
              <h3 className="font-semibold mb-4 text-stone-200">Your Journey Awaits</h3>
              <div className="space-y-3 text-sm text-stone-400">
                <p className="flex items-start gap-3">
                  <span className="text-violet-400">✦</span>
                  <span><strong className="text-stone-200">8 Chapters</strong> from basics to enterprise-grade Git</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-pink-400">✦</span>
                  <span><strong className="text-stone-200">{totalMissions}+ Missions</strong> with real-world scenarios</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-amber-400">✦</span>
                  <span><strong className="text-stone-200">Adaptive Difficulty</strong> that grows with you</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-emerald-400">✦</span>
                  <span><strong className="text-stone-200">Designer-Focused</strong> storyline at an AI company</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setStep(1)}
              className="w-full py-4 bg-gradient-to-r from-violet-600 to-pink-600 rounded-xl font-semibold text-lg hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25"
            >
              Begin Your Journey
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <Coffee className="w-16 h-16 mx-auto text-amber-400 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Welcome, Designer</h2>
              <p className="text-stone-400">What should we call you?</p>
            </div>

            <div className="mb-8">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full px-6 py-4 bg-stone-900 border border-stone-700 rounded-xl text-center text-xl focus:outline-none focus:border-violet-500 transition-colors"
                autoFocus
              />
            </div>

            <div className="bg-stone-900/50 rounded-xl p-4 mb-8 border border-stone-800 text-sm text-stone-400">
              <p><strong className="text-stone-300">DesignFlow AI</strong> — An AI SaaS startup</p>
              <p><strong className="text-stone-300">Role:</strong> Senior Product Designer</p>
              <p><strong className="text-stone-300">Goal:</strong> Become a Full-Stack Designer</p>
            </div>

            <button
              onClick={() => name.trim() && onStart(name.trim())}
              disabled={!name.trim()}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                name.trim()
                  ? 'bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 shadow-lg shadow-violet-500/25'
                  : 'bg-stone-800 text-stone-500 cursor-not-allowed'
              }`}
            >
              Start Chapter 1 →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeScreen;
