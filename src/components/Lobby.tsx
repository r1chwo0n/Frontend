import { useDispatch, useSelector } from "react-redux";
import useWebSocket from "../customHook/useWebSocket.ts";
import { gameStateType, setGameState } from "../store/Slices/webSocketSlice.ts";
import {
  selectUsername,
  setUsername as sliceSetUsername,
} from "../store/Slices/usernameSlice.ts";
import "./Config.css";
import { useState } from "react";
import { useAppSelector } from "../store/hooks.ts";
import"./Timer.tsx";
import Timer from "./Timer.tsx";

export default function Character() {
  const dispatch = useDispatch();

  const Onclicked = () => {
    dispatch(setGameState(gameStateType.PLAY));
  };
  const username = useAppSelector(selectUsername);

  return (
    <>
      <div className="w-full max-w-xs">
        <div className="flex items-cen b0-ter justify-center">
          <div className="ellipsechar1Config " />
          <div className="ellipsechar2Config"></div>
          <div className="ellipsechar3Config"></div>
          <div className="ellipsechar4Config"></div>
          <div className="ellipsechar5Config"></div>
          <div className="ellipsechar6Config"></div>
          <div className="groupPinkCircleChar">
            <div className="ellipsechar7Con" />
            <div className="ellipsechar8Con" />
            <div className="ellipsechar9Con" />
            <div className="ellipsechar10Con" />
            <div className="ellipsechar11Con" />
          </div>

          <div className="Lobby">Lobby</div>
          <div className="Line1 w-32 h-px left-[-71.37px] top-[-68.08px] absolute origin-top-left rotate-[45.41deg] border-8 border-black border-opacity-0"></div>
        </div>

        <div className="RectangleBase" />
        <div className="Rectangle2" />
        <div className="Players">Players</div>
        <div className="Username ">
          {username.username}
          <br />
          poon
          <br />
          neuah
        </div>
        <button
          className="ReadyButt bg-gray-200 text-black hover:text-yellow-200 hover:bg-purple-500 py-5 px-20 focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={Onclicked}
        >
          Ready
        </button>
        <div className="TimerboxLobby"><Timer/></div>
        
      </div>
    </>
  );
}
