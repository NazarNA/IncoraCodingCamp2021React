import React, { useState, useEffect } from 'react';
import moment from 'moment';

import styles from './Timer.module.scss';

interface TimerProps {
  time: number;
  step: number;
  autostart: boolean;
  onTimeStart: () => void;
  onTimeEnd: () => void;
  onTimePause: () => void;
}

const Timer = ({ time, step, onTimeEnd, onTimePause, onTimeStart, autostart }: TimerProps) => {
  const [intervalId, setIntervalId] = useState();
  const [start, setStart] = useState<boolean>(false);
  let [value, setValue] = useState<number>(time);

  const onTick = (): void => {
    setValue(prev => prev - step);
  };

  const onStart = (): void => {
    const interval: any = setInterval(onTick, step);
    setIntervalId(interval);
    setStart(true);
  };

  const onStop = (): void => {
    setStart(false);
    clearInterval(intervalId);
  };

  useEffect(() => {
    if (autostart) {
      const interval: any = setInterval(onTick, step);
      setStart(true);
      setIntervalId(interval);
    }
    return () => clearInterval(intervalId);
  }, [autostart]);

  useEffect(() => {
    if (value <= 0) {
      clearInterval(intervalId);
    }
  }, [value]);

  return (
    <div>
      <div>{moment.utc(value).format('mm:ss')}</div>
      <progress className={styles.timer} value={value} max={time}></progress>
      {start ? <button onClick={onStop}>Stop</button> : <button onClick={onStart}>Start</button>}
    </div>
  );
};

export default Timer;
