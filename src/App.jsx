import { useState } from 'react';
import WelcomeScreen from './components/screens/WelcomeScreen';
import ChapterSelect from './components/screens/ChapterSelect';
import MissionScreen from './components/screens/MissionScreen';
import Sandbox from './components/game/Sandbox';

export default function GitMastery() {
  const [gameState, setGameState] = useState('welcome'); // welcome, chapters, mission
  const [playerName, setPlayerName] = useState('');
  const [completedMissions, setCompletedMissions] = useState([]);
  const [xp, setXp] = useState(0);
  const [currentMission, setCurrentMission] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [showSandbox, setShowSandbox] = useState(false);

  const handleStart = (name) => {
    setPlayerName(name);
    setGameState('chapters');
  };

  const handleSelectMission = (mission, chapter) => {
    setCurrentMission(mission);
    setCurrentChapter(chapter);
    setGameState('mission');
  };

  const handleCompleteMission = (missionId, earnedXp) => {
    if (!completedMissions.includes(missionId)) {
      setCompletedMissions([...completedMissions, missionId]);
    }
    setXp(prev => prev + earnedXp);
    setGameState('chapters');
  };

  return (
    <div className="font-sans">
      {gameState === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}

      {gameState === 'chapters' && (
        <ChapterSelect
          playerName={playerName}
          completedMissions={completedMissions}
          xp={xp}
          onSelectMission={handleSelectMission}
          onOpenSandbox={() => setShowSandbox(true)}
        />
      )}

      {gameState === 'mission' && currentMission && currentChapter && (
        <MissionScreen
          mission={currentMission}
          chapter={currentChapter}
          onComplete={handleCompleteMission}
          onBack={() => setGameState('chapters')}
        />
      )}

      {showSandbox && <Sandbox onClose={() => setShowSandbox(false)} />}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
