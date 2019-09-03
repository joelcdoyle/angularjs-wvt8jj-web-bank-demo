import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-ui-bootstrap';

// Import your app stylesheets
import './style.scss';

// Import your app functionality
import './enrollment'

// Create and bootstrap application
const requires = [
  'ui.router',
  'enrollment',
  'ui.bootstrap'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);