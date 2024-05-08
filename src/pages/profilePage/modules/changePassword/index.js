import Handlebars from "handlebars";
import tpl from "./changePsw.hbs?raw";
import "./style.scss";
import Image from "../../../../assets/images/avatar.jpg";
import { Navigation } from "../../../../helpers/navigation/index.js";
import { Divider } from "../../../../components/divider/index.js";
import { Avatar } from "../../../../components/avatar/index.js";
import { Input } from "../../../../components/input/index.js";
import { Button } from "../../../../components/button/index.js";

export const ChangePassword = (props) => {
  return Handlebars.compile(tpl)({
    Navigation: Navigation(),
    Divider: Divider(),
    Avatar: Avatar({
      userImage: Image,
    }),
    oldPassword: Input({
      inputClass: "input-container-secondary",
      labelText: "Old password",
      inputType: "password",
    }),
    newPassword: Input({
      inputClass: "input-container-secondary",
      labelText: "New password",
      inputType: "password",
    }),
    repeatNewPassword: Input({
      inputClass: "input-container-secondary",
      labelText: "Repeat new password",
      inputType: "password",
    }),
    SaveBtn: Button({
      buttonText: "Change password",
      buttonStyle: "button__contained",
    }),
  });
};
