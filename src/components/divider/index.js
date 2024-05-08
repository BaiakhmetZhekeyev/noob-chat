import Handlebars from "handlebars";
import tpl from "./divider.hbs?raw";
import "./style.scss";

export const Divider = (props) => {
  return Handlebars.compile(tpl)(props);
};
