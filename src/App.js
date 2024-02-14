import "./App.css";
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({firstName:"", lastName: "", comment:"", isVisible:false, mode:"", favCar:""});

  const changeHandler = (event) =>{
    const {name, value, checked, type} = event.target
    setFormData(prevFormData =>{
      return {...prevFormData, 
        // [event.target.name]: event.target.type === "checked" ? checked: value}; 
        [name]: type === "checked" ? checked: value
      }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <form onSubmit={submitHandler}>    

          <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} className="border-2" onChange={changeHandler}/>
          <br /><br />
          <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} className="border-2" onChange={changeHandler}/>

          <br /> <br />
          {/* handling the text area */}
          <textarea name="comment" cols="30" value={formData.comment} placeholder="Comment" rows="10" className="border-2" onChange={changeHandler}></textarea>

          <br /><br />

          {/* handling the checked and unchecked button */}
          <input type="checkbox" name="isVisible" id="isVisible" checked={formData.isVisible} onChange={changeHandler}/>
          <label htmlFor="isVisible">Online Mode</label>

          <br /><br />
          {/* radio button */}
          <input type="radio" name="mode" id="online-mode" value="online-mode" checked={formData.mode === "online-mode"} onChange={changeHandler} />
          <label htmlFor="mode">Online Mode</label>

          <br />
          <input type="radio" name="mode" id="offline-mode" value="offline-mode" checked={formData.mode === "offline-mode"} onChange={changeHandler} />
          <label htmlFor="mode">Offline Mode</label>

          <br /><br />

          {/*DropDown*/}
          <select name="favCar" id="favCar" value={formData.favCar} onChange={changeHandler}>
              <option value="Mercedes">Mercedes</option>
              <option value="Legender">Legender</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
          </select>
          <label htmlFor="favCar">Select Your Car</label>


          <br /><br />
          {/* submit */}
          <input type="submit" name="submit" id="submit" className="border-2"/>
          <label htmlFor="submit"></label>
      </form>
    </div>
    
  );
}

export default App;
