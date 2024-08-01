import Display from './component/display'
import styles from './app.module.css'
export function App() {
  const Calculates=["c","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
  return (
    <div className={styles.calculator}>
   <Display></Display>
      <div className={styles.buttons}>
      {Calculates.forEach((calu)=>(<button className={styles.button}>{calu}</button>))}
      </div>
    </div>
  )
}
