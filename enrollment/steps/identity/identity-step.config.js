function IdentityStepConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('enroll.steps.identity', {
    url: '/identity',
    controller: 'IdenityStepCtrl',
    controllerAs: "$ctrl",
    templateUrl: "./identity-step.html"
  });

}
export default IdentityStepConfig;