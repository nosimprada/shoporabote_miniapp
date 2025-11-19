import React from "react";
import { useTelegram } from "../hooks/useTelegram";
import { useRegState } from "../hooks/useRegState";
import { useEffect } from "react";

function RegBottomBar() {
  const { tg } = useTelegram();
  const { isAgreed, setIsAgreed, step, setStep } = useRegState();
    useEffect(() => {
      tg.MainButton.show();
      if (step === 1) {
        tg.MainButton.setText('Продолжить');
      } else if (step === 2) {
        tg.SecondaryButton.position = 'left';
        tg.SecondaryButton.show();
        tg.SecondaryButton.setText('Назад');
        tg.MainButton.setText('Далее');
      }
  
      const handleMainButtonClick = () => setStep(step + 1);
      tg.MainButton.onClick(handleMainButtonClick);
  
      return () => {
        tg.MainButton.offClick(handleMainButtonClick);
      };
    }, [tg, isAgreed, step, setStep]);

  return (
    <div className="tos-bottom-bar">
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
          className="checkbox-input"
        />
        <span className="checkbox-custom"></span>
        <span className="checkbox-label">Я согласен с условиями пользовательского соглашения</span>
      </label>
    </div>
  );
}

export default RegBottomBar;