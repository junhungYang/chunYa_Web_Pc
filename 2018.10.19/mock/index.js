import Mock from "mockjs";
import data from "../data.json";
console.log(data.advertise);
Mock.mock("http://www.chunyajkkj.com/ch/advertise/advertise", {
  errno: 0,
  codeMsg: "success",
  data: data.advertise
});