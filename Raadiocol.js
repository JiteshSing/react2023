let Radiocol = () =>
{   
    // const[a, setA] = useState(0);
    // const[b, setB] = useState(0);
    // const[c, setC] = useState(0);
    let selectred =(e) =>{
        // setA(e.target.value);
        document.body.style = 'background: red;'
    }
   let selectgreen = (e) => {
    // setB(e.target.value);
    document.body.style = 'background: green;'

   }
   let selectblue = (e) => {
    // setB(e.target.value); 
    document.body.style = 'background: blue;'

   }
   let selectwhite = (e) => {
    document.body.style = 'background: white;'
   }

    return(<div>
        <h3>Radio button color Change</h3>
        <input type="radio" value="red" name="color" onChange={selectred} />Red
        <br/>
        <input type="radio" value="green" name="color" onChange={selectgreen} />Green
        <br/>
        <input type="radio" value="blue" name="color" onChange={selectblue} />Blue
    <br/>
    <input type="radio" value="Reset" name="color" onChange={selectwhite} />Reset

      
    </div>)
}
export default Radiocol;