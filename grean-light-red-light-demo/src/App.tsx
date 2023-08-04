import './App.css'
import { stopLight } from './stop-light';
import { useMachine } from '@xstate/react';

const getColor = (colorOfLight: string, stateColor: string) => {
  if(colorOfLight === "red") {
    if(stateColor === "red") {

    }
  } else if(colorOfLight === "yellow") {

  } else if(colorOfLight === "green") {

  }
}

function App() {
  const [state, send] = useMachine(stopLight);

  return (
    <>
      <div className="circle" style={{"display": "flex", "width": "100px", "height": "100px", "backgroundColor": `${state.context.color}`, "borderRadius": "50%"}}>
      <p className="text"></p>
      </div>
      <div className="circle" style={{"display": "flex", "width": "100px", "height": "100px", "backgroundColor": `${state.context.color}`, "borderRadius": "50%"}}>
      <p className="text"></p>
      </div>
      <div className="circle" style={{"display": "flex", "width": "100px", "height": "100px", "backgroundColor": `${state.context.color}`, "borderRadius": "50%"}}>
      <p className="text"></p>
      </div>
      <button onClick={() => (send("CHANGE_COLOR"))}>Change Color</button>
    </>
  )
}

export default App
