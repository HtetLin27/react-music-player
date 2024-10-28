 
 import './styles/app.scss'

import Player from "./components/Player";
import Song from "./components/Song";

//Import Util

import data from "./util"

function App() {
  console.log(data())
  return (
    <div className="App">
      <Song/>
      <Player/>
    </div>
  );
}

export default App;
