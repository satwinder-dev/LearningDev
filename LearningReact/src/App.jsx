import OnChange from "./components/OnChange";
import { Onclick } from "./components/Onclick";
import Props from "./components/Props";
import Toggle from "./components/Toggle";
import UseState from "./components/UseState";
import Wrapper from "./components/Wrapper";

function App() {
//   const name = "peter";
//   let path =
// "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/10/1/HBFB1406_180126_dog-on-rug_041.jpg.rend.hgtvcom.616.822.suffix/1523383802334.jpeg";

  const userData =
  
  [
    {
      name: "Satwinder",
      tech: "react",
      uni:"CU"
    },
    {
      name: "Sheru",
      tech: "react Native",
      uni:"PU"
    },
    {
      name: "Ryan",
      tech: "Angular",
      uni:"IIT"
    },
    
  
  ]

  return (
    <div>
      {/* <input type="text" value={name} id={name} />
      <br />
      <img src={path} /> */}

      <div>
        <h3>React js click event and function call</h3>
        <Onclick/>
      </div>

      <div>
        <h3>State in react JS</h3>
        <UseState/>
      </div>
      
      <div>
        <h3>Toggler</h3>
        <Toggle/>
      </div>


      <div>
        <h3>Props in React JS | Pass data between component</h3>
        <Props user={userData[0]}/>
        <hr />
        <Props user={userData[1]}/>
        <hr />
        <Props user={userData[2]}/>
        <hr />
        
      </div>


      <div>
        <h3>Pass JSX with Props </h3>

        <Wrapper color='orange'>
          {"Satwinder Singh"}
        </Wrapper>
        <Wrapper>
          {"Satwinder Singh"}
        </Wrapper>
        <Wrapper color='red'>
          {"Satwinder Singh"}
        </Wrapper>
        <Wrapper color=''>
          {"Satwinder Singh"}
        </Wrapper>
        
      </div>


      <div>
        <h3>Get Input Field Value On change event</h3>
        <OnChange/>
      </div>

      {/* Controlled Component */}
    </div>
    
  );
}
export default App