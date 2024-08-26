import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1 className="text-red-700">Salom hammaga</h1>
      <Button variant={"jaloliddin"}>Submit</Button>
      <Button variant={"destructive"}>Register Now</Button>
    </>
  );
}

export default App;
