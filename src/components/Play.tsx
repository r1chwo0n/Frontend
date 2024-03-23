import { useState } from "react";
import HexagonGrid from "./HexagonGrid.tsx";
export default function Play() {
  const [plan, setConstructionPlan] = useState<string>("");

  const handleSendPlan = () => {
    // Implement your logic to send the construction plan here
    console.log("Sending construction plan:", plan);
  };

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
      <div className="hexagon">
        <HexagonGrid width={700} height={520} size={45} />
      </div>
      <div className="recConstruct">
        <button
          className="sendButt bg-blue-500 text-white hover:text-yellow-200 hover:bg-purple-500 py-2 px-10 focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleSendPlan}
        >
          Send
        </button>
        <textarea
          className="rounded-xl resize-none writeConstruct"
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
