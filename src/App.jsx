import { createContext,useState } from 'react';
import './App.css'
import Main from './components/Main/Main';
import Toggle from './components/Toggle/Toggle';

export const ThemeContext=createContext(null)
function App() {

  const[theme,setTheme]=useState('light')

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <main className={theme +"main"}>
        <Toggle></Toggle>
        <Main></Main> 
        </main>
        
      </ThemeContext.Provider>
     
    </>
  )
}

export default App
