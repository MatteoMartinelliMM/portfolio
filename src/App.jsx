import cele from './assets/prova.jpg'
import './App.css'

function App() {

    return (
        <>
            {/*
          <div>
              <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs text-4xl">
              Click on the Vite and React logos to learn more
          </p>
          <button className="btn btn-secondary">Button</button>
*/}
            <div className="container mx-auto glass rounded">
                <img src={cele} width={300} className=""/>
                <p className="mt-4 text-primary text-6xl">Ciao mi chiamo celeste e sono una cogliona</p>
                <button className="btn btn-primary">Click</button>
            </div>

        </>
    )
}

export default App
