import React, { useEffect } from "react";
import { useTelegram } from "../hooks/useTelegram";
import Tos from "./TOS/Tos";
import '../styles/RegistrationPage.css';
import { useRegState } from "../hooks/useRegState";
import RegBottomBar from "./RegBottomBar";

function RegistrationPage() {
  const { step } = useRegState();
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    if (!tg.isFullscreen) {
      tg.requestFullscreen();
    }
    tg.expand();
    tg.disableVerticalSwipes();
    tg.enableClosingConfirmation();
  }, [tg]);

  return (
    <div>
        {step === 1 && <Tos />}
        <RegBottomBar />
    </div>
  );
}

export default RegistrationPage;