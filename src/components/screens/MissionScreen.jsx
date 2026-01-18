import { useState } from 'react';
import { Terminal, HelpCircle, AlertTriangle, Check, X, ChevronRight, Sparkles, Star, Send, Lightbulb } from 'lucide-react';

const MissionScreen = ({ mission, chapter, onComplete, onBack }) => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [terminalInput, setTerminalInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [earnedXp, setEarnedXp] = useState(0);
  const [missionComplete, setMissionComplete] = useState(false);

  const challenge = mission.challenges[currentChallenge];
  const totalChallenges = mission.challenges.length;

  const handleQuizAnswer = (index) => {
    if (showResult) return;
    const correct = index === challenge.correct;
    setIsCorrect(correct);
    setShowResult(true);
    setAnswers([...answers, { type: 'quiz', correct }]);
    if (correct) setEarnedXp(prev => prev + Math.floor(mission.xpReward / totalChallenges));
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (showResult || !terminalInput.trim()) return;

    const correct = terminalInput.toLowerCase().includes(challenge.expectedCommand.toLowerCase());
    setIsCorrect(correct);
    setShowResult(true);
    setAnswers([...answers, { type: 'terminal', correct }]);
    if (correct) setEarnedXp(prev => prev + Math.floor(mission.xpReward / totalChallenges));
  };

  const handleScenarioAnswer = (index) => {
    if (showResult) return;
    const correct = index === challenge.correct;
    setIsCorrect(correct);
    setShowResult(true);
    setAnswers([...answers, { type: 'scenario', correct }]);
    if (correct) setEarnedXp(prev => prev + Math.floor(mission.xpReward / totalChallenges));
  };

  const nextChallenge = () => {
    if (currentChallenge < totalChallenges - 1) {
      setCurrentChallenge(prev => prev + 1);
      setShowResult(false);
      setIsCorrect(false);
      setShowHint(false);
      setTerminalInput('');
    } else {
      setMissionComplete(true);
    }
  };

  const completeMission = () => {
    const correctAnswers = answers.filter(a => a.correct).length;
    const bonusXp = correctAnswers === totalChallenges ? 50 : 0; // Perfect bonus
    onComplete(mission.id, earnedXp + bonusXp);
  };

  if (missionComplete) {
    const correctAnswers = answers.filter(a => a.correct).length;
    const isPerfect = correctAnswers === totalChallenges;

    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-950 via-violet-950 to-stone-950 text-white p-6 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${
            isPerfect ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gradient-to-br from-emerald-400 to-teal-500'
          }`}>
            {isPerfect ? <Star className="w-10 h-10 text-white" /> : <Check className="w-10 h-10 text-white" />}
          </div>

          <h2 className="text-2xl font-bold mb-2">
            {isPerfect ? 'Perfect Score!' : 'Mission Complete!'}
          </h2>
          <p className="text-stone-400 mb-6">{mission.title}</p>

          <div className="bg-stone-900/50 rounded-xl p-4 mb-6 border border-stone-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-stone-400">Challenges</span>
              <span className="text-white">{correctAnswers}/{totalChallenges} correct</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-400">XP Earned</span>
              <span className="text-amber-400 font-bold">+{earnedXp + (isPerfect ? 50 : 0)} XP</span>
            </div>
            {isPerfect && (
              <div className="flex justify-between items-center mt-2 text-emerald-400">
                <span>Perfect Bonus</span>
                <span>+50 XP</span>
              </div>
            )}
          </div>

          <button
            onClick={completeMission}
            className="w-full py-3 bg-gradient-to-r from-violet-600 to-pink-600 rounded-xl font-semibold hover:from-violet-500 hover:to-pink-500 transition-all"
          >
            Continue →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950 text-white p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="text-stone-400 hover:text-white transition-colors">
            ← Back
          </button>
          <div className="text-sm text-stone-400">
            Challenge {currentChallenge + 1}/{totalChallenges}
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-1 mb-6">
          {mission.challenges.map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${
              i < currentChallenge ? 'bg-emerald-500' :
              i === currentChallenge ? 'bg-violet-500' :
              'bg-stone-800'
            }`} />
          ))}
        </div>

        {/* Mission Info */}
        <div className={`flex items-center gap-3 mb-6 p-3 rounded-xl bg-gradient-to-r ${chapter.color} bg-opacity-10`}>
          <chapter.icon className="w-6 h-6" />
          <div>
            <div className="text-sm opacity-70">Chapter {chapter.id}: {chapter.title}</div>
            <div className="font-semibold">{mission.title}</div>
          </div>
        </div>

        {/* Story (first challenge only) */}
        {currentChallenge === 0 && (
          <div className="bg-stone-900 rounded-xl p-4 mb-6 border border-stone-800">
            <p className="text-stone-300 leading-relaxed">{mission.story}</p>
          </div>
        )}

        {/* Challenge */}
        <div className="bg-stone-900 rounded-xl p-6 border border-stone-800">
          <div className="flex items-center gap-2 mb-4">
            {challenge.type === 'terminal' && <Terminal className="w-5 h-5 text-emerald-400" />}
            {challenge.type === 'quiz' && <HelpCircle className="w-5 h-5 text-violet-400" />}
            {challenge.type === 'scenario' && <AlertTriangle className="w-5 h-5 text-amber-400" />}
            <span className="text-sm text-stone-400 capitalize">{challenge.type} Challenge</span>
          </div>

          {/* Quiz Type */}
          {challenge.type === 'quiz' && (
            <>
              <p className="text-lg mb-4">{challenge.question}</p>
              <div className="grid gap-2">
                {challenge.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(index)}
                    disabled={showResult}
                    className={`p-3 rounded-lg text-left transition-all flex items-center gap-3 ${
                      showResult
                        ? index === challenge.correct
                          ? 'bg-emerald-500/20 border-emerald-500'
                          : 'bg-stone-800/50 border-stone-700'
                        : 'bg-stone-800 border-stone-700 hover:border-violet-500'
                    } border`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                      showResult && index === challenge.correct ? 'bg-emerald-500 text-white' : 'bg-stone-700'
                    }`}>
                      {showResult && index === challenge.correct ? <Check className="w-4 h-4" /> : String.fromCharCode(65 + index)}
                    </div>
                    <span>{option}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Terminal Type */}
          {challenge.type === 'terminal' && (
            <>
              <p className="text-lg mb-4">{challenge.prompt}</p>
              <div className="bg-stone-950 rounded-lg p-4 border border-stone-700">
                <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2">
                  <span className="text-emerald-400">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    disabled={showResult}
                    className="flex-1 bg-transparent outline-none font-mono"
                    placeholder="Type your command..."
                    autoFocus
                  />
                  {!showResult && (
                    <button type="submit" className="p-2 hover:bg-stone-800 rounded transition-colors">
                      <Send className="w-4 h-4" />
                    </button>
                  )}
                </form>
              </div>
              {!showResult && !showHint && (
                <button
                  onClick={() => setShowHint(true)}
                  className="mt-3 text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1"
                >
                  <Lightbulb className="w-4 h-4" /> Show hint
                </button>
              )}
              {showHint && !showResult && (
                <div className="mt-3 p-3 bg-violet-500/10 rounded-lg border border-violet-500/30">
                  <code className="text-violet-300 text-sm">{challenge.hint}</code>
                </div>
              )}
            </>
          )}

          {/* Scenario Type */}
          {challenge.type === 'scenario' && (
            <>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-4">
                <p className="text-amber-200">{challenge.situation}</p>
              </div>
              <div className="grid gap-2">
                {challenge.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleScenarioAnswer(index)}
                    disabled={showResult}
                    className={`p-3 rounded-lg text-left transition-all ${
                      showResult
                        ? index === challenge.correct
                          ? 'bg-emerald-500/20 border-emerald-500'
                          : 'bg-stone-800/50 border-stone-700'
                        : 'bg-stone-800 border-stone-700 hover:border-amber-500'
                    } border`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Result */}
          {showResult && (
            <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-rose-500/10 border border-rose-500/30'}`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span className="font-semibold text-emerald-400">Correct!</span>
                  </>
                ) : (
                  <>
                    <X className="w-5 h-5 text-rose-400" />
                    <span className="font-semibold text-rose-400">Not quite</span>
                  </>
                )}
              </div>
              <p className="text-sm text-stone-300">{challenge.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {showResult && (
            <button
              onClick={nextChallenge}
              className="w-full mt-4 py-3 bg-gradient-to-r from-violet-600 to-pink-600 rounded-lg font-semibold hover:from-violet-500 hover:to-pink-500 transition-all flex items-center justify-center gap-2"
            >
              {currentChallenge < totalChallenges - 1 ? (
                <>Next Challenge <ChevronRight className="w-5 h-5" /></>
              ) : (
                <>Complete Mission <Sparkles className="w-5 h-5" /></>
              )}
            </button>
          )}
        </div>

        {/* Concept Card */}
        <div className="mt-4 p-4 bg-stone-900/50 rounded-xl border border-stone-800">
          <div className="text-sm text-stone-400">Concept: <span className="text-violet-400">{mission.concept}</span></div>
        </div>
      </div>
    </div>
  );
};

export default MissionScreen;
