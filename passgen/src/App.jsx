import { useState } from "react";
import passgen from "./passgen";
import "./App.css";

function App() {
  const {password,errormessage,generatepass} = passgen()
  const [ln, setLn] = useState(4);
  const [checkboxdata, setCheckboxdata] = useState([
    {  tittle: "Include uppercase letters", state: false },
    {  tittle: "Include Lowercase letters", state: false },
    {
      
      tittle: "Include Numbers",
      state: false,
    },
    {
      
      tittle: "Include Symbols",
      state: false,
    },
  ]);
  const handlecheckboxchange = (i) => {
    const updated = [ ...checkboxdata] ;
    updated[i].state = !updated[i].state;
    setCheckboxdata(updated);
  };
  const handlecopy= ()=>{
    navigator.clipboard.writeText(password);
  }
  return (
    <>
      <div className="container">
        {password && <div className="header">
          <div className="tittle">{password}</div>
          <button className="copybtn" onClick={handlecopy}>copy</button>
        </div>}
        <div className="charln">
          <span>
            <label>Char length</label>
            <label>{ln}</label>
          </span>

          <input
            type="range"
            min="4"
            max="12"
            value={ln}
            onChange={(e) => setLn(e.target.value)}
          />
        </div>

        <div className="checkboxes">
          {checkboxdata.map((data, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"

                  onChange={() => handlecheckboxchange(index)}
                  checked={data.state}
                />
                <label>{data.tittle}</label>
              </div>
            );
          })}
        </div>
        <div className="generatebtn">
          <button onClick={()=>generatepass(checkboxdata,ln)}>Generate</button>
        </div>
      </div>
    </>
  );
}

export default App;
