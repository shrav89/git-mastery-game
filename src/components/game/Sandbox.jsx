import { useState, useEffect, useRef } from 'react';
import { Terminal, X } from 'lucide-react';

const Sandbox = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Git Sandbox — Practice any command!' },
    { type: 'system', text: 'Type "help" for available commands' },
  ]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    let newHistory = [...history, { type: 'input', text: input }];

    if (input.toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (input.toLowerCase() === 'help') {
      newHistory.push({ type: 'info', text: 'git init | add | commit | branch | checkout | merge | log | stash | push | pull | rebase | cherry-pick | reset | revert | tag | remote | fetch | diff | status' });
    } else if (input.toLowerCase().startsWith('git')) {
      newHistory.push({ type: 'success', text: `✓ Command recognized: ${input}` });
      newHistory.push({ type: 'info', text: '(Sandbox simulates command recognition)' });
    } else {
      newHistory.push({ type: 'error', text: 'Not a git command. Type "help" for commands.' });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
      <div className="bg-stone-900 rounded-2xl w-full max-w-2xl overflow-hidden border border-stone-700">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-white" />
            <span className="font-semibold text-white">Git Sandbox</span>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div ref={terminalRef} className="p-4 h-80 overflow-y-auto font-mono text-sm bg-stone-950">
          {history.map((line, i) => (
            <div key={i} className={`mb-1 ${
              line.type === 'input' ? 'text-green-400' :
              line.type === 'success' ? 'text-emerald-400' :
              line.type === 'error' ? 'text-red-400' :
              line.type === 'info' ? 'text-cyan-400' :
              'text-violet-400'
            }`}>
              {line.type === 'input' && <span className="text-violet-400">$ </span>}
              {line.text}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <span className="text-violet-400">$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-green-400 outline-none ml-1"
              placeholder="Type a git command..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
