class IdentityStepCtrl {
  constructor(identityStep, EnrollmentService, $sce) {
    this.EnrollmentService = EnrollmentService;
    let $ctrl = this;
    this.$sce = $sce;
    $ctrl.membership = EnrollmentService.membership;

    this.step = identityStep;
    this.parts = identityStep.parts;
    this.partModels = [];

    this.partIndex = 0;
    this.label = this.parts[this.partIndex].text;

    this.parts.forEach((part) => {
      this.partModels[this.partIndex] = part.defaultValue;
    })

    //console.log($ctrl.parts);
  }

  submitIdentity() {
    this.EnrollmentService.submitIdentity(this.identity);
  }

  nextPart() {
    this.partIndex++;
    this.label = this.parts[this.partIndex].text;
  }

  canNext() {
    if(this.partIndex == null || this.parts == null) {
      return false;
    }
    return this.partIndex < this.parts.length - 1;
  }

}
export default IdentityStepCtrl