import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar fixed-top bg-body-tertiary" style={{
        marginTop: "calc(var(--tg-safe-area-inset-top) + var(--tg-content-safe-area-inset-top))"
      }}>
        <div className="container-fluid justify-content-center">
          <span className='text-wrap fw-bold' style={{color: "var(--tg-theme-accent-text-color)"}}>Пользовательское соглашение</span>
          <i className="bi bi-file-earmark-text" style={{
            color: "var(--tg-theme-accent-text-color)"
          }}></i>
        </div>
      </nav>
    </div>
  );
}

export default App;
