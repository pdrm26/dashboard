import "./index.css"
import "bootstrap/dist/js/bootstrap.min.js";

import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
