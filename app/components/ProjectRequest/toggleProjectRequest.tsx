// useToggleAnimation.js
'use client'

import { useState } from 'react';

export const useToggleAnimation = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
  };

  return { isAnimated, toggleAnimation };
};