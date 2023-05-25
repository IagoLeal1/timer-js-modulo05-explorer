import Controls from './controls.js';
import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
} from './elements.js';
import Sound from './sounds.js';
import Timer from './timer.js';
import Events from './events.js';

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sound();
Events({controls, timer, sound})

