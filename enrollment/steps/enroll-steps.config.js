function EnrollmentStepsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('enroll.steps', {
    url: '/steps',
    templateUrl: "./enroll-steps.html",
    //controller: 'StepCtrl'
  });

};

export default EnrollmentStepsConfig;