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
    tg.expand();
    tg.disableVerticalSwipes();
    tg.enableClosingConfirmation();

    tg.MainButton.setParams({
      text: 'Закрыть'
    });
    tg.MainButton.onClick(onClose);
    tg.MainButton.show();
  }, [tg]);

  return (
    <div className="App">
      <span>{user?.username}</span>
    </div>
  );
}

export default App;
