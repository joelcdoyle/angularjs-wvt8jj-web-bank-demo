class IdentityStepCtrl {
  constructor(identityStep, EnrollmentService, $sce) {
    this.EnrollmentService = EnrollmentService;
    let $ctrl = this;
    this.$sce = $sce;
    $ctrl.membership = EnrollmentService.membership;

    this.partIndex = 0;
    this.step = identityStep;
    this.parts = identityStep.parts;
    //console.log($ctrl.parts);
  }

  submitIdentity() {
    this.EnrollmentService.submitIdentity(this.identity);
  }

  nextPart() {
    this.partIndex++;
    this.label = this.parts[this.partIndex].text;
  }

}
export default IdentityStepCtrl