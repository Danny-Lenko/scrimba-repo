import React from "react";

export default function Cards(props) {
   return(
      <div className="card">
         <img className="card__img" src={props.item.imageUrl} alt="" />
         <div className="card__content">
            <p className="card__map-data">
               <span className="card__country"><i className="fa-solid fa-location-dot"></i>{props.item.location}</span>
               <span className="card__coordinates"><a href="#">View on Google Maps</a></span>
            </p>
            <h2 className="card__h2">{props.item.title}</h2>
            <h4 className="card__dates">{props.item.startDate} - {props.item.endDate}</h4>
            <p className="card__description">{props.item.description}</p>
         </div>
      </div>
   )
}