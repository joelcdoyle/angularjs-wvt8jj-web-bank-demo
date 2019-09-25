export default function emailInput() {
  'ngInject';
  return {
    controller: EmailInputCtrl,
    templateUrl: './email-input.html',
    controllerAs: "$ctrl",
    require: ['^form'],
    scope: {
      name: "@",
      model: "=",
      label: "="
    },
    bindToController: true,
    link: function (scope, elem, attr, form) {
      scope.$ctrl.form = form[0];
    }
  }
}

class EmailInputCtrl {
  constructor() {
    'ngInject';
  }
  showSuccess() {
    return this.form[this.name].$valid;
  }
}