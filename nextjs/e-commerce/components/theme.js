import React,{useState} from "react";

import styles from '../styles/theme.module.css';
const styl = {
  color:'black',
  backgroundColor:'white'
}
// const [myState, setState] = useState(styl);
// const [btnText, setbtnText] = useState("Dark Mode");
const dark = () => { 
    if(myState.color=='white'){
      setState({
        color:'black',
        backgroundColor:'white'
      })
      setbtnText("Light Mode");
    }
    else{
      setState({
        color:'white',
        backgroundColor:'black'
      })
      setbtnText("Dark Mode");
    }
}

const theme = () => {
  return (
    <div>
    <button className={styles.btn} onClick={dark}>{btnText}</button>
    </div>
  )
}

export default theme;