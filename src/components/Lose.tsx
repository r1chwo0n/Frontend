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
      <div className=" w-[956px] h-[988px] left-[242px] top-[118px] absolute ">
        <div className="  Ellipse3 w-[620px] h-[620px] left-[200px] top-[0px] absolute bg-orange-300"></div>
        <img
          className=" Ellipse3 w-[600px] h-[600px] left-[210px] top-[10px] absolute bg-white"
          src="src\image char\Picture2.png"
        />
        <div className="Victory_Lose ">
          Lose
        </div>
      </div>
    </div>
  );
}
