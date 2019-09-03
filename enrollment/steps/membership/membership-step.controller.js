class EnrollMembershipCtrl {
  constructor(membershipStep) {
    "ngInject";
    console.log(membershipStep)
    let $ctrl = this;
    $ctrl.step = membershipStep;
  }
}
export default EnrollMembershipCtrl