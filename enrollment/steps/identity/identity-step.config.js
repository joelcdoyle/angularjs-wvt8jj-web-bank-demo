function EnrollmentIdentityStepConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('enrollment.steps.identity', {
    url: '/identity',
    // controller: 'EnrollmentIdenityStepCtrl',
    templateUrl: "./identity-step.html"
  });

};

export default EnrollmentIdentityStepConfig;