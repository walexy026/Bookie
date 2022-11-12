import React from 'react'
import styles from './OurServices.module.css'
import serviceSaveImg from '../../Assets/serviceSaveImg.svg'
import serviceBuyBooksimg from '../../Assets/serviceBuyBooksimg.svg'
import Btn from '../Btn/Btn'
import {BsChevronRight} from 'react-icons/bs'


const OurServices = () => {
  return (
    <div className={styles.OurServices}>
        <h2>Benefits of Using Our Services</h2>
        <div className={styles.saveMoney}>
            <div><img src={serviceSaveImg} alt="serviceSaveImg" style={{width:'100%', height:'auto'}} /> </div>
            <div className={styles.saveDetails}>
                <h3>Save Money </h3>
                <p>You can have a  saving wallets with Bookie</p>
                <Btn desc='Learn More '  icons={<BsChevronRight/>} className={styles.btn}/>
                
            </div>
        </div>
        <div className={styles.buyBooks}>
            <div className={styles.buyDetails}>
                <h3>Buy Books</h3>
                <p>You can buy books on Bookie and have an easy access </p>
                <Btn desc='Learn More '  icons={<BsChevronRight/>} className={styles.btn} />

            </div>
            <div>
                <img src={serviceBuyBooksimg} alt="serviceBuyBooksimg" style={{width:'100%', height:'auto'}} />
            </div>
        </div>
    </div>
  )
}

export default OurServices