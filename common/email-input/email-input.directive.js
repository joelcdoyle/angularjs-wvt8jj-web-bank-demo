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
    bindToController: true
  }
}

class EmailInputCtrl {
  constructor() {
    'ngInject';
  }
}