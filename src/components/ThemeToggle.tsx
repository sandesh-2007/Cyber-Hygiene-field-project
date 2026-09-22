import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
  id?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  showLabel = false, 
  className = '',
  id = 'theme-toggle-btn'
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      id={id}
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[5px] border text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-red-600/40 ${
        isDark
          ? 'bg-neutral-900 border-neutral-700 text-neutral-200 hover:border-red-500 hover:text-white hover:bg-neutral-800'
          : 'bg-white border-neutral-300 text-neutral-800 hover:border-red-600 hover:text-red-600 hover:bg-neutral-50'
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 text-amber-400" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-red-600" />
      )}
      <span>{isDark ? 'LIGHT MODE' : 'DARK MODE'}</span>
    </button>
  );
};


