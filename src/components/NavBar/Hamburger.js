import React from 'react'

function Hamburger({handleNavClick, color}) {
    const styles = {
    container:{
        position: 'fixed',
        left: '0',
        right: '0',
        background: 'none',
        margin: '20px',
        outline: '0',
        border: 'none',
        zIndex: '1',
        transition: 'all 500ms ease',
        height: '20px',
    },
    lines:{
        height: '2px',
        width: '20px',
        margin: '4px 0',
        backgroundColor: color,
        display: 'block',
        transition: 'all 500ms ease',
        boarderRadius: '10px',
    }
}


    return (
    <div style={styles.container} onClick={handleNavClick}>
      <span style={styles.lines}/>
      <span style={styles.lines}/>
      <span style={styles.lines}/>
    </div>
    )
}



export default Hamburger
