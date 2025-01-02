'use client';

import React from 'react';
import CountUp from 'react-countup';

const AnimatedCounter: React.FC<{ amount: number }> = ({ amount }) => {
  return (
    <div className="w-full">
      
      <CountUp
        decimals={2}
        decimal="." // Use dot for decimal
        separator="," // Use comma for thousands
        prefix="₹"
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;
