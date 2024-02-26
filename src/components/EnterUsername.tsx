import { useState } from "react";
import useWebSocket from "../customHook/useWebSocket.ts";
import { useDispatch } from "react-redux";
import { setUsername as sliceSetUsername } from "../store/Slices/usernameSlice.ts";

export default function EnterUsername() {
  const [username, setUsername] = useState<string>("");
  const dispatch = useDispatch();
  const { connect } = useWebSocket();
  return (
    <>
      <div className="w-full max-w-xs">
        <form
          onSubmitCapture={(e) => {
            e.preventDefault();
            dispatch(sliceSetUsername(username));
            connect(username);
          }}
        >
          <div className="flex items-center justify-center">
            <div className="ellipse1"></div>
            <div className="ellipse2"></div>
            <div className="ellipse3"></div>
            <div className="ellipse4"></div>
            <div className="ellipse8"></div>
            <div className="ellipse9"></div>
            <div className="ellipse10"></div>
            <div className="upbeat items-center">UPBEAT</div>
            <div className="group1">
              <button
                className="bg-white text-pink-400 hover:text-yellow-200 hover:bg-purple-700 playbutt py-4 px-20 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Play
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
