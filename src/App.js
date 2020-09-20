import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem.react";


  const data = {
    "userData":[
        {
            "first":"Anaiah", "last": "Little-Diop", 
            "movies":[
                "Star-Trek",
                "Finding Nemo",
                "Zodiac",
                "Iron Man 3",
                "Ender's Game",
                "World War Z",
                "The Secret Life Of Pets",
                "The Wind Rises",
                "The Warriors",
                "The Rescuers",
                "Speed",
                "Braveheart",
                "Top Gun",
                "The Lego Movie",
                "Branded",
                "Elysium",
                "Dredd",
                "The Road",
                "Sound City",
                "Antz"
            ]

        },
        {
            "first":"Liam", "last": "Chalk",
            "movies":[
                "Avatar",
                "Shrek",
                "Zodiac",
                "Iron Man 3",
                "Ender's Game",
                "Finding Nemo",
                "Palo Alto",
                "The Master",
                "C.L.I.T",
                "The Rescuers",
                "Star-Wars",
                "Finding Nemo",
                "Cloudy With a Chance Of Meatballs",
                "21 Jump Street",
                "Toys",
                "Branded",
                "Congo",
                "Enough Said",
                "Closed Curtain",
                "Outbreak"
            ]
        },
    
        {
            "first":"Hannah", "last": "Han",
            "movies":[
                "Star-Wars",
                "Finding Nemo",
                "The Arrival",
                "Gravity",
                "Inception",
                "Branded",
                "Robin Hood",
                "The Martian",
                "Chalk",
                "Heli",
                "Monsters University",
                "C.L.I.T",
                "Blackfish",
                "Closed Curtains",
                "Cheap Thrills", 
                "Antz",
                "The Motel Life",
                "Dredd",
                "The Road", 
                "Snowpiercer",
                "The Great Gatsby"
            ]
        },
    ]
}

const array1 =
[
  "Star-Trek",
  "Finding Nemo",
  "Zodiac",
  "Iron Man 3",
  "Ender's Game",
  "World War Z",
  "The Secret Life Of Pets",
  "The Wind Rises",
  "The Warriors",
  "The Rescuers",
  "Speed",
  "Braveheart",
  "Top Gun",
  "The Lego Movie",
  "Branded",
  "Elysium",
  "Dredd",
  "The Road",
  "Sound City",
  "Antz"
]

const array2 =
[
  "Avatar",
  "Shrek",
  "Zodiac",
  "Iron Man 3",
  "Ender's Game",
  "Finding Nemo",
  "Palo Alto",
  "The Master",
  "C.L.I.T",
  "The Rescuers",
  "Star-Wars",
  "Finding Nemo",
  "Cloudy With a Chance Of Meatballs",
  "21 Jump Street",
  "Toys",
  "Branded",
  "Congo",
  "Enough Said",
  "Closed Curtain",
  "Outbreak"
]


const commonArray = []; 
      // Loop for array1 
      for(let i = 0; i < array1.length; i++) { 
            
          // Loop for array2 
          for(let j = 0; j < array2.length; j++) { 
                
              // Compare the element of each and 
              // every element from both of the 
              // arrays 
              if(array1[i] === array2[j]) { 
                
                  // Return if common element found 
                  commonArray.push(commonArray[i]); 
              } 
          } 
      }

export default function App() {
  return (
    <div className="App">
      <h1>Netflix Oracle</h1>
      <h2>Liam's Favorite Movies</h2>
      <TodoItem title={"Star-Trek"} />
      <TodoItem title="The Adventures of Tintin" />
      <TodoItem title="Last Action Hero" />
      <TodoItem title="Thor" />
      <TodoItem title="The Lorax" />
    </div>
  );

return data
}