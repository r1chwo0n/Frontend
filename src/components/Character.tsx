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

          <div className="w-full max-w-xs">
            <form
              // className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmitCapture={(e) => {
                e.preventDefault();
                dispatch(sliceSetUsername(username));
                connect();
              }}
            >
              <div className="group3">
                <div className="mb-4">
                  
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Username"
                    type="text"
                    placeholder="Enter you name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  
                </div>

                <button
                  className="bg-zinc-200 text-black-400 hover:text-white hover:bg-zinc-950 enterbutt py-4 px-20 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={Onclicked}
                >
                  Enter
                </button>

                
              </div>
              <div className="group1">
                <div className="Nerdchar w-72 h-72 left-[-450px] top-[-200px] absolute">
                  <div className="Ellipse3 w-72 h-72 left-0 top-0 absolute bg-zinc-300 bg-opacity-50 rounded-full " />
                  <img
                    className="w-52 h-60 left-[40px] top-[25px] absolute transition-opacity duration-500"
                    src="src\image char\Picture1.png"
                  />
                </div>

                <div className="Superstarchar w-72 h-72 left-[0px] top-[-200px] absolute">
                  <div className="Ellipse3 w-72 h-72 left-0 top-0 absolute bg-zinc-300 bg-opacity-50 rounded-full" />
                  <img
                    className=" w-60 h-60 left-[21px] top-[21px] absolute"
                    src="src\image char\Picture2.png"
                  />
                </div>

                <div className="Oppachar w-72 h-72 left-[450px] top-[-200px] absolute">
                  <div className="Ellipse3 w-72 h-72 left-0 top-0 absolute bg-zinc-300 bg-opacity-50 rounded-full" />
                  <img
                    className=" w-48 h-60 left-[47px] top-[21px] absolute"
                    src="src\image char\Picture3.png"
                  />
                </div>
              </div>
            </form>
            <div className="upbeatChar">UPBEAT</div>
            <div className="Character">Character</div>
          </div>
        </div>
      </div>
    </>
  );
}
