import React, { useEffect, useState, useMemo } from 'react';
import s from './index.module.css';
import { describe } from '../../service/date';
import Block from './Block';

let end = window.target;

function Home() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    document.title = window.title || "Easy countdown"
    const inter = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(inter);
  }, []);

  const described = useMemo(() => {
    return describe(date, end);
  }, [date]);

  return (
    <div className={s.root} style={{ backgroundImage: `url('${window.background}')` }}>
      <div>
        {(window.title && window.title.length > 0) && <div className={s.title}>{window.title}</div>}
        <div className={s.blocks}>
          {Object.entries(described).map(([key, value], idx, arr) => (
            <Block
              className={s.block}
              key={key}
              title={`${key}${value > 1 ? 's' : ''}`}
              value={value.toString().padStart(2, '0')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
