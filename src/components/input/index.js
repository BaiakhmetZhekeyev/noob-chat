import Handlebars from "handlebars";
import tpl from "./input.hbs?raw";
import "./style.scss";

export const Input = (props) => {
  return Handlebars.compile(tpl)(props);
};
