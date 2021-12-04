
import {Link} from "react-router-dom";
import GameArea from "./Components/GameArea";

function App() {
  return (
      <div>
        <h1>Title</h1>
          <Link to="/" >Back to start</Link>
          <GameArea />
          <div>Player area</div>
      </div>
  );
}

export default App;
