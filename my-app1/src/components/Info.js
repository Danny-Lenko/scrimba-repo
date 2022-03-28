import React from "react";
import profileImg from "../images/profile-img.png"

export default function Info() {
   return(
      <header>
         <img className="header__img" src={profileImg} alt="" />
         <section className="header__content">
            <h1 className="header__h1">Laura Smith</h1>
            <h3 className="header__h3">Frontend Developer</h3>
            <p className="header__site">laurasmith.website</p>
            <div className="header__btns-container">
               <a href="mailto:laura@smith.dev" className="header__e-mail"><i className="fa-solid fa-envelope"></i>Email</a>
               <a href="" className="header__linked"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
         </section>
      </header>
   )
}
