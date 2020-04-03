import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom"

function App() {
  const [loot, setLoot] = useState("");
  const [url, setUrl] = useState("");
  const [inventory2,setInventory]= useState([])
  const rarities=["Common","Rare","Epic","Legendary"]
  const Commons= ["Artoria","Achiles","Mordred"]
  const Commons_pics=["Artoria.png","Achiles.png","Mordred.png"]
  const rares=["Altera","Shamiko"]
  const rares_pics=["Altera.png","Shamiko.png"]
  let picture
  
  
  const Changer = () =>{
    if(inventory2.length>=25){
      
    }
    else{
    let chance=Math.floor(Math.random() * 10)
    let loot = chance < 9 ? rarities[0] : rarities[1]
    if (chance<9){
      
      let chance2=Math.floor(Math.random() * 3)
      setInventory([...inventory2, Commons[chance2]]);
      picture=Commons_pics[chance2]
    }
    else{
      let chance2=Math.floor(Math.random() * 2)
      
      console.log(chance2)
      setInventory([...inventory2, rares[chance2]]);
      picture=rares_pics[chance2]
    }
    setLoot(loot)
    setUrl(picture)
  }
  }
  const [character_index,set_character_index]=useState("")
  const [selected_char, setSelect] = useState("");
  const [selected_char_pic, set_character_pic]= useState("")
  const getnum=(name1,i)=>{
    setSelect(name1)
    set_character_index(i)
    let pic2=name1+".png"
    set_character_pic(pic2)
  }
  const deletefunc=()=>{
    if(character_index!=null){
    console.log(character_index)
    console.log(inventory2)
    inventory2.splice(character_index, 1);
    console.log(inventory2)
    setInventory(inventory2)
    set_character_index(null)
    set_character_pic(null)
    }
  }
  const deleteallfunc=()=>{
    setInventory(inventory2.splice(character_index, 0))
    set_character_pic(null)
  }

  return (
    <div className="App">
      <div id="App_main">
      <button onClick={Changer}>Draw</button>
      <h2 id="headline">{loot}</h2>
      <img src={url}></img>
      </div>
      <div id="hero_inventory">
      {inventory2.map((name1,i)=><button key={i} onClick={()=>getnum(name1,i)} className="hero_unit">{name1}</button>)}
      </div>
      <div id="UI">
      <h2 id="Selected">Selected character: {selected_char} </h2>
      <button onClick={()=>deletefunc()}>Delete</button>
      <button onClick={()=>deleteallfunc()}>Delete All</button>
      <div id="picpiccontainer"><img id="picpic"src={selected_char_pic}></img></div>
      </div>
    </div>
  );
}
export default App