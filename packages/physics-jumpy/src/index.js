import Projectile from 'physics-projectile';
import { getRandomNum } from './utils';

export default (function() {
  let numJumpers, jumpyClass;
  let isRunning = false;

  const winWidth = window.outerWidth;
  const frag = document.createDocumentFragment();

  const initJumpers = function() {
    for (let i = 0; i < numJumpers; ++i) {
      const jumper = document.createElement('i');

      jumper.classList.add('jumper', `jumper-${i}`, jumpyClass);
      jumper.style.zIndex = getRandomNum(0, 10);

      frag.appendChild(jumper);
    }

    document.body.appendChild(frag);
  };

  const jumpEm = function() {
    for (let i = 0; i < numJumpers; ++i) {
      (function(i) {
        let initDelay = getRandomNum(0, 5000);
        let initV = getRandomNum(250, 750);
        let g = getRandomNum(-1000, 0);
        let degrees = getRandomNum(70, 90);
        let initXPos = getRandomNum(0, winWidth);

        setTimeout(function Jump() {
          let runningAnimation = new Projectile({
            selector: document.querySelector(`.jumper-${i}`),
            initV: initV,
            g: g,
            frictionCo: 0.5,
            degrees: degrees,
            initXPos: initXPos,
            initYPos: -50
          });

          runningAnimation.startAnimation();

          const checkifStopped = setInterval(function() {
            if (isRunning && !runningAnimation.projectileAnimation) {
              clearInterval(checkifStopped);
              Jump();
            }

            if (!isRunning) {
              clearInterval(checkifStopped);
            }
          }, 1000);
        }, initDelay);
      })(i);
    }
  };

  const init = function(jumperCount = 20, className = 'jumpy-class') {
    numJumpers = jumperCount;
    jumpyClass = className;
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
