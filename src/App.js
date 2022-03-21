import "./App.css";
import {
  Route,
  Routes,
} from "react-router-dom";
import { withAppBar } from "./hoc/withAppBar";
import Lite from "./apps/lite/App";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Lite />} />
    </Routes>
  );
}

export default withAppBar(App);
