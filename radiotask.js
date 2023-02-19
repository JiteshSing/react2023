import { useState } from "react";
let Radiotask = () =>{
    const[data1, setData1] = useState("");
    const[data2, setData2] = useState("");
    const[data3, setData3] = useState("");
    const[data4, setData4] = useState("");
    const[data5, setData5] = useState("");
    const[res, setRes] = useState("");
    const[a,setA] = useState("");
    const[ans, setAns] = useState("");
    let selectcourse1 = (e) =>{
        if(e.target.checked){
            setData1(e.target.value);
        }else{
            setData1("");
        }
    }
    let selectcourse2 = (e) =>{
        if(e.target.checked){
          setData2(e.target.value);
        }else{
            setData2("");
        }
    }
    let selectcourse3 = (e) => {
        if(e.target.checked){
            setData3(e.target.value);
        }else{
            setData3("");
        }
    }
    let selectcourse4 = (e) => {
            setData4(e.target.value);
       
    }
    let selectcourse5 = (e) => {
        setData5(e.target.value);
    }
    let showcourse = (e) => {
         setRes(data1+" "+data2+" "+data3+" "+data4+" "+data5)
    }
    let selectdrop = (e) => {
        setA(e.target.value)
    }
    let droplist = (e) => {
        setAns(a);
    }

    return(<div>
        <h2>Checkbox and Radio Button</h2>
        <input type="checkbox" value="C-2000" name="course" onChange={selectcourse1}/>C<br/>
        <input type="checkbox" value="C+-2500" name="course" onChange={selectcourse2}/>C++<br/>
        <input type="checkbox" value="DS-5500" name="course" onChange={selectcourse3}/>DS<br/>
        <input type="radio" value="React-20000" name="course" onChange={selectcourse4}/>React<br/>
        <input type="radio" value="Angular-25000" name="course" onChange={selectcourse5}/>Angular<br/>
        <input type="button" value="click" onClick={showcourse}/>
        <p>Fees According to selectedcourse</p>
        <p>{res}</p>
        <h2>Select Course to see the fees structure</h2>
       <select onChange={selectdrop}>
        <option value="">Select a course</option>
        <option value="(C)-2000">C</option>
        <option value="(C++)-2500">C++</option>
        <option value="(DS)-5500">DS</option>
        <option value="(JAVA)-10000">JAVA</option>
        <option value="(JS)-20000">JS</option>
       </select><br/>
       <input type="button" value="click" onClick={droplist}/>
        <p>{ans}</p>

    </div>)
}
export default Radiotask;