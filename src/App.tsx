import React, { useState } from 'react';

import './App.scss';
import Timer from './components/Timer/Timer';

function App() {
  const [time, setTime] = useState(10 * 1000);
  const [step, setStep] = useState(1000);

  return (
    <div>
      <Timer
        time={time}
        step={step}
        autostart={true}
        onTimeEnd={() => {}}
        onTimePause={() => {}}
        onTimeStart={() => {}}
      />
    </div>
  );
}

export default App;
