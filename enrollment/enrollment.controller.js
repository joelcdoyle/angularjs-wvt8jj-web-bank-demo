class EnrollmentCtrl {
  constructor($scope, $uibModal, $state, enrollmentSteps) {
    'ngInject';
    var $ctrl = this;
    $ctrl.steps = enrollmentSteps;
    $ctrl.activeIndex = 0;
    $ctrl.steps[0].active = true;

    $state.go("enroll.steps.membership")

    // $uibModal.open({
    //   template: "<h1>Hello</h1>"
    // });
  }

  advanceEnrollment() {
    if (!this.hasMoreSteps()) {
      return;
    }
    this.activeIndex++;
    this.steps.forEach((step) => {
      step.active = false;
    })
    this.steps[this.activeIndex].active = true;
  }

  hasMoreSteps() {
    return this.activeIndex < this.steps.length - 1;
  }
}

export default EnrollmentCtrl;