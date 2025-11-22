import React from "react";

function TosHeader() {
  return (
    <div>
        <nav className="navbar fixed-top" style={{
            marginTop: "calc(var(--tg-safe-area-inset-top) + var(--tg-content-safe-area-inset-top))",
            backgroundColor: "var(--tg-theme-bg-color)"
            }}>
            <div className="container-fluid justify-content-center flex-wrap">
            <span className='text-wrap fw-bold' style={{color: "var(--tg-theme-accent-text-color)"}}>Пользовательское соглашение</span>
            </div>
        </nav>
    </div>
    );
}

export default TosHeader;