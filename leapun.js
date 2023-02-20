// Uncontrolled component example
import { useRef, useState } from "react"

function Leapun(){
    const y = useRef('');
    const[a, setA] = useState(0);
    let leapyr = (e) =>{
         let r;
        let c= parseInt(y.current.value);
        if((c%4 == 0) && (c%100 !==0) ||(c%400 == 0)){
           r = "It's leap Year";
        }else{
           r = "It's not a leap year"
        }
        setA(r);
        e.preventDefult()
    }

    return(<div>
        <h3>Enter Year to Check Leap Year</h3>
        <input type="text" ref={y} placeholder="Enter a year"/>
        <br/>
        <input type="button" value="Click" onClick={leapyr}/>
        <br/>
        <p>{a}</p>
    </div>)
}
export default Leapun;
