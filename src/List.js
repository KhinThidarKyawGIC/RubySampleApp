import {useContext} from "react";
import Context from './Context';
function List(){
    const value = useContext(Context);
    console.log(value);
    return (
        <div>
            <ul>
                <li>
                    Buy food
                </li>
            </ul>
        </div>
    );
}

export default List;