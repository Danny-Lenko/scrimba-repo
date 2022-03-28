import React from "react";

export default function Info() {
   return(
      <header>
         {/* <img src="" alt="" /> */}
         <h1 className="header__h1">Laura Smith</h1>
         <h3 className="header__h3">Frontend Developer</h3>
         <p className="header__site">laurasmith.website</p>
         <a href="mailto:laura@smith.dev" className="header__e-mail">Email</a>
      </header>
   )
}
