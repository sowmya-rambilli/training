// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//!props

// import React, { Component } from 'react'
// import CBCPropEx1 from './propexample/CBCPropEx1'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App

//         <CBCPropEx1
//         username="sowmya"
//         age={20}
//         hobbies={["playing","cooking"]}
//         address={{city:"hyd" , area:"Hitech"}}
//         isMarried={false}
//         sendFun={function(){alert("hi")}}
//         />

//       </div>
//     )
//   }
// }

// !Props.children
// import React from 'react'
// import PropsChildrenex from './propexample/PropsChildrenex'
// import SubChildProps from './propexample/SubChildProps'

// const App = () => {
//   return (
//     <div>
//       <PropsChildrenex username="sowmya" company="Meta">
//         <h1>This data is passing as a props children to child Component</h1>
//         <SubChildProps/>
//       </PropsChildrenex>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Child1 from './propexample/Child1'
const App = () => {
  return (
    <div>App</div>
  )
}

export default App