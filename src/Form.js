import { useContext } from "react";
import Context from "./Context";

function Form(){
    const value = useContext(Context)
    // console.log(value);
    return <div>
        <form>
            <input type="text"/>
            <button type="submit">Submit</button>
        </form>
    </div>
}
export default Form;