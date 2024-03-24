import React, { useState } from "react";
import "./Config.css";

function ConfigurationPage() {
  const [m, setm] = useState(20);
  const [n, setn] = useState(15);
  const [initPlanMin, setInitPlanMin] = useState(20);
  const [initPlanSec, setInitPlanSec] = useState(80);
  const [initBudget, setInitBudget] = useState(10000);
  const [initCenterDep, setInitCenterDep] = useState(100);
  const [planRevMin, setPlanRevMin] = useState(30);
  const [planRevSec, setPlanRevSec] = useState(0);
  const [revCost, setRevCost] = useState(100);
  const [maxDep, setMaxDep] = useState(1000000);
  const [interestPct, setInterestPct] = useState(5);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "m":
        setm(parseInt(value));
        break;
      case "n":
        setn(parseInt(value));
        break;
      case "initPlanMin":
        setInitPlanMin(parseInt(value));
        break;
      case "initPlanSec":
        setInitPlanSec(parseInt(value));
        break;
      case "initBudget":
        setInitBudget(parseInt(value));
        break;
      case "initCenterDep":
        setInitCenterDep(parseInt(value));
        break;
      case "planRevMin":
        setPlanRevMin(parseInt(value));
        break;
      case "planRevSec":
        setPlanRevSec(parseInt(value));
        break;
      case "revCost":
        setRevCost(parseInt(value));
        break;
      case "maxDep":
        setMaxDep(parseInt(value));
        break;
      case "interestPct":
        setInterestPct(parseInt(value));
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    const configData = {
      m,
      n,
      initPlanMin,
      initPlanSec,
      initBudget,
      initCenterDep,
      planRevMin,
      planRevSec,
      revCost,
      maxDep,
      interestPct,
    };
    localStorage.setItem("configuration", JSON.stringify(configData));
  };

  return (
    <div className="Config">
      <div className="ellipsechar1" />
      <div className="ellipsechar2" />
      <div className="ellipsechar3" />
      <div className="ellipsechar4" />
      <div className="ellipsechar5" />
      <div className="ellipsechar6" />
      <div className="ellipsechar7" />
      <div className="ellipsechar8" />
      <div className="ellipsechar9" />
      <div className="ellipsechar10" />
      <div className="ellipsechar11" />
      <div className="Sound w-32  absolute">
        <img
          className="h-30 left-[1370px] top-[30px] absolute transition-opacity duration-500"
          src="src\image component\Soundon.png"
        />
      </div>

      <h2 className="Configuration">Configuration</h2>
      <div>
        <label className="m">m:</label>
        <input
          className="Rectangle424 label"
          type="number"
          id="m"
          name="m"
          value={m}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="n">n:</label>
        <input
          className="Rectangle425 label"
          type="number"
          id="n"
          name="n"
          value={n}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="init_plan_min">init_plan_min:</label>
        <input
          className="Rectangle426 label"
          type="number"
          id="initPlanMin"
          name="initPlanMin"
          value={initPlanMin}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="init_plan_sec" htmlFor="initPlanMin">
          init_plan_sec:
        </label>
        <input
          className="Rectangle427 label"
          type="number"
          id="initPlanSec"
          name="initPlanSec"
          value={initPlanSec}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="init_budget">init_budget:</label>
        <input
          className="Rectangle428 label"
          type="number"
          id="initBudget"
          name="initBudget"
          value={initBudget}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="init_center_dep">init_center_dep:</label>
        <input
          className="Rectangle429 label"
          type="number"
          id="initCenterDep"
          name="initCenterDep"
          value={initCenterDep}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="plan_rev_min">plan_rev_min:</label>
        <input
          className="Rectangle430 label"
          type="number"
          id="planRevMin"
          name="planRevMin"
          value={planRevMin}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="plan_rev_sec">plan_rev_sec:</label>
        <input
          className="Rectangle431 label"
          type="number"
          id="planRevSec"
          name="planRevSec"
          value={planRevSec}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="rev_cost">rev_cost:</label>
        <input
          className="Rectangle434 label"
          type="number"
          id="revCost"
          name="revCost"
          value={revCost}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="max_dep">max_dep:</label>
        <input
          className="Rectangle432 label"
          type="number"
          id="maxDep"
          name="maxDep"
          value={maxDep}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="interest_pct">interest_pct:</label>
        <input
          className="Rectangle433 label"
          type="number"
          id="interestPct"
          name="interestPct"
          value={interestPct}
          onChange={handleChange}
        />
      </div>
      <button
        // className="verify Rectangle435"
        className="verify Rectangle435 bg-teal-300 hover:text-white-200 hover:bg-pink-500 py-2 px-10 focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={() => {
          handleSave();
        }}
      >
        Verify
      </button>
    </div>
  );
}

export default ConfigurationPage;
