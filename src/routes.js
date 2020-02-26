import GamePlay from "./components/GamePlay.vue";
import GameMenu from "./components/GameMenu.vue";

const routes = [
  { path: "/", component: GameMenu, name: "Menu" },
  { path: "/game", component: GamePlay, name: "Game" }
];

export default routes;
