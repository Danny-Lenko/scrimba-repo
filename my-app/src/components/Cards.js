import React from "react";

export default function Cards() {
   return(
      <div className="card">
         <img className="card__img" src="https://source.unsplash.com/WLxQvbMyfas" alt="" />
         <div className="card__content">
            <p className="card__map-data">
               <span className="card__country"><i className="fa-solid fa-location-dot"></i>Japan</span>
               <span className="card__coordinates"><a href="#">View on Google Maps</a></span>
            </p>
            <h2 className="card__h2">Mount Fuji</h2>
            <h4 className="card__dates">12 Jan, 2021 - 24 Jan, 2021</h4>
            <p className="card__description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
         </div>
      </div>
   )
}