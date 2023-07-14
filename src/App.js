import "./App.css";
import NavBar from "./NavBar.js";
import Hero from "./Hero.js";
import Lower from "./Lower.js";
import { arr } from "./data.js";
import "./Lower.css";
function App() {
  const array = arr.map((item) => {
    return (
      <Lower
        image1={item.image1}
        text0={item.text0}
        text1={item.text1}
        text2={item.text2}
        parag1={item.parag1}
        parag2={item.parag2}
      />
    );
  });
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="lowerdiv2">{array}</div>
    </div>
  );
}

export default App;
