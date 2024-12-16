import "./App.css";
import DefaultNav from "./components/NavBar/DefaultNav";
import StickyNav from "./components/NavBar/StickyNav";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <p className="text-3xl">React Mock App</p>
      </div>
      <DefaultNav />
      <StickyNav />
    </>
  );
}

export default App;
