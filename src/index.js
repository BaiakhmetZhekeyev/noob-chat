import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage/index.js";
import { ProfilePage } from "./pages/profilePage/index.js";
import { ChangePassword } from "./pages/profilePage/modules/changePassword/index.js";
import { ChangeProfileInfo } from "./pages/profilePage/modules/changeProfileInfo/index.js";
import { Chat } from "./pages/chatPage/index.js";
import { ErrorPage } from "./pages/errorPage/index.js";
import "./style.scss";

const routes = {
  "/": LoginPage(),
  "/register": RegisterPage(),
  "/profile": ProfilePage(),
  "/change-password": ChangePassword(),
  "/change-user-info": ChangeProfileInfo(),
  "/chat": Chat(),
  "/404": ErrorPage({ error_code: "404", error_message: "Page Not Found" }),
  "/500": ErrorPage({ error_code: "500", error_message: "Fixing" }),
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  if (root) {
    root.innerHTML = routes[window.location.pathname];
  }
});
