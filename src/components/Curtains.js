import React, { useEffect } from 'react';

const Curtains = () => {

  const showTime = () => {
    const curtain = document.getElementById("curtain");
    curtain.className = "open";

    const scene = document.getElementById("scene");
    scene.className = "expand";
  };

  const endShow = () => {
    const scene = document.getElementById("scene");
    scene.className = "hidden"
  };

  useEffect(() => {
    const sceneTimeout = setTimeout(() => {
      showTime();
    }, 1000);
    const endSceneTimeout = setTimeout(() => {
        endShow();
    }, 4500)
    return () => {
      clearTimeout(sceneTimeout, endSceneTimeout);
    };
  }, []);

  return (
    <>
      <div>
        <div id='scene'>
          <div id='curtain'>
            <div className='left'></div>
            <div className='right'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curtains;
