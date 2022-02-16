export type DecisionNode = {
  question?:string;
  answers?: [string,string];
  children?: DecisionNode[];
  outcome? : string
}

const getTree = ():DecisionNode => ({
  question: "Is the application primarily a web-based user interface?",
  answers: ["Yes", "No"],
  children: [
    {
      outcome: "You should use Azure Static Web Sites"
    },
    {
      question: "Is this an integration system?",
      answers: ["Yes", "No"],
      children: [
        {
          outcome: "You should use Azure Integration Services"
        },
        {
          question: "Is this an event processing system?",
          answers: ["Yes", "No"],
          children: [
            {
              outcome: "You should use Azure Event Grid and Azure Functions"
            },
            {
              outcome: "Just use K8s"
            }
          ]
        }
      ]
    }
  ]
})

export default getTree