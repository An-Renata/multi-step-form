import StepInfoHeader from "./StepInfoHeader";
import Switch from "react-switch";
import { planCards } from "../formData.js/data.js";

import { useForm } from "../contexts/FormContext.js";

function StepTwoLayout() {
  const { switchBool, plan: selectedPlan, dispatch } = useForm();

  return (
    <>
      <StepInfoHeader
        header="Select your plan"
        paragraph="You have the option of monthly or yearly billing."
      />
      <div className="inputs-box">
        <div>
          <div className="plan-cards">
            {planCards.map((plan) => (
              <div
                key={plan.name}
                className={`card ${
                  selectedPlan.name === plan.name ? "selected-plan" : ""
                }`}
                onClick={() =>
                  dispatch({
                    type: "plan",
                    payload: { name: plan.name, price: plan.price },
                  })
                }
              >
                <span>{plan.icon}</span>
                {/* <img src={plan.icon} alt="Arcade icon"></img> */}

                <h3>{plan.name}</h3>
                <p style={{ margin: 0 }}>${plan.price}/mo</p>
              </div>
            ))}
          </div>
          {/* Switch package from npm */}
          <div className="switch-container">
            <h4>Monthly</h4>
            <Switch
              checked={switchBool}
              onChange={() => dispatch({ type: "switch" })}
              checkedIcon={false}
              uncheckedIcon={false}
              height={22}
              width={40}
              offColor="#02295a"
              onColor="#02295a"
              handleDiameter={15}
              aria-label="switch to select plan: monthly or yearly"
            />
            <h4>Yearly</h4>
          </div>
        </div>
      </div>
    </>
  );
}
// <img src={plan.icon} alt=`plan name: ${plan.name}` /

export default StepTwoLayout;
