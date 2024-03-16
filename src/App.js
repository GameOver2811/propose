import { useState } from 'react'
import './App.css';
import img from "./images/img01.jpg";
import img3 from "./images/imd-03.jpg"
import img2 from "./images/img-02.webp";
import img4 from "./images/img04.jpg";
import last from "./images/last.jpg";
import bhad from "./images/bhad.jpg";
function App() {
  const [imgPath, setImgPath] = useState(img);
  const [text, setText] = useState("Please maan ja na🥹🥹🥹");
  const [upText,setUpText] = useState("Kaise ho madam ji😛");

  const yes = (e) => {
    e.preventDefault();
    setImgPath(img3);
    setText("Batao frr kaha chalogi date per");
    const No = document.getElementById("no");
    No.disabled = true;
    const buttons = document.getElementsByClassName("btn");
    setUpText("Ammi Tumake Bhalo bhasi😘😘");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.display = "none";
    }
  }

  const no = (e) => {
    e.preventDefault();
    if (text === "Please maan ja na🥹🥹🥹") {
      setImgPath(img2);
      setText("Nhi manogi 🤨🤨🤨🤨");
      setUpText("Oooo chammak challo man jao na🥺");
    } else if (text === "Nhi manogi 🤨🤨🤨🤨") {
      setImgPath(img4);
      setText("Maan jao na 🥺");
      setUpText("Mere jaise maasum per taras nhi ata kya 😐");
    }
    else if (text === "Maan jao na 🥺") {
      setImgPath(last);
      setUpText("waise mujhe kala jaadu bhi ata h 🙂");
      setText("Kya mtlb tu UP se h Bengal se nhi💀");
    }
    else {
      setImgPath(bhad);
      setUpText("Bandariya kahi ki🥱")
      setText("Bhadd Mai Jao Chulbuli Chudail🤢");
      const buttons = document.getElementsByClassName("btn");

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
      }
    }
  }
  return (
    <div className="App flex">
      <h1 className='heading'>{upText}</h1>
      <div className='img flex'>
        <img src={imgPath} alt="Cat" />
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
