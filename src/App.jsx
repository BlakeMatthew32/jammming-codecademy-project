import reactLogo from './assets/react.svg'
import './App.css'

import Header from './components/Header'
import SearchBar from './components/SearchBar'


function App() {

  return (
    <>
      <Header />
      <SearchBar />
      <h1>Jammming project setup</h1>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </>
  )
}

export default App
