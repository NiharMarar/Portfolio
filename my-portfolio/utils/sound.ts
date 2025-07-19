// Simple sound utility for terminal effects
export const playTerminalSound = (type: 'type' | 'enter' | 'error' = 'type') => {
  // Create audio context for simple beep sounds
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Different frequencies for different sounds
  const frequencies = {
    type: 800,    // High pitch for typing
    enter: 600,   // Medium pitch for enter
    error: 400    // Low pitch for errors
  };
  
  oscillator.frequency.setValueAtTime(frequencies[type], audioContext.currentTime);
  oscillator.type = 'sine';
  
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.1);
};

// Check if sound is enabled (user preference)
export const isSoundEnabled = () => {
  return localStorage.getItem('terminal-sound') !== 'disabled';
};

export const toggleSound = () => {
  const current = isSoundEnabled();
  localStorage.setItem('terminal-sound', current ? 'disabled' : 'enabled');
  return !current;
}; 