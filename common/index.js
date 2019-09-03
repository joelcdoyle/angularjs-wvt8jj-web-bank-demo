import angular from 'angular';

import './progress-circle';
import './progress-bar';
import './tile.scss';

// Create the module where our functionality can attach to
let commonModule = angular.module('common', ['progress-circle', 'progress-bar']);

export default commonModule;