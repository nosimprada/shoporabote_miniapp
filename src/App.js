import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import './App.css';

import Tos from './components/TOS/Tos';

function App() {
  return (
    <div className="App">
      <Tos />
    </div>
  );
}

export default App;
