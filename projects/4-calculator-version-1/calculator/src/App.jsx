import styles from "./App.module.css";
import './App.css'

function App() {

  return  (<div className={styles.calculator}>
    <input type="text" className={styles.display} />
    <div id="buttons-container"></div>
    <button>C</button>
  </div>

  )
}

export default App
