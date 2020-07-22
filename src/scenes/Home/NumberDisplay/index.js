import React, { useState, useEffect } from 'react';
import s from './index.module.css';

const ten = Array.from(Array(10).keys());

function NumberDisplay({ value: v }) {
  const [fd, setFd] = useState(true);

  useEffect(() => {
    setFd(false);
  }, []);

  const value = fd ? Math.floor(Math.random() * 11) : v;

  return (
    <div className={s.value}>
      <div className={s.numbercontainer} style={{ transform: `translateY(-${value * 100}px)` }}>
        {ten.map(t => (
          <div className={s.number} style={{ top: `${t * 100}px` }} key={t}>{t}</div>
        ))}
      </div>
    </div>
  );
}

export default NumberDisplay;
