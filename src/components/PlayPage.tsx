import { useDispatch } from "react-redux";
import { gameStateType, setGameState } from "../store/Slices/webSocketSlice.ts";

export default function PlayPage() {
  const dispatch = useDispatch();

  const OnclickedInit = () => {
    dispatch(setGameState(gameStateType.INIT));
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

          <div className="upbeatStart items-center ">UPBEAT</div>

          <div className="group1Start ">
            <button
              className="mr-6 bg-white text-pink-400 hover:text-yellow-200 hover:bg-purple-700 playbutt py-4 px-20 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={OnclickedInit}
            >
              New game
            </button>
            <button
              className="bg-white text-pink-400 hover:text-yellow-200 hover:bg-purple-700 playerbutt py-4 px-20 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={OnclickedInit}
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
