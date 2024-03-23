import { useDispatch, useSelector } from "react-redux";
import useWebSocket from "../customHook/useWebSocket.ts";
import { gameStateType, setGameState } from "../store/Slices/webSocketSlice.ts";
import { setUsername as sliceSetUsername } from "../store/Slices/usernameSlice.ts";
import { useState } from "react";

export default function Character() {
  const dispatch = useDispatch();

  // const gameState = useSelector((state) => state.gameState); // Assuming you have a gameState in your Redux store
  const [username, setUsername] = useState<string>("");
  const { connect } = useWebSocket();

  //   const toggleReadyState = () => {
  //     if (gameState === gameStateType.PLAY) {
  //       // If currently in PLAY state, set to NOT_READY
  //       dispatch(setGameState(gameStateType.NOT_READY));
  //     } else {
  //       // If currently in NOT_READY state, set to PLAY
  //       dispatch(setGameState(gameStateType.PLAY));
  //     }
  //   };

  return (
    <>
      <div className="w-full max-w-xs">
        <div className="flex items-cen b0-ter justify-center">
          <div className="ellipsechar1 " />
          <div className="ellipsechar2"></div>
          <div className="ellipsechar3"></div>
          <div className="ellipsechar4"></div>
          <div className="ellipsechar5"></div>
          <div className="ellipsechar6"></div>
          <div className="groupPinkCircle">
            <div className="ellipsechar7" />
            <div className="ellipsechar8" />
            <div className="ellipsechar9" />
            <div className="ellipsechar10" />
            <div className="ellipsechar11" />
          </div>

          <div className="Lobby">Lobby</div>
          <div className="Line1 w-32 h-px left-[-71.37px] top-[-68.08px] absolute origin-top-left rotate-[45.41deg] border-8 border-black border-opacity-0"></div>
        </div>

        <div className="Rectangle1" />
        <div className="Rectangle2" />
        <div className="Players">Players</div>
        <div className="Username ">
          richwoon
          <br />
          poon
          <br />
          neuah
        </div>

        <button className="absolute">
          <div className={"Rectangle3"}>
            <div className="Ready"></div>
          </div>
        </button>

        {/* Toggle button */}
        {/* <button className="absolute" onClick={toggleReadyState}>
          <div
            className={`Rectangle3 ${
              gameState === gameStateType.PLAY ? "active" : ""
            }`}
          >
            <div className="Ready">
              {gameState === gameStateType.PLAY ? "Not Ready" : "Ready"}
            </div>
          </div>
        </button> */}
      </div>
    </>
  );
}
