import "./App.css";
import { UserInput } from "./components/userInput/UserInput";
import { Goals } from "./features/goals/Goals";
import { Quote } from "./features/quote/Quote";
import { Weather } from "./features/weather/Weather";
import background from "./yosemite.jpeg";

export const App = () => {
  return (
    <div className="App">
      <div className="Backdrop"></div>
      <img id="background" src={background} />
      <Weather />
      <UserInput />
      <Goals />
      <Quote />
    </div>
  );
};
