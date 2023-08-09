import './App.css'
import { jumpingCharacter } from './jumping-character';
import { stopLight } from './stop-light';
import { useMachine } from '@xstate/react';
import character from './assets/Cold Storage Worker Large.gif';
import standing from './assets/Cold Storage Worker Standing.png';

function App() {
  // const [state, send] = useMachine(stopLight);
  const [state, send] = useMachine(jumpingCharacter);

  return (
    <>
      {/* <div className="circle" style={{"display": "flex", "width": "100px", "height": "100px", "backgroundColor": `${state.context.color}`, "borderRadius": "50%"}}>
      <p className="text"></p>
      </div>
      <div className="circle" style={{"display": "flex", "width": "100px", "height": "100px", "backgroundColor": `${state.context.color}`, "borderRadius": "50%"}}>
      <p className="text"></p>
      </div>
      <div className="circle" style={{"display": "flex", "width": "100px", "height": "100px", "backgroundColor": `${state.context.color}`, "borderRadius": "50%"}}>
      <p className="text"></p>
      </div>
      <button onClick={() => (send("CHANGE_COLOR"))}>Change Color</button> */}
      {state.value.toString() === 'jumping' ?  <div><img src={character} /></div> : <div><img src={standing} /></div>}
      <div><p>{state.value.toString()}</p></div>
      <button onClick={() => {
        send("Jump");
        setTimeout(() => send("Land"), 1200);
      }}>Jump</button>
      <button onClick={() => (send("Walk"))}>Walk</button>
      <button onClick={() => (send("StandStill"))}>StandStill</button>

    </>
  )
}

export default App
