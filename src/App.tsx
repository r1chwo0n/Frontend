import "./App.css";
import "./style.css";
import { useAppSelector } from "./store/hooks.ts";
import {
  gameStateType,
  selectWebSocket,
} from "./store/Slices/webSocketSlice.ts";
import Play from "./components/Play.tsx";
import PlayPage from "./components/PlayPage.tsx";

function App() {
  const webSocketState = useAppSelector(selectWebSocket);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-full max-h-full">
          {/* <Play /> */}
          {/* <PlayPage /> */}
          {webSocketState.gameState == gameStateType.HOME && <PlayPage />}
          {webSocketState.gameState == gameStateType.PLAY && <Play />}
        </div>
      </div>
    </>
  );
}

export default App;
