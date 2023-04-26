import "./style.css";
import { Universe } from "life-wasm";

const appElement = document.getElementById("app");
if (appElement === null) {
  throw new Error("failed to get app element");
}
const universe = Universe.new();

const renderLoop = () => {
  appElement.textContent = universe.render();
  universe.tick();

  requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
