import React, { useReducer } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
export const CounterContex =React.createContext()
const initialState=0
const reducer=(state,action)=>{
  switch(action){
    case 'increment':
      return state+1;
    case 'decrement':
      return state-1;
    case 'reset':
      return initialState
  }
}

function App() {
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
   <CounterContex.Provider value={{countState:count,countDispatch:dispatch}}>
      <div className="App">
        count -{count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
  
      </div>
   </CounterContex.Provider>
  );
}

export default App;
