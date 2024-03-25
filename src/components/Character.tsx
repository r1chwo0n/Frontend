import { useDispatch } from "react-redux";
import useWebSocket from "../customHook/useWebSocket.ts";
// import { gameStateType, setGameState } from "../store/Slices/webSocketSlice.ts";
import { setUsername as sliceSetUsername } from "../store/Slices/usernameSlice.ts";
import { setPic as sliceSetPic } from "../store/Slices/usernameSlice.ts";
import { useState } from "react";

export default function Character() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>("");
  const [pic, setPic] = useState<string>("");
  const { connect } = useWebSocket();

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
          <div className="groupPinkCircleChar">
            <div className="ellipsechar7c" />
            <div className="ellipsechar8c" />
            <div className="ellipsechar9c" />
            <div className="ellipsechar10c" />
            <div className="ellipsechar11c" />
          </div>

          <div className="w-full max-w-xs">
            <form
              onSubmitCapture={(e) => {
                e.preventDefault();
                dispatch(sliceSetUsername(username));
                dispatch(sliceSetPic(pic));
                connect(username);
              }}
            >
              <div className="group3">
                <div className="mb-20 ">
                  <div className="namebox px-2 py-2">
                    <input
                      className="innerbox text-gray-700"
                      id="username"
                      type="text"
                      placeholder="Enter your name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>
                </div>
                <div className="group4">
                <button
                  className=" bg-zinc-200 text-black-400 hover:text-white hover:bg-zinc-950 enterbutt py-4 px-20 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Enter
                </button>
                </div>
              
              <div className="group1">
                <button
                  className="w-72 h-72 left-[-450px] top-[-200px] absolute"
                  type="button"
                  onClick={() => setPic("src\\image char\\Picture1.png")}
                >
                  {pic === "src\\image char\\Picture1.png" ? (
                    <>
                      <div className="Ellipse3 w-72 h-72 left-0 top-0 absolute bg-zinc-300 bg-opacity-50 rounded-full" />
                      <img
                        className=" w-52 h-60 left-[40px] top-[25px] absolute"
                        src="src\image char\Picture1.png"
                      />
                    </>
                  ) : (
                    <>
                      <div className="Ellipse3 w-72 h-72 left-0 top-0 absolute bg-zinc-300 bg-opacity-50 rounded-full" />
                      <img
                        className=" w-52 h-60 left-[40px] top-[25px] absolute  opacity-50"
                        src="src\image char\Picture1.png"
                      />
                    </>
                  )}
                </button>

                <button
                  className="w-72 h-72 left-[0px] top-[-200px] absolute"
                  type="button"
                  onClick={() => setPic("src\\image char\\Picture2.png")}
                >
                  {pic === "src\\image char\\Picture2.png" ? (
                    <>
                      <div className="Ellipse3 w-72 h-72 left-0 top-0 absolute bg-zinc-300 bg-opacity-50 rounded-full" />
                      <img
                        className=" w-60 h-60 left-[21px] top-[21px] absolute"
                        src="src\image char\Picture2.png"
                      />
                    </>
                  ) : (
                    <>
                      <div className="Ellipse3 w-72 h-72 left-0 top-0 absolute bg-zinc-300 bg-opacity-50 rounded-full" />
                      <img
                        className=" w-60 h-60 left-[21px] top-[21px] absolute  opacity-50"
                        src="src\image char\Picture2.png"
                      />
                    </>
                  )}
                </button>

                <button
                  className="w-72 h-72 left-[450px] top-[-200px] absolute"
                  type="button"
                  onClick={() => setPic("src\\image char\\Picture3.png")}
                >
                  {pic === "src\\image char\\Picture3.png" ? (
                    <>
                      <div className="Ellipse3 w-72 h-72 left-0 top-0 absolute bg-zinc-300 bg-opacity-50 rounded-full" />
                      <img
                        className=" w-48 h-60 left-[47px] top-[21px] absolute"
                        src="src\image char\Picture3.png"
                      />
                    </>
                  ) : (
                    <>
                      <div className="Ellipse3 w-72 h-72 left-0 top-0 absolute bg-zinc-300 bg-opacity-50 rounded-full" />
                      <img
                        className=" w-48 h-60 left-[47px] top-[21px] absolute opacity-50"
                        src="src\image char\Picture3.png"
                      />
                    </>
                  )}
                </button>
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
