import React from "react";
import Chatbot from "react-simple-chatbot";

const steps = [
  {
    id: "1",
    message: "Prdict the Outputs for the given code snippet?",
    trigger: "2"
  },
  {
    id: "2",

    message:
      "class MainClass{ public static void main(String arg[]){int arr[][]={{4,3},{2,1}};int i,j; for(i=1;i>-1;i--){ for(j=1;j>-1;j--){ System.out.print(arr[i][j]);}}}}",
    trigger: "3"
  },
  {
    id: "3",
    options: [
      { value: 1, label: "1234", trigger: "5" },
      { value: 2, label: "1356", trigger: "4" },
      { value: 3, label: "2579", trigger: "4" },
      { value: 4, label: "3379", trigger: "4" }
    ]
  },
  {
    id: "4",
    message: "Wrong answer, try again.",
    trigger: "2"
  },
  {
    id: "5",
    message: "Awesome! Your choice is Correct!",
    end: true
  }
];

export default function App() {
  return <Chatbot steps={steps} />;
}
