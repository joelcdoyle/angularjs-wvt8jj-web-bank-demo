import angular from 'angular';

import './progress-circle';
import './progress-bar';
import './tile.scss';
import './button.scss';
import './text-input';
import './phone-input';
import './focus-me';

// Create the module where our functionality can attach to
let commonModule = angular.module('common',
  [
    'progress-circle', 
    'progress-bar', 
    'text-input', 
    'common.phone-input', 
    'common.focus-me'
  ]);

export default commonModule;