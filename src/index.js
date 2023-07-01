import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
// import {cards} from './cards';
// import Card from './Card';
// import {data, fruit} from './data';
import App from './App';

//JSX
// function Greeting(){
//   return (
//     <div>
//       <h1>Hello World</h1> 
//       <p>This is paragraph</p>
//       <button className='btn'>Click Me</button>
//     </div>
//   );
  
// }

// function Greeting(){
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1",{},"Hello World")
//   );
// }
// ReactDOM.render(<Greeting/>,document.getElementById('root'));

// function CardList(){
//   console.log(data);
//   return (
//     <main className='card-list'>
//       {cards.map((card) => {
//         return <Card key={card.id} {...card} />;
      
//       })}
//     </main>
//   );
// }

 // const title = "Card Title"

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<CardList/>);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);