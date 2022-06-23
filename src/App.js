import logo from "./logo.svg";
import "./App.css";
import Animals from "./components/Animals";
import { useState } from "react";

function App() {
  const [catsCount, setCatsCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [dogsCount, setDogsCount] = useState(0);

  // cats percent

  const dogsPercent = (
    catsCount>1 && dogsCount<1 ?
  0:dogsCount/totalCount) * 100 || (catsCount<1 ? 50 :0);


  const catsPercent = ((dogsPercent===100 && dogsCount>0?
  0:catsCount/totalCount) )
    * 100 || (dogsCount<1 ? 50 :0)
  return (
    <div className="background-container" style={{}}>
      {/* Absolute styled */}
      <div className="cats-indicator"
      style={{
        width:`${catsPercent}vw`,
      }}
      >

      </div>
      <div className="vote-count">
        <p>{totalCount} votes</p>
      </div>
      <div className="background" >
        {/* Passing the count props to the Animal Components */}
        <Animals
          catsPercent={catsPercent}
          dogsPercent={dogsPercent}
          setDogsCount={setDogsCount}
          setCatsCount={setCatsCount}
          setTotalCount={setTotalCount}
        />
      </div>
      {/* Absolute Vote count */}
     
    </div>
  );
}

export default App;
