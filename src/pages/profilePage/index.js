import Handlebars from "handlebars";
import tpl from "./tpl.hbs?raw";
import "./style.scss";
import { Divider } from "../../components/divider/index.js";
import { Avatar } from "../../components/avatar/index.js";
import Image from "../../assets/images/avatar.jpg";
import { Button } from "../../components/button/index.js";
import { Navigation } from "../../helpers/navigation/index.js";

export const ProfilePage = (props) => {
  return Handlebars.compile(tpl)({
    Navigation: Navigation(),
    Divider: Divider(),
    Avatar: Avatar({
      userImage: Image,
    }),
    ChangeUserInfoBtn: Button({
      buttonText: "Change profile info",
      buttonStyle: "button__contained",
    }),
    ChangePasswordBtn: Button({
      buttonText: "Change password",
      buttonStyle: "button__contained",
    }),
    LogoutBtn: Button({
      buttonText: "Log out",
      buttonStyle: "button__warning",
    }),
  });
};
