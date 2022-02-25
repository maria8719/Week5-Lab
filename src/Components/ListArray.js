import React from "react";


export default function ListArray() {

  const data = ["Spaghetti", "Ice cream", "Sushi","Bologna","Cheese"];

  return (
    <ul>
    {
      data.map((items) => {
        return(
       <li>{items}</li>
      )  })
    }
    </ul>
        )

     }


     