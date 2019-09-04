class EnrollmentCtrl {
  constructor($scope, $uibModal, $state, enrollmentSteps) {
    'ngInject';
    var $ctrl = this;
    $ctrl.steps = enrollmentSteps;
    $ctrl.activeIndex = 0;
    $ctrl.steps[0].active = true;

    $state.go("enroll.steps.membership");

    $scope.$on("advance-enrollment", (event, state) => {
      console.log(state)
      this.advanceEnrollment(state);
      this.$state.go("enroll.steps." + state);
    });

    // $uibModal.open({
    //   template: "<h1>Hello</h1>"
    // });
  }

  advanceEnrollment(state) {
    if (!this.hasMoreSteps()) {
      return;
    }

    this.steps.forEach((step) => {
      step.active = false;
    })

    this.steps.forEach((step) => {
      if (step.state == state) {
        step.active = true;
      }
    });


  }

  hasMoreSteps() {
    return this.activeIndex < this.steps.length - 1;
  }
}

export default EnrollmentCtrl;