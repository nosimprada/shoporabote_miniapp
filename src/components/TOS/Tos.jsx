import {React, useState, useEffect} from "react";
import { useTelegram } from "../../hooks/useTelegram";
import TosBottomBar from "../RegBottomBar";
import { useRegState } from "../../hooks/useRegState";
import HeaderTOS from "./HeaderTOS";

function Tos() {
  const { tg } = useTelegram();
  const { isAgreed, setIsAgreed, step, setStep } = useRegState();

  useEffect(() => {
    tg.MainButton.show();
    tg.MainButton.setText('Продолжить');

    if (isAgreed) {
      tg.MainButton.enable();
      tg.MainButton.color = tg.themeParams.button_color;
      tg.MainButton.textColor = tg.themeParams.button_text_color;
    } else {
      tg.MainButton.disable();
      tg.MainButton.color = tg.themeParams.hint_color;
      tg.MainButton.textColor = tg.themeParams.button_text_color;
    }
    const handleMainButtonClick = () => setStep(step + 1);
    tg.MainButton.onClick(handleMainButtonClick);

    return () => {
      tg.MainButton.offClick(handleMainButtonClick);
    };
  }, [tg, isAgreed, step, setStep]);

  return (
    <div>
      <HeaderTOS />
    </div>
  );
}

export default Tos;