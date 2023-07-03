import React from "react";
import style from "./login.module.css";
import Link from "next/link";
import Image from "next/image";
import gymImage from "../../public/gym1.gif";

export default function Login() {
  return (
    <div className={style.loginPage}>
      <div className={style.loginImage}>
        <Image src={gymImage} alt="gymImage" className={style.image}/>
      </div>
      <div>
        <form className={style.loginForm}>
          <div className={style.credential}>
            <label>Email Id:</label>
            <input type="email" name="email" placeholder="Your email" />
          </div>
          <div className={style.credential}>
            <label>Password:</label>
            <input type="password" name="password" placeholder="password" />
          </div>
          <div className={style.credential}>
            <input type="submit" value="Login" />
          </div>
          <div className={style.credential}>
            <p>Don't have account? <span><Link href="/register">Register with us</Link></span></p>
          </div>
        </form>
      </div>
    </div>
  );
}
