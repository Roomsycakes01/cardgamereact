import { render } from "react-dom";
import ProjectRoutes from "./dependencies/routes";

const rootElement = document.getElementById("root");
const routes = ProjectRoutes();
render(
    routes,
    rootElement
);

