import { useState } from "react";
import useWebSocket from "../customHook/useWebSocket.ts";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hooks.ts";
import { selectWebSocket } from "../store/Slices/webSocketSlice.ts";

export default function Play() {
  const [plan, setConstructionPlan] = useState<string>("");

  return (
    <>
      <div className="upleft">
        <div className="pinkRectangle">
          <div className="textPlay">Player 1’s turn</div>
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
      <div className="recConstruct">
        <textarea
          className="rounded-lg resize-none writeConstruct"
          id="Constructor Plan"
          placeholder=" Construction Plan"
          value={plan}
          onChange={(e) => setConstructionPlan(e.target.value)}
          required
        ></textarea>
      </div>
    </>
  );
}
