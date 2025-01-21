"use client"
import React from 'react';
//data
import { BtnList } from '@/app/data';
//components
import NavigationButton from './NavigationButton';
import { WraperLayout } from '@/components';
//hooks
import { useScreenSize } from "@/hooks";

const Navigation = () => {
  const { isMediumScreen, isLargeScreen } = useScreenSize();
  const angleIncrement = 360 / BtnList.length;

  const radius = isLargeScreen ? 'calc(20vw - 1rem)' : isMediumScreen ? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem)';

  const renderView = () => {
    return (
      <div className='w-full fixed h-screen flex items-center justify-center'>
        <WraperLayout>
          {({ isSmallScreen }) => {
            if (isSmallScreen)
              return renderSmallView();

            return renderDefaultView();
          }}
        </WraperLayout>
      </div>
    );
  }

  const renderSmallView = () => {
    return (
      <>
        <div className='w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start justify-center relative group'>
          {
            BtnList.slice(0, BtnList.length / 2).map((btn, index) => <NavigationButton key={btn.label + index} {...btn} />)
          }
        </div>
        <div className='w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end justify-center relative group'>
          {
            BtnList.slice(BtnList.length / 2, BtnList.length).map((btn, index) => <NavigationButton key={btn.label + index} isLeftDirection {...btn} />)
          }
        </div>
      </>
    );
  }

  const renderDefaultView = () => {
    return (
      <div className='w-max flex items-center justify-center relative hover:pause animate-spin-slow group'>
        {
          BtnList.map((btn, index) => {
            const angleRad = (index * angleIncrement * Math.PI) / 180;
            const x = `calc(${radius} * ${Math.cos(angleRad)})`;
            const y = `calc(${radius} * ${Math.sin(angleRad)})`;

            return <NavigationButton key={btn.label + index} x={x} y={y} {...btn} />;
          })
        }
      </div>
    );
  }

  return renderView();
}

export default Navigation;