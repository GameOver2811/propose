import {useState} from 'react'
import './App.css';
import img from "./images/img01.jpg";
import img3 from "./images/imd-03.jpg"
import img2 from "./images/img-02.webp";
import img4 from "./images/img04.jpg";
import last from "./images/last.jpg";
import bhad from "./images/bhad.jpg";
function App() {
  const [imgPath, setImgPath] = useState(img);
  const[text,setText] = useState("Please maan ja na🥹🥹🥹");

  const yes = (e)=>{
    e.preventDefault();
    setImgPath(img3);
    setText("Batao frr kaha chalogi date per");
    const No = document.getElementById("no");
    No.disabled = true;
  }

  const no = (e)=>{
    e.preventDefault();
    if(text === "Please maan ja na🥹🥹🥹") {
      setImgPath(img2);
      setText("Nhi manogi 🤨🤨🤨🤨");
    }else if(text === "Nhi manogi 🤨🤨🤨🤨") {
      setImgPath(img4);
      setText("Maan jao na 🥺");
    }
    else if(text === "Maan jao na 🥺") {
      setImgPath(last);
      setText("waise mujhe kala jaadu bhi ata h 🙂");
    }
    else {
      setImgPath(bhad);
      setText("Bhadd Mai Jau Chulbuli Chudail🤢");
      const buttons = document.getElementsByClassName("btn");

      for (let i = 0; i < buttons.length; i++) {
          buttons[i].style.display = "none";
      }
    }
  }
  return (
    <div className="App">
      <h1 className='heading'>Kaise ho madam ji😛</h1>
      <div className='img'>
        <img src={imgPath}  alt="Cat"/>
        <div className='A_cute_text'>{text}</div>
        <div className='buttons'>
          <button className="btn" onClick={yes}>Yes😛</button>
          <button className="btn" id="no" onClick={no}>No🤨</button>
        </div>
      </div>
    </div>
  );
}

export default App;
