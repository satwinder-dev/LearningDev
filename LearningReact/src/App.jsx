import { useState } from "react";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import OnChange from "./components/OnChange";
import { Onclick } from "./components/Onclick";
import Props from "./components/Props";
import Toggle from "./components/Toggle";
import UseEffect from "./components/UseEffect";
import UseState from "./components/UseState";
import Wrapper from "./components/Wrapper";
import ConditionalStyling from "./components/ConditionalStyling";
import UseRef from "./components/UseRef";
import { ContextApi } from "./components/ContextApi/ContextApi";
import { SubjectContext } from "./components/ContextApi/ContextData";
import { Link, Navigate, Route, Routes } from "react-router";

function App() {
  //   const name = "peter";
  //   let path =
  // "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/10/1/HBFB1406_180126_dog-on-rug_041.jpg.rend.hgtvcom.616.822.suffix/1523383802334.jpeg";

  const [count, setCount] = useState(0);
  const [subject, setSubject] = useState("");
  // const [data, setData] = useState(0)

  const userData = [
    {
      name: "Satwinder",
      tech: "react",
      uni: "CU",
    },
    {
      name: "Sheru",
      tech: "react Native",
      uni: "PU",
    },
    {
      name: "Ryan",
      tech: "Angular",
      uni: "IIT",
    },
  ];

  return (
    <div>
      <div className="min-h-screen p-4">
        <h1 className="text-2xl pb-4">React Router</h1>

        <div className="flex gap-4 rounded-full bg-red-200 p-2 w-fit">
          <Link className="focus:bg-white rounded-full py-2 px-4" to="/conditionalstyling">Conditional Styling</Link>
          <Link className="focus:bg-white rounded-full py-2 px-4" to="/useref">Use Ref</Link>
          <Link className="focus:bg-white rounded-full py-2 px-4" to="/clock">Clock</Link>
        </div>
        
      <div className="py-4 border mt-5 rounded-2xl px-4">
          <Routes>
            <Route
              element={<ConditionalStyling />}
              path="/conditionalstyling"
              />
            <Route element={<UseRef />} path="/useref" />
            <Route element={<ContextApi />} path="/contextapi" />
            <Route element={<Clock />} path="/clock" />
            <Route element={<img className="" src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png"/> } path="/*" />

            {/* Redirectoin */}
            {/* <Route element={<Navigate to='/clock'/>} path="/*"/> */}
          </Routes>
        </div>
      {/* <input type="text" value={name} id={name} />
      <br />
      <img src={path} /> */}

      </div>
      <div>
        <h3>React js click event and function call</h3>
        <Onclick />
      </div>

      <div>
        <h3>State in react JS</h3>
        <UseState />
      </div>

      <div>
        <h3>Toggler</h3>
        <Toggle />
      </div>

      <div>
        <h3>Props in React JS | Pass data between component</h3>
        <Props user={userData[0]} />
        <hr />
        <Props user={userData[1]} />
        <hr />
        <Props user={userData[2]} />
        <hr />
      </div>

      <div>
        <h3>Pass JSX with Props </h3>

        <Wrapper color="orange">{"Satwinder Singh"}</Wrapper>
        <Wrapper>{"Satwinder Singh"}</Wrapper>
        <Wrapper color="red">{"Satwinder Singh"}</Wrapper>
        <Wrapper color="">{"Satwinder Singh"}</Wrapper>
      </div>
      <div>
        <h3>Get Input Field Value On change event</h3>
        <OnChange />
      </div>

      {/* Controlled Component */}

      <div>
        <h1>Clock</h1>
        <Clock />
      </div>

      <div>
        <UseEffect />
      </div>

      <div className="my-4">
        <h1>Handle Props Side Effect with useEffect in component</h1>

        <Counter counts={count} />
        <button onClick={() => setCount(count + 1)}>Counter</button>
        {/* <button onClick={()=>setData(data+1)}>Counter</button> */}
      </div>
      <div className="p-4 bg-red-50">
        <SubjectContext.Provider value={subject}>
          <select
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="border py-1 px-2 mb-4"
          >
            <option value={""}>Select</option>
            <option value={"Maths"}>Maths</option>
            <option value={"English"}>English</option>
            <option value={"Science"}>Science</option>
            <option value={"Physics"}>Physics</option>
          </select>
          <button
            className="border py-1 px-3 mx-2 cursor-pointer"
            onClick={() => setSubject("")}
          >
            Clear
          </button>
          <div className="p-4 m-4 bg-red-100">
            <p className="text-2xl">USE Context Hook</p>
            <ContextApi />
          </div>
        </SubjectContext.Provider>
      </div>

      
    </div>
  );
}
export default App;
