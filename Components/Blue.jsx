import React from 'react'
import styles from '../styles/Home.module.css'
import overlays from '../styles/Overlays.module.css'

const Blue = ({children,boxShadowNone,topLess}) => {
  return (
    <section className={`relative    ${styles.blueBack}`}>
         <span className={`absolute   ${overlays.heroBottom} `}>
                
                </span>
        <div className={` relative  overflow-visible  ${topLess? "-top-14":"-top-28"}   ${boxShadowNone} ${styles.whiteCard}`}>
         {children}
        </div> 
    </section>
  )
}

export default Blue