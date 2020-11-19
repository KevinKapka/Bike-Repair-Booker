import React, {useState} from 'react'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import logo from '../../svgs/logo.svg';
import { Link } from "react-router-dom";



import Hamburger from './Hamburger'

function LeftDrawer() {
    const [open, isOpen] = useState(false)
    return (
        <div>
        <div onClick={()=> isOpen(true)}>
            {!open? <Hamburger/>: null}
        </div>
        <SlidingPane
        isOpen={open}
        from="left"
        width="200px"
        hideHeader={true}
        onRequestClose={() => isOpen(false)}
      >
        <img src={logo} alt="site logo. Houston CycleFix" className='logo' />
        <ul style={styles.listContainer}>
            <li style={styles.listItem} onClick={()=> isOpen(false)}>
            <Link style={styles.link} to="/booking">Book Now</Link>
            </li>
            <li style={styles.listItem} onClick={()=> isOpen(false)}>
            <Link style={styles.link} to="/services">Services</Link>
            </li >
            <li style={styles.listItem} onClick={()=> isOpen(false)}>
            <Link style={styles.link} to="/about">Meet CycleFix</Link>
            </li>
            <li style={styles.listItem} onClick={()=> isOpen(false)}>
            <Link style={styles.link} to="/contact">Contact Us</Link>
            </li>
            <li style={styles.listItem} onClick={()=> isOpen(false)}>
            <Link  style={styles.link} to="/covid19">COVID-19</Link>
            </li>
        </ul>
      </SlidingPane>
        </div>
    )
}

const styles = {
    listContainer: {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        margin: '0',
        padding: '0',
        paddingLeft: '20px'
    },
    listItem: {
        paddingTop: '20px'
    },
    link: {
        color: 'black',
        

    }

}

export default LeftDrawer
