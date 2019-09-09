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
    link: function() {
      
    }
  }
}

class TextInputCtrl {
  constructor() {
    'ngInject';
  }
}