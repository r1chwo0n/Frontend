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
            <button
              className="bg-pink-500 hover:bg-purple-700 text-white font-Shrikhand py-4 px-10 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Play
            </button>
          </div>
        </form>
        {/* <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p> */}
      </div>
    </>
  );
}
