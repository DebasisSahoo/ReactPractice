import logo from './logo.svg';
import './App.css';
import ParentClass from './context/classcomp/Parent';
import ParentClassWithHook from './context/functional/Parent';


import NameContext from './context/classcomp/ContextAPI'
import RefExample from './refs/RefExample';
import LastNameContext from './context/functional/ContextAPI'
import LazyLoadingExample from './lazyloading/LazyLoadingexample';
import SimpleComponent from './HOC/SimpleComponent';
import SetColorDemo from './HOC/SetColorDemo';

import Nav from './ReactRouter/Nav';
import About from './ReactRouter/About'
import Shop from './ReactRouter/Shop';
import PortalDemo from './portals/PortalDemo'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GetItem from './RestApiCalls/GetItem';
import GetItemInfo from './RestApiCalls/GetItemInfo';
import AppDragDropDemoEx from './DragDrop/DragDropTest';
import { useState } from 'react';


function App() {
  const [val, setval] = useState('');
  const [arr, setarr] = useState([]);

  const getTextValue =(e) => {
    console.log("value -> ", val);

    debugger;

    
      let arr1 = [val,...arr];
      setarr(arr1);
  }

  const getMyVal = () =>{
    debugger;
    const tt =
      !arr && arr.map(m => {
      return(
      <p>{m}</p>
      );
      
    });

    return tt;
    

  } 
  debugger;
  const arrVal = arr;
  return (
    <div className="App">
      {/* <div>
        <p>Welcome to react</p>
        <NameContext.Provider value={"sachin"}>
          <ParentClass />
        </NameContext.Provider>
        
          <RefExample />
          <LastNameContext.Provider value={"sacgdfghin"}>
            <ParentClassWithHook />
          </LastNameContext.Provider>
          <LazyLoadingExample />

          {/* Example below is for HOC 
          <SetColorDemo />
          <Nav />
          <About />
          <Shop />
          <PortalDemo />
      </div> */}
      <div id="other-div">
      <p>Welcome to react</p>
        {/* <Router>
            <Switch>
                <Route exact path="/" component ={GetItem}/>
                <Route path="/get/:id" component ={GetItemInfo}/>

            </Switch>
        </Router> */}
          {/* <GetItem /> */}

          <input type="text" id="text" onChange={(e) => setval(e.target.value)}/>
          <button onClick={getTextValue}>click me</button>
          <div id="container" style={{width:200, height:200, border: "1px solid red", marginLeft:20}}>
            {/* {getMyVal} */}
            {/* <div>{!arrVal && arrVal.map(m => {
              debugger;
              return(<div><p>{m}<br/></p></div>)
            })}</div> */}

            {arrVal == null || arrVal != undefined || arrVal != '' ? 
            arrVal.map(a => {return(<p>{a}</p>)})
            :""}
          </div>
      </div>
      {/* <AppDragDropDemoEx /> */}
    </div>
    
  );
}

export default App;
