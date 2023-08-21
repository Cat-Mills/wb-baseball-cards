import playerData from "./playerData";
import { useState } from "react";

function BaseballCard(props) {
  let [showPicture, setShowPicture] = useState(true)

  function toggleCard() {
    setShowPicture(!showPicture)
  }

  if(showPicture){
  return (
    <div className="card" onClick={toggleCard}>
      <h2>{props.playerName}</h2>
      <img src={props.imgUrl} alt={props.name} ></img>
    </div>
  )}
  else {
  let statsDisplay = []

  for(let [statName,statVal] of Object.entries(props.stats)){
    statsDisplay.push(<p>{statName}: {statVal}</p>)
  }
  return (
    <div className="card" onClick={toggleCard}>
      <h2>{props.playerName}</h2>
      <p>{props.team}</p>
      <p>{props.position}</p>
      {statsDisplay}
    </div>
  )}
}

function App() {
  const cards = playerData.map((player) => (
    <BaseballCard 
      key={player.cardId} 
      playerName={player.name} 
      imgUrl= {player.imgUrl} 
      team={player.team} 
      position={player.position} 
      stats={player.stats} 
    />
  ))
  return <>{cards}</>
}
export default App;
