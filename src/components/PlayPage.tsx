import { useDispatch } from "react-redux";
import useWebSocket from "../customHook/useWebSocket.ts";
import { gameStateType, setGameState } from "../store/Slices/webSocketSlice.ts";

export default function PlayPage() {
  const dispatch = useDispatch();

  const Onclicked = () => {
    dispatch(setGameState(gameStateType.PLAY));
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <div className="flex items-cen b0-ter justify-center">
          <div className="ellipse1 " />
          <div className="ellipse2"></div>
          <div className="ellipse3"></div>
          <div className="ellipse4"></div>
          <div className="ellipse5"></div>
          <div className="ellipse6"></div>
          <div className="groupPinkCircle">
            <div className="ellipse7" />
            <div className="ellipse8" />
            <div className="ellipse9" />
            <div className="ellipse10" />
            <div className="ellipse11" />
          </div>

          <div className="upbeat items-center font-size: 150px">UPBEAT</div>
          <div className="group1">
            <button
              className="bg-white text-pink-400 hover:text-yellow-200 hover:bg-purple-700 playbutt py-4 px-20 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={Onclicked}
            >
              Play
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
