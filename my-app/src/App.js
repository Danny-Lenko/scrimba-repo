import React from "react"
import Header from "./components/Header"
import Cards from "./components/Cards"
import data from "./data"

export default function App() {

   const cards = data.map((item, index) => {
      return (
         <Cards
            key={index}
            item={item}
         />
      )
   })

   return(
      <div className="container">
         <Header />
         {cards}
      </div>
   )
}