import Slider from "./components/BottomSlider/Slider";
import Carousal from "./components/Carousal/Carousal";
import Navbar from "./components/Nabar/Navbar";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousal />
      <Product />
      <Slider />
    </div>
  );
}

export default App;
