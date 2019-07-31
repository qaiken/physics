import Projectile from 'physics-projectile';
import { getRandomNum } from './utils';

export default (function() {
  let _initYPos, _minYPos, _numJumpers, _className;
  let isRunning = false;

  const winWidth = window.outerWidth;
  const frag = document.createDocumentFragment();

  const initJumpers = function() {
    for (let i = 0; i < _numJumpers; ++i) {
      const jumper = document.createElement('div');

      jumper.classList.add('jumper', `jumper-${i}`, _className);
      jumper.style.zIndex = getRandomNum(0, 10);

      frag.appendChild(jumper);
    }

    document.body.appendChild(frag);
  };

  const jumpEm = function() {
    for (let i = 0; i < _numJumpers; ++i) {
      (function(i) {
        let initDelay = getRandomNum(0, 5000);

        setTimeout(function jump() {
          let initV = getRandomNum(250, 750);
          let g = getRandomNum(-1000, 0);
          let degrees = getRandomNum(70, 90);
          let initXPos = getRandomNum(0, winWidth);

          let runningAnimation = new Projectile({
            selector: document.querySelector(`.jumper-${i}`),
            initV: initV,
            g: g,
            frictionCo: 0.5,
            degrees: degrees,
            initXPos: initXPos,
            initYPos: _initYPos,
            minYPos: _minYPos
          });

          runningAnimation.startAnimation();

          const checkifStopped = setInterval(function() {
            if (isRunning && !runningAnimation.projectileAnimation) {
              clearInterval(checkifStopped);
              jump();
            }

            if (!isRunning) {
              clearInterval(checkifStopped);
            }
          }, 1000);
        }, initDelay);
      })(i);
    }
  };

  const init = function({
    numJumpers = 20,
    className = 'jumpy-class',
    initYPos = -50,
    minYPos = -100
  }) {
    _initYPos = initYPos;
    _minYPos = minYPos;
    _numJumpers = numJumpers;
    _className = className;
    isRunning = true;

    initJumpers();
    jumpEm();
    return true;
  };

  const stop = function() {
    isRunning = false;
    return true;
  };

  return {
    init,
    stop,
    start: jumpEm
  };
})();
