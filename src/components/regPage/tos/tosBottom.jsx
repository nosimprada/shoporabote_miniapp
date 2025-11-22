import React from "react";
import {useEffect} from "react";

import { useTelegram } from "../../../hooks/useTelegram";

function TosBottom() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.expand();
    tg.MainButton.show();
  }, [tg]);

  return (
    <div>
      <nav className="fixed-bottom d-flex align-items-center justify-content-center" style={{paddingTop: "10px", paddingBottom: "10px", borderTop: "10px solid var(--tg-theme-hint-color)"}}>  
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
          <label className="form-check-label" htmlFor="checkDefault" style={{color: "var(--tg-theme-hint-color)"}}>
            Подтверждаю, что ознакомлен(а).
          </label>
        </div>
      </nav>
    </div>
  );
}

export default TosBottom;