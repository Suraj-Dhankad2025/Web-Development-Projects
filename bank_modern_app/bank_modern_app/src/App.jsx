// import React from 'react'
import styles from './style'
const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
     <div className={'${styles.paddingX} ${styles.flexCenter}'}></div>
     <div className={'${styles.boxWidth}'}>
      Navbar
     </div>
     <div className='bg-primary ${styles.flexStart}'></div>
     <div className={'${styles.boxWidth}'}>Hero</div>
    </div> 
  )


export default App
