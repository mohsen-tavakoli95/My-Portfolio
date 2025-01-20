import React from 'react';
//data
import { BtnList } from '@/app/data';
//components
import NavigationButton from './NavigationButton';

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  return (
    <div className='w-full fixed h-screen flex items-center justify-center'>
      <div className='w-max flex items-center justify-center relative hover:pause animate-spin-slow group'>
        {
          BtnList.map((btn, index) => {
            const angleRad = (index * angleIncrement * Math.PI) / 180;
            const radius = 'calc(20vw - 1rem)';
            const x = `calc(${radius} * ${Math.cos(angleRad)})`;
            const y = `calc(${radius} * ${Math.sin(angleRad)})`;

            return <NavigationButton key={btn.label + index} x={x} y={y} {...btn} />;
          })
        }
      </div>
    </div>
  );
}

export default Navigation;