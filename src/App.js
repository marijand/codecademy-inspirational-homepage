import "./App.css";
import { UserInput } from "./components/userInput/UserInput";
import { Weather } from "./features/weather/Weather";
import background from "./yosemite.jpeg";

export const App = () => {
  return (
    <div className="Wrapper">
      <img
        style={{
          position: "absolute",
          zIndex: "-1",
          width: "100%",
          filter: "blur(10px)",
          objectFit: "contain",
        }}
        src={background}
      />
      <Weather />
      <UserInput />
      {/* Goals */}
      {/* Quote */}
    </div>
  );
};
