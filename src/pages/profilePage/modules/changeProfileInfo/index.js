import Handlebars from "handlebars";
import tpl from "./changeProfileInfo.hbs?raw";
import "./style.scss";
import Image from "../../../../assets/images/avatar.jpg";
import { Navigation } from "../../../../helpers/navigation/index.js";
import { Divider } from "../../../../components/divider/index.js";
import { Avatar } from "../../../../components/avatar/index.js";
import { Input } from "../../../../components/input/index.js";
import { Button } from "../../../../components/button/index.js";

export const ChangeProfileInfo = (props) => {
  return Handlebars.compile(tpl)({
    Navigation: Navigation(),
    Divider: Divider(),
    Avatar: Avatar({
      userImage: Image,
    }),
    EmailInput: Input({
      inputClass: "input-container-secondary",
      labelText: "Email",
      inputType: "email",
      inputName: "email",
    }),
    LoginInput: Input({
      inputClass: "input-container-secondary",
      labelText: "Login",
      inputType: "text",
      inputName: "login",
    }),
    FirstNameInput: Input({
      inputClass: "input-container-secondary",
      labelText: "First name",
      inputType: "text",
      inputName: "first_name",
    }),
    SecondNameInput: Input({
      inputClass: "input-container-secondary",
      labelText: "Second name",
      inputType: "text",
      inputName: "second_name",
    }),
    DisplayNameInput: Input({
      inputClass: "input-container-secondary",
      labelText: "Display name",
      inputType: "text",
      inputName: "display_name",
    }),
    Phone: Input({
      inputClass: "input-container-secondary",
      labelText: "Phone",
      inputType: "text",
      inputName: "phone",
    }),
    SaveBtn: Button({
      buttonText: "Save",
      buttonStyle: "button__contained",
    }),
  });
};
