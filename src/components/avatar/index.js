import Handlebars from "handlebars";
import tpl from "./avatar.hbs?raw";
import "./style.scss";

export const Avatar = (props) => {
  return Handlebars.compile(tpl)(props);
};
