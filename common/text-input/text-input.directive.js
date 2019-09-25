export default function textInput() {
  'ngInject';
  return {
    controller: TextInputCtrl,
    templateUrl: './text-input.html',
    controllerAs: '$ctrl',
    require: ['^form'],
    scope: {
      name: "@",
      model: "=",
      label: "="
    },
    bindToController: true,
    link: function () {
      scope.$ctrl.form = form[0];
    }
  }
}

class TextInputCtrl {
  constructor() {
    'ngInject';
  }
  showSuccess() {
    return this.form[this.name].$valid;
  }
}