import angular from 'angular';

import './progress-circle';
import './progress-bar';
import './tile.scss';
import './button.scss';
import './text-input';

// Create the module where our functionality can attach to
let commonModule = angular.module('common', 
  ['progress-circle', 'progress-bar', 'text-input']);

export default commonModule;