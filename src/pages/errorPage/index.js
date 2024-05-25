import Handlebars from "handlebars";
import tpl from "./error.hbs?raw";
import "./style.scss";
import { Button } from "../../components/button/index.js";
import { Navigation } from "../../helpers/navigation/index.js";

export const ErrorPage = (props) => {
  return Handlebars.compile(tpl)({
    Navigation: Navigation(),
    ErrorCode: props.error_code,
    ErrorMessage: props.error_message,
    BackToChatBtn: Button({
      buttonText: "Back to Chat",
      buttonStyle: "button__contained",
    }),
  });
};
