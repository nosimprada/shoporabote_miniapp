import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import './App.css';

function App() {
  const { tg, user, onClose } = useTelegram();

  useEffect(() => {
    tg.ready();
    if (!tg.isFullscreen) {
      tg.requestFullscreen();
    }
  }, [tg]);

  return (
    <div className="App">
      <span>{user?.username}</span>
      <button className="element" onClick={onClose}>Close Telegram WebApp</button>
    </div>
  );
}

export default App;
