import Handlebars from "handlebars";
import tpl from "./tpl.hbs?raw";
import "./style.scss";

export const Navigation = (props) => {
  return Handlebars.compile(tpl)(props);
};
