
import {Link} from "react-router-dom";
import GameArea from "./Components/GameArea/GameArea";
import PlayerArea from "./Components/PlayerArea/PlayerArea";

function App() {
  return (
      <div>
        <h1>Title</h1>
          <Link to="/" >Back to start</Link>
          <GameArea />
          <PlayerArea />
      </div>
  );
}

export default App;
