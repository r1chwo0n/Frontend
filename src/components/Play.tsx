import { useState } from "react";
import HexagonGrid from "./HexagonGrid.tsx";
import useWebSocket from "../customHook/useWebSocket.ts";
import { useAppSelector } from "../store/hooks.ts";
import { selectUsername } from "../store/Slices/usernameSlice.ts";
import {
  messageType,
  selectWebSocket,
} from "../store/Slices/webSocketSlice.ts";

export default function Play() {
  const { sendPlan } = useWebSocket();
  const [typedPlan, setTypedPlan] = useState<string>("");
  const username = useAppSelector(selectUsername);
  const webSocketState = useAppSelector(selectWebSocket);

  return (
    <>
      <div className="upleft">
        <div className="pinkRectanglePlay">
          <div className="textPlay"> {username.username}’s turn</div>
          <img
            className="w-20 h-30 left-[115px] top-[-20px] absolute"
            src={username.pic}
          />
        </div>
      </div>
      <div className="bottomdown">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/898f6c088bdd4fa4130c0d8d96088cebb09b9da69917ba8ceb17d7f59fb5e307?" />
      </div>
      <div className="groupBudget">
        <div className="boxBudget"></div>
        <div className="budgetFront">BUDGET</div>
        <div className="budget"></div>
      </div>
      <div className="hexagon">
        <HexagonGrid width={760} height={550} size={53} />
      </div>

      <div className="recConstruct">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendPlan(typedPlan, username.username);
            setTypedPlan("");
          }}
        >
          <textarea
            className="rounded-xl resize-none writeConstruct"
            placeholder=" Construction Plan"
            value={typedPlan}
            onChange={(e) => setTypedPlan(e.target.value)}
            required
          ></textarea>
          <button
            className="sendButt bg-blue-500 text-white hover:text-yellow-200 hover:bg-purple-500 py-2 px-10 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
