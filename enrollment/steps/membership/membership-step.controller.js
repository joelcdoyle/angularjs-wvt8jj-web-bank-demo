class EnrollMembershipCtrl {
  constructor(membershipStep, EnrollmentService, $transitions) {
    "ngInject";
    let $ctrl = this;
    this.EnrollmentService = EnrollmentService;
    $ctrl.step = membershipStep;
    console.log($transitions)
  }

  submitMembership(membership) {
    console.log(membership)
    this.EnrollmentService.submitMembership(membership)
  }
}
export default EnrollMembershipCtrl