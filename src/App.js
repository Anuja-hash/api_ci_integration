import * as React from "react"
// import './App.css';
import Home from './Home'
import Product from './Product'
import {useRef} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Edit from './Edit'
function App() {
  const refname=useRef(null);
  const [toggle,setToggle]=React.useState(true)
  function onSubmit()
  {
    setToggle(!toggle)
    refname.current.value="some vaue";
    console.warn(refname)
  }
  return (
    <React.Fragment> 
      <Router>
      {/* <Edit /> */}
      {/* <Home/>  */}
<Route path="/home">
  <Home/></Route>
      <Route path={"/edit/:id"}>
        <h1>Edit</h1>
    <Edit />
  </Route>
      </Router>
  
         
  </React.Fragment>
// {/* <div>

// <input ref={refname} type="text" name="Lastname" /><br/><br/>
// {toggle?<h1>Toggle Me</h1>:null}
//  <button type="button" onClick={onSubmit}>Submit</button>
// </div> */}
  );
}

export default App;
