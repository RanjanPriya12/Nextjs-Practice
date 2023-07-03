import React from "react";
import style from "../login/login.module.css";
import Link from "next/link";
import Image from "next/image";
import gymImage from "../../public/gym1.gif";

export default function Register() {
  return (
    <div className={style.loginPage}>
      <div className={style.loginImage}>
        <Image src={gymImage} alt="gymImage" className={style.image}/>
      </div>
      <div>
        <form className={style.loginForm}>
        <div className={style.credential}>
            <label>First Name:</label>
            <input type="text" name="first_name" placeholder="Your first name is" />
          </div>
          <div className={style.credential}>
            <label>Last Name:</label>
            <input type="text" name="last_name" placeholder="Your last name is" />
          </div>
          <div className={style.credential}>
            <label>Email Id:</label>
            <input type="email" name="email" placeholder="Your email is" />
          </div>
          <div className={style.credential}>
            <label>Password:</label>
            <input type="password" name="password" placeholder="password" />
          </div>
          <div className={style.credential}>
            <input type="submit" value="Register" />
          </div>
          <div className={style.credential}>
            <p>Already have an account? <span><Link href="/login">Login with us</Link></span></p>
          </div>
        </form>
      </div>
    </div>
  );
}
