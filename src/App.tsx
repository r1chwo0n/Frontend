import "./App.css";
import "./style.css";
import "./characterstyle.css";
import "./lobbystyle.css";
import "./victorystyle.css";
import "./play.css";
import "./timerstyle.css";

import { useAppSelector } from "./store/hooks.ts";
import {
  gameStateType,
  selectWebSocket,
} from "./store/Slices/webSocketSlice.ts";
import Play from "./components/Play.tsx";
import PlayPage from "./components/PlayPage.tsx";
import Character from "./components/Character.tsx";
import Lobby from "./components/Lobby.tsx";
import Config from "./components/Config.tsx";
import Victory from "./components/Victory.tsx";
import Lose from "./components/Lose.tsx";

function App() {
  const webSocketState = useAppSelector(selectWebSocket);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-full max-h-full">
          {/* <Play /> */}
          {/* <PlayPage /> */}
          {/* <Character /> */}
          {/* <Lobby /> */}
          {/* <Config /> */}

          {webSocketState.gameState == gameStateType.HOME && <PlayPage />}
          {webSocketState.gameState == gameStateType.INIT && (
            <>{webSocketState.isConnected ? <Config /> : <Character />}</>
          )}
          {webSocketState.gameState == gameStateType.LOBBY && <Lobby />}
          {webSocketState.gameState == gameStateType.PLAY && <Play />}

          {/* <Victory /> */}
          {/* <Lose /> */}
          {/* {webSocketState.gameState == gameStateType.HOME && <PlayPage />} */}
          {/* {webSocketState.gameState == gameStateType.HOME && <Character />} */}

          {/* {webSocketState.gameState == gameStateType.PLAY && <Play />} */}
        </div>
      </div>
    </>
  );
}

export default App;
