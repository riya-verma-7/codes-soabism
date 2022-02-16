import React from 'react'


const loader={
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    background:'#fccc04'
}
const Spinner = () => <>

<div style={loader}>

{/* <img src="https://i.postimg.cc/PJrh3HDN/spinner.gif" alt="Loading..."  /> */}
<img src="https://i.postimg.cc/Qt06vrPk/loader-1.gif" alt="Loading..."  />

</div>

</>
  

export default Spinner ; 

