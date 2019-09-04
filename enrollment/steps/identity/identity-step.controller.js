class IdentityStepCtrl {
  constructor(EnrollmentService) {
    this.EnrollmentService = EnrollmentService;
    let $ctrl = this;
  }

  submitIdentity() {
    this.EnrollmentService.submitIdentity(this.identity);
  }
}
export default IdentityStepCtrl