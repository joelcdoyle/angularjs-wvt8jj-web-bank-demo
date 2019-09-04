function IdentityStepConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('enrollment.steps.identity', {
    url: '/identity',
    controller: 'IdenityStepCtrl',
    controllerAs: "$ctrl",
    templateUrl: "./identity-step.html"
  });

};

export default IdentityStepConfig;