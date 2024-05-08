import Handlebars from "handlebars";
import tpl from "./chat.hbs?raw";
import { Navigation } from "../../helpers/navigation/index.js";

export const Chat = (props) => {
  return Handlebars.compile(tpl)({ Navigation: Navigation() });
};
