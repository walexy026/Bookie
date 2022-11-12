import React from "react";
import styles from "./ForgetPassword.module.css";
import logo from "../../Assets/bookieLogo.svg";
import {BiShow} from 'react-icons/bi'

const ForgetPassword = () => {
  return (
    <div className={styles.ForgetPassword}>
      <span className={styles.FPtitle}>
        <img src={logo} alt="logo" />
        <h2>Bookie</h2>
      </span>
      <h3>Forget Password</h3>
      <form className={styles.formFP} action="">
        <label htmlFor="Phone Number ">Phone Number </label>
        <input type="tel" name="" id="" placeholder="Enter phone Number" />
        <label htmlFor="Enter Verification  code ">
          Enter Verification code{" "}
        </label>
        <input type="text" placeholder="2359" />
        <label htmlFor="Enter New Password">Enter New Password</label>
        <input type="password" name="" id="" placeholder="****************" />
        <BiShow/>
        <button>Login</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
