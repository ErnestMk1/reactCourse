import React, { useState, useEffect } from 'react';

const HookMouse = (props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const setCoordinates = (e) => {
    console.log('mouseEvent');
    setX(e.clientX);
    setY(e.clientY)
  };

  useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', setCoordinates);

    return () => {
      console.log('Component removing event');
      window.removeEventListener('mousemove', setCoordinates);
    };
  }, []);

  return (
    <div>
      X - {x}
      Y - {y}
    </div>
  );
};

export default HookMouse;
