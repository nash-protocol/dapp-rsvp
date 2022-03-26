import "./App.css";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { withAppBar } from "./hoc/withAppBar";
import RSVPEvent from "./apps/rsvp-event/App";
import RSVPAttendee from "./apps/rsvp-attendee/App";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RSVPEvent />} />
      <Route path="/event" element={<RSVPEvent />} />
      <Route path="/event/:eventId" element={<RSVPEvent />} />
      <Route path="/attend/:eventId" element={<RSVPAttendee />} />
      <Route path="/attend/:eventId/:attendId" element={<RSVPAttendee />} />
    </Routes>
  );
}

export default withAppBar(App);
