import textInput from './text-input.directive';

import './text-input.scss';

let progressCircleModule = angular.module('text-input', [])
progressCircleModule.directive('textInput', textInput);