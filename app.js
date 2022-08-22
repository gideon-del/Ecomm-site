// "use strict";
import CategoryScreen from "./Screens/Category.js";
import { Error } from "./Screens/Error404.js";
import HomeScreen from "./Screens/HomeScreen.js";
import { parseRequestUrl } from "./src/util.js";

let main = document.querySelector("main");
const routes = {
  "/": HomeScreen,
  "/category": CategoryScreen,
};
const router = () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : `/`) +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");

  const main = document.querySelector("main");
  console.log(parseUrl);
  const screen = routes[parseUrl] ? routes[parseUrl] : Error;
  main.innerHTML = screen.render();
};
// main.insertAdjacentHTML("afterbegin", HomeScreen.render());
console.log(HomeScreen.render());

window.addEventListener("hashchange", router);
console.log(document.location.hash);
