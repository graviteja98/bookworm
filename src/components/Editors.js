import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import PageLoader from './PageLoader';
import UnderConstructionPage from './underConstrunction';
function Editors() {
    useEffect(()=>{
        setTimeout(()=>{
          setDisp(true)
        },6000)
      })
    const [disp,setDisp] = useState(false)
  return (
    disp ?  <motion.div><UnderConstructionPage/></motion.div> : <PageLoader title={'Editors Choice'}/>
  )
}

export default Editors