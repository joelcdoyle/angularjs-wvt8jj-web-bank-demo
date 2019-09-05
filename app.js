import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-ui-bootstrap';
import ngAnimate from "angular-animate";

// Import your app stylesheets
import './style.scss';

// Import your app functionality
import './enrollment'

// Create and bootstrap application
const requires = [
  'ui.router',
  'ui.bootstrap',
  'enrollment',

];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);