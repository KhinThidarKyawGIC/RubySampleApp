import {useState,useEffect,useReducer} from 'react';
import './index.css';
import Context from './Context';
import Form from './Form';
import List from './List';

//useState
// function App(){
//     const [count, setCount] = useState(0);
//     // const arr = [1,2,3,4,5];

//     // const [one, two, three, four, five] = arr; //Array Destructuring
//     // console.log(one);

//     function increase(){
//         // setCount(count+1);
//         setCount((preValue) => preValue + 1);
//         setCount((preValue) => preValue + 1);

//     }

//     return (
//       <div>
//         <h1>{count}</h1>
//         <button onClick={increase} style= {{ padding: "0.5rem" }}>+</button>
//       </div>
//     );
    
//   }

//useEffect
// function App(){
//     const [value, setValue] = useState(0);

//     useEffect(() => {
//         console.log('Use effect is rendered');
//     },[value]);

//     console.log("Component is rendered");

//     return (
//         <div>
//             <h1>{value}</h1>
//             <button onClick={() => setValue(value + 1)}>Click!</button>
//         </div>
//     )
// }

// function App(){
//     const [size,setSize] = useState(window.innerWidth);

//     function checkSize(){
//         setSize(window.innerWidth);
//     }

//     useEffect(() =>{
//         console.log("Use Effect is rendered");
//         window.addEventListener("resize",checkSize);

//         return ()=>{
//             console.log("remove event listner");
//             window.removeEventListener("resize",checkSize);
//         };
//     });

//     console.log("Component is rendered");

//     return (
//         <div>
//             <h1>{size} Px</h1>

//         </div>
//     )
// }

//Fetch Data from Github
// const url = "https://api.github.com/users";

// function App(){
//     const [users, setUsers] = useState([]);
//     const [isLoading,setIsLoading] = useState(true);
//     const [isError,setIsError] = useState(false);

//     async function getUsers(){
//         const response = await fetch(url);
//         const users = await response.json();

//         if(response.status > 300){
//             setIsError(true);
//             setIsLoading(false);
//         }
//         setUsers(users);
//         setIsLoading(false);
//         console.log(users);
//     }

//     useEffect(() => {
//         getUsers();
//     },[]);

//     console.log("Component is rendered");
//     if(isLoading){
//         return <h1>Loading..........</h1>
//     }

//     if(isError)
//     {
//         return <h1>Opps Error...</h1>
//     }

//     return (
//         <div className='container'>
//             <h1>Github Users</h1>
//             <ul>
//                 {users.map((user) => {
//                     return (
//                         <li key={user.id}>
//                             <img src = {user.avatar_url} alt={user.login}/>
//                             <div>
//                                 <h4>{user.login}</h4>
//                                 <a href={user.html_url}>Profile</a>
//                             </div>
                            
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     )
// }

//useReducer
// const initialValue = {
//     people: [],
// }

// function reducer(state,action){
//     if(action.type === 'INPUT_ADDED'){
//         const newPeople = [...state.people, action.payload];

//         return {...state, people: newPeople};
//     }
// }

// function App(){
//     const [inputValue, setInputValue] = useState("");

//     const [state, dispatch] = useReducer(reducer, initialValue);

//     // console.log(state);  //initialValue
//     function submitHandler(e){
//         e.preventDefault();

//         const newItem = { id: Math.random().toString(), name: inputValue};
//         dispatch({ type: "INPUT_ADDED", payload: newItem});
//         setInputValue("");
//     }

//     // console.log(state);

//     return (
//         <div>
//             <h1>Form</h1>
//             {/* <button onClick={() => setCount((prev) => prev + 1)}>+</button> */}
//             {/* <button onClick={() => dispatch({ type: "increment", payload: 1})}>+</button> */}
//             <form onSubmit={submitHandler}>
//                 <input type="text" 
//                        value={inputValue}
//                        onChange={(e) =>setInputValue(e.target.value)}
//                        placeholder='Enter your text'/>
//                 <button type="submit">Submit</button>
//             </form>

//             <ul>
//                 {state.people.map((person) =>{
//                     return <li key={person.id}>{person.name}</li>
//                 })}
//             </ul>
//         </div>
//     );
// }

//props drilling
function App(){
    return (
        <Context.Provider value="Hello World">
            Context Api
            <Form/>
            <List/>
        </Context.Provider>

    );
}
export default App;