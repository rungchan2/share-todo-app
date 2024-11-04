import { appContainer, board, button } from './App.css.ts'

function App() {

  return (
    <>
      <div className={appContainer}>
        <div className={board}>
          <h1>Hello World</h1>
          <button className={button}>Click me</button>
        </div>
      </div>
    </>
  )
}

export default App
