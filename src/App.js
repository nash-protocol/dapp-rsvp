import "./App.css";
import {
  Route,
  Routes,
} from "react-router-dom";
import { withAppBar } from "./hoc/withAppBar";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default withAppBar(App);
