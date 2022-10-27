import cssJs from "./components/js/css";
import Nav from "./components/navBar";
import InformationDiv from "./components/InformationDiv";

function App() {
  setTimeout(() => {
    cssJs();
  }, 10);

  return (
    <div className="App d-flx flx-y y-x-c w-100%">
      <Nav />
      <InformationDiv />
    </div>
  );
}

export default App;
