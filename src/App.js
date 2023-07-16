import React, { useContext } from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
export const UseContext=React.createContext()
export const ChannelContext=React.createContext()


function App() {
  return (
    <div className="App">

      <UseContext.Provider value={'vishwas'}>
        <ChannelContext.Provider value={'codeevolution'}>
          <ComponentC/>
          </ChannelContext.Provider>
        </UseContext.Provider>
    </div>
  );
}

export default App;
