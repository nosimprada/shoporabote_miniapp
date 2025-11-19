import {React, useState, useEffect} from "react";
import { useTelegram } from "../../hooks/useTelegram";

function Tos() {
  const { tg, user, onClose } = useTelegram();
  const [tosConfirmed, setTosConfirmed] = useState(false);

  useEffect(() => {
    tg.ready();
    if (!tg.isFullscreen) {
      tg.requestFullscreen();
    }
    tg.expand();
    tg.disableVerticalSwipes();
    tg.enableClosingConfirmation();
    tg.MainButton.show();
    tg.MainButton.setText('Продолжить');

    if (tosConfirmed) {
      tg.MainButton.enable();
    } else {
      tg.MainButton.disable();
    }
    tg.MainButton.onClick(onClose);

  }, [tg, tosConfirmed]);

  return (
    <div className="App">
      <span>{user?.username}</span>
      <button onClick={() => setTosConfirmed(!tosConfirmed)}>
        {tosConfirmed ? "Отменить" : "Подтвердить"}
      </button>
    </div>
  );
}

export default Tos;