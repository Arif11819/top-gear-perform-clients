import AOS from "aos";
import "aos/dist/aos.css";
import CountDown from "./components/CountDown/CountDown";
import DashbroadRoute from "./components/DashbroadRoute/DashbroadRoute";
import Features from "./components/Feature copy/Features/Features";
import Team from "./components/Team/Team";

AOS.init();
function App() {
  const TWENTY_DAYS_IN_MS = 190 * 9 * 17 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterTwentyDays = NOW_IN_MS + TWENTY_DAYS_IN_MS;
  return (
    <div>
      <Features></Features>
      <CountDown targetDate={dateTimeAfterTwentyDays}></CountDown>
      <Team></Team>
      <DashbroadRoute></DashbroadRoute>
    </div>
  );
}

export default App;
