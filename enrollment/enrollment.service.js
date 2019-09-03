class EnrollmentService {

  constructor($q) {
    "ngInject"
    this.$q = $q;
  }

  getSteps() {
    return this.$q.resolve([
      {
        title: "Membership Eligibility",
        order: 1,
        id: "MEMBERSHIP",
        state: "membership",
        parts: [
          {
            title: "Employee",
            text: "All employees of the Tyson Company are elligible, no matter where you live. Hello future member",
            imgURL: "",
            type: "EMPLOYEE"
          },
          {
            title: "Contigent and Contract Worker",
            text: "Those who provide support to The Tyson Company. A Tyson.com email address is required.",
            imgURL: "",
            type: "CONTRACT"
          },
          {
            title: "Immediate Family of Member",
            text: "Spouses, children, parents, siblings, grandparents, grandchildren, and step-relationships. Hello fam!",
            imgURL: "",
            type: "FAMILY"
          },
          {
            title: "Domestic Partner",
            text: "Domestic partners qualify if the existing member lives in the same residence and maintains a single economic unit with you",
            imgURL: "",
            type: "DOMESTIC_PARTNER"
          },
        ]

      },
      {
        title: "Identity Check",
        order: 2,
        id: "IDENTITY",
        state: "identity",
        parts: [
          {
            template: "What's your first name",
            id: "1"
          },
          {
            text: "Hi {{$ctrl.name}}! What's your last name?",
            id: "2"
          },
          {
            text: "What's your tyson.com <strong>email address</strong>",
            id: "3"
          },
          {
            text: "What's your <strong>phone number</strong>?",
            id: "4"
          },
          {
            text: "What's your <strong>social security number</strong>",
            id: "5"
          }
        ]
      },
      {
        title: "Fund Your Account",
        order: 3,
        id: "FUND"
      },
      {
        title: "Digital Banking Setup",
        order: 4,
        id: "DIGITAL"
      },
      {
        title: "The Legal Stuff",
        order: 5,
        id: "LEGAL"
      }
    ]);
  }
}

export default EnrollmentService