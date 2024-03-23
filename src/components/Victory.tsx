import { useDispatch } from "react-redux";
import useWebSocket from "../customHook/useWebSocket.ts";
import { gameStateType, setGameState } from "../store/Slices/webSocketSlice.ts";
import { setUsername as sliceSetUsername } from "../store/Slices/usernameSlice.ts";
import { useState } from "react";

export default function Character() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>("");
  const { connect } = useWebSocket();
  const Onclicked = () => {
    dispatch(setGameState(gameStateType.PLAY));
  };

  return (
    <div className="Winner w-[1440px] h-[1024px] relative bg-yellow-50">
      <div className="w-[956px] h-[988px] left-[242px] top-[118px] absolute ">
        <div className="Ellipse3 w-[520px] h-[520px] left-[200px] top-[0px] absolute bg-orange-300"></div>
        <img
          className="Ellipse3 w-[500px] h-[500px] left-[210px] top-[10px] absolute bg-white"
          src="src\image char\Picture2.png"
        />
        <div className="Victory_Lose ">VICTORY</div>
        

        <div className="Exit w-32  absolute">
          <img
            className="h-30 left-[-150px] top-[700px] absolute transition-opacity duration-500"
            src="src\image component\Exits.png"
          />
        </div>

        <div className="Sound w-32  absolute">
          <img
            className="h-30 left-[990px] top-[-50px] absolute transition-opacity duration-500"
            src="src\image component\Soundon.png"
          />
        </div>


      </div>
    </div>
  );
}
