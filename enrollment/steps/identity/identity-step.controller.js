class IdentityStepCtrl {
  constructor(identityStep, EnrollmentService) {
    this.EnrollmentService = EnrollmentService;
    let $ctrl = this;
    $ctrl.membership = EnrollmentService.membership;

    $ctrl.partIndex = 0;
    $ctrl.step = identityStep;
    $ctrl.parts = identityStep.parts;
    //console.log($ctrl.parts);
  }

  submitIdentity() {
    this.EnrollmentService.submitIdentity(this.identity);
  }

  nextPart() {
    this.partIndex++;
  }

  getPart(index) {
    return this.parts[index];
  }

  getLabel(part) {
    return this.parts[this.partIndex].text;
  }
}
export default IdentityStepCtrl