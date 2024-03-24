import React, { useState } from "react";
import "./Config.css";
import useWebSocket from "../customHook/useWebSocket";
import { useDispatch } from "react-redux";
import { gameStateType, setGameState } from "../store/Slices/webSocketSlice";

function ConfigurationPage() {
  let configuration: number[];
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

  const { sendConfig } = useWebSocket();
  const [typedConfig, setConfig] = useState<number[]>([]);

  const dispatch = useDispatch();

  const Onclicked = () => {
    dispatch(setGameState(gameStateType.LOBBY));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "m":
        setm(parseInt(value));
        configuration.push(m);
        break;
      case "n":
        setn(parseInt(value));
        configuration.push(n);
        break;
      case "initPlanMin":
        setInitPlanMin(parseInt(value));
        configuration.push(initPlanMin);
        break;
      case "initPlanSec":
        setInitPlanSec(parseInt(value));
        configuration.push(initPlanSec);
        break;
      case "initBudget":
        setInitBudget(parseInt(value));
        configuration.push(initBudget);
        break;
      case "initCenterDep":
        setInitCenterDep(parseInt(value));
        configuration.push(initCenterDep);
        break;
      case "planRevMin":
        setPlanRevMin(parseInt(value));
        configuration.push(planRevMin);
        break;
      case "planRevSec":
        setPlanRevSec(parseInt(value));
        configuration.push(planRevSec);
        break;
      case "revCost":
        setRevCost(parseInt(value));
        configuration.push(revCost);
        break;
      case "maxDep":
        setMaxDep(parseInt(value));
        configuration.push(maxDep);
        break;
      case "interestPct":
        setInterestPct(parseInt(value));
        configuration.push(interestPct);
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
    <div className="w-full max-w-xs">
      <div className="flex items-cen b0-ter justify-center">
        <div className="ellipsechar1Config " />
        <div className="ellipsechar2Config"></div>
        <div className="ellipsechar3Config"></div>
        <div className="ellipsechar4Config"></div>
        <div className="ellipsechar5Config"></div>
        <div className="ellipsechar6Config"></div>
        <div className="groupPinkCircleChar">
          <div className="ellipsechar7Con" />
          <div className="ellipsechar8Con" />
          <div className="ellipsechar9Con" />
          <div className="ellipsechar10Con" />
          <div className="ellipsechar11Con" />
        </div>
        <div className="Sound w-32  absolute">
          <img
            className="h-30 left-[550px] top-[-350px] absolute transition-opacity duration-500"
            src="src\image component\Soundon.png"
          />
        </div>

        <h2 className="Configuration">Configuration</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendConfig(typedConfig);
            setConfig(configuration);
          }}
        >
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
            onClick={Onclicked}
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConfigurationPage;
