import React from "react";
import { useTelegram } from "../hooks/useTelegram";
import { useRegState } from "../hooks/useRegState";
import { useEffect } from "react";

function RegBottomBar() {
  const { tg } = useTelegram();
  const { isAgreed, setIsAgreed, step, setStep, selectedCity } = useRegState();
  
  useEffect(() => {
    tg.MainButton.show();
    
    if (step === 1) {
      tg.MainButton.setText('Продолжить');
      tg.SecondaryButton.hide();
      
      if (isAgreed) {
        tg.MainButton.enable();
        tg.MainButton.color = tg.themeParams.button_color;
        tg.MainButton.textColor = tg.themeParams.button_text_color;
      } else {
        tg.MainButton.disable();
        tg.MainButton.color = tg.themeParams.hint_color;
        tg.MainButton.textColor = tg.themeParams.button_text_color;
      }
    } else if (step === 2) {
      tg.MainButton.setText('Далее');
      tg.SecondaryButton.position = 'left';
      tg.SecondaryButton.setText('Назад');
      tg.SecondaryButton.show();
      
      if (selectedCity) {
        tg.MainButton.enable();
        tg.MainButton.color = tg.themeParams.button_color;
        tg.MainButton.textColor = tg.themeParams.button_text_color;
      } else {
        tg.MainButton.disable();
        tg.MainButton.color = tg.themeParams.hint_color;
        tg.MainButton.textColor = tg.themeParams.button_text_color;
      }
    }

    const handleMainButtonClick = () => setStep(step + 1);
    const handleSecondaryButtonClick = () => setStep(step - 1);
    
    tg.MainButton.onClick(handleMainButtonClick);
    tg.SecondaryButton.onClick(handleSecondaryButtonClick);

    return () => {
      tg.MainButton.offClick(handleMainButtonClick);
      tg.SecondaryButton.offClick(handleSecondaryButtonClick);
    };
  }, [tg, isAgreed, step, setStep, selectedCity]);

  return (
    <div>
      {step === 1 && (
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
      )}
    </div>
  );
}

export default RegBottomBar;