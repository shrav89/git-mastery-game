import { useState } from 'react';
import { Trophy, Terminal, Check, Lock, ChevronDown, ChevronUp, Flame } from 'lucide-react';
import { chapters, totalMissions } from '../../data/chapters';

const ChapterSelect = ({ playerName, completedMissions, xp, onSelectMission, onOpenSandbox }) => {
  const [expandedChapter, setExpandedChapter] = useState(null);

  const getChapterProgress = (chapter) => {
    const completed = chapter.missions.filter(m => completedMissions.includes(m.id)).length;
    return { completed, total: chapter.missions.length };
  };

  const isChapterUnlocked = (chapterIndex) => {
    if (chapterIndex === 0) return true;
    const prevChapter = chapters[chapterIndex - 1];
    const { completed, total } = getChapterProgress(prevChapter);
    return completed >= Math.ceil(total * 0.7); // 70% to unlock next
  };

  const isMissionUnlocked = (mission, chapterIndex) => {
    if (!isChapterUnlocked(chapterIndex)) return false;
    const chapter = chapters[chapterIndex];
    const missionIndex = chapter.missions.findIndex(m => m.id === mission.id);
    if (missionIndex === 0) return true;
    return completedMissions.includes(chapter.missions[missionIndex - 1].id);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white p-4 md:p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {playerName}!</h1>
            <p className="text-stone-400 text-sm">Senior Product Designer @ DesignFlow AI</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-amber-400">
              <Trophy className="w-5 h-5" />
              <span className="font-bold text-xl">{xp} XP</span>
            </div>
            <p className="text-stone-500 text-sm">{completedMissions.length}/{totalMissions} missions</p>
          </div>
        </div>

        {/* Sandbox Button */}
        <button
          onClick={onOpenSandbox}
          className="w-full mb-6 p-4 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 border border-teal-500/30 rounded-xl flex items-center justify-center gap-3 hover:from-teal-600/30 hover:to-cyan-600/30 transition-all"
        >
          <Terminal className="w-5 h-5 text-teal-400" />
          <span className="font-semibold text-teal-300">Open Git Sandbox</span>
          <span className="text-sm text-teal-400/70">— Practice any command!</span>
        </button>

        {/* Chapters */}
        <div className="space-y-3">
          {chapters.map((chapter, chapterIndex) => {
            const Icon = chapter.icon;
            const progress = getChapterProgress(chapter);
            const unlocked = isChapterUnlocked(chapterIndex);
            const isExpanded = expandedChapter === chapter.id;

            return (
              <div key={chapter.id} className="bg-stone-900 rounded-xl border border-stone-800 overflow-hidden">
                <button
                  onClick={() => unlocked && setExpandedChapter(isExpanded ? null : chapter.id)}
                  className={`w-full p-4 flex items-center gap-4 transition-all ${
                    unlocked ? 'hover:bg-stone-800/50' : 'opacity-60 cursor-not-allowed'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${chapter.color} flex items-center justify-center shadow-lg`}>
                    {unlocked ? <Icon className="w-6 h-6 text-white" /> : <Lock className="w-5 h-5 text-white/70" />}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-stone-500 text-sm">Chapter {chapter.id}</span>
                      {progress.completed === progress.total && <Check className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <h3 className="font-semibold">{chapter.title}</h3>
                    <p className="text-sm text-stone-400">{chapter.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-stone-400">{progress.completed}/{progress.total}</div>
                    <div className="w-20 h-1.5 bg-stone-700 rounded-full mt-1 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${chapter.color} transition-all`}
                        style={{ width: `${(progress.completed / progress.total) * 100}%` }}
                      />
                    </div>
                  </div>
                  {unlocked && (
                    isExpanded ? <ChevronUp className="w-5 h-5 text-stone-400" /> : <ChevronDown className="w-5 h-5 text-stone-400" />
                  )}
                </button>

                {isExpanded && (
                  <div className="border-t border-stone-800 p-4 bg-stone-900/50">
                    <p className="text-sm text-stone-400 mb-4">{chapter.description}</p>
                    <div className="grid gap-2">
                      {chapter.missions.map((mission) => {
                        const missionUnlocked = isMissionUnlocked(mission, chapterIndex);
                        const isCompleted = completedMissions.includes(mission.id);

                        return (
                          <button
                            key={mission.id}
                            onClick={() => missionUnlocked && onSelectMission(mission, chapter)}
                            disabled={!missionUnlocked}
                            className={`p-3 rounded-lg flex items-center gap-3 transition-all ${
                              missionUnlocked
                                ? 'bg-stone-800 hover:bg-stone-700 cursor-pointer'
                                : 'bg-stone-800/50 opacity-50 cursor-not-allowed'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              isCompleted ? 'bg-emerald-500' : missionUnlocked ? 'bg-stone-700' : 'bg-stone-700/50'
                            }`}>
                              {isCompleted ? <Check className="w-4 h-4 text-white" /> :
                               !missionUnlocked ? <Lock className="w-4 h-4 text-stone-500" /> :
                               <span className="text-xs text-stone-400">{mission.id.split('-')[1]}</span>}
                            </div>
                            <div className="flex-1 text-left">
                              <h4 className="font-medium text-sm">{mission.title}</h4>
                              <p className="text-xs text-stone-500">{mission.concept}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {[...Array(mission.difficulty)].map((_, i) => (
                                <Flame key={i} className={`w-3 h-3 ${i < mission.difficulty ? 'text-orange-400' : 'text-stone-700'}`} />
                              ))}
                            </div>
                            <span className="text-xs text-amber-400">+{mission.xpReward} XP</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChapterSelect;
