import StepInfoHeader from "./StepInfoHeader";
import Switch from "react-switch";
import Button from "./Button.js";
import InputsBox from "./InputsBox.js";

import { useForm } from "../contexts/FormContext.js";

function StepTwoLayout() {
  const {
    switchBool,
    plan: selectedPlan,
    dispatch,
    subType,
    fontColorSwitcher,
    planPrice,
    subscriptionType,
    plans,
  } = useForm();

  console.log(selectedPlan);
  // Handle submit, user must choose a plan in order to go to the next step
  function handleSubmit(e) {
    e.preventDefault();

    if (selectedPlan.name) {
      dispatch({ type: "go/next" });
    } else {
      alert("You must choose a plan");
    }
  }

  return (
    <>
      <StepInfoHeader
        header="Select your plan"
        paragraph="You have the option of monthly or yearly billing."
      />
      <form onSubmit={handleSubmit}>
        <InputsBox>
          {/* mapping through planCards object to display info in the UI */}
          <div className="plan-cards">
            {plans.map((plan) => (
              <div
                key={plan.name}
                // Add active border to selected plan
                className={`card ${
                  selectedPlan.name === plan.name ? "selected-plan" : ""
                }`}
                // save plan into state
                onClick={() => {
                  dispatch({
                    type: "plan",
                    payload: {
                      name: plan.name,
                      priceMonth: plan.priceMonth,
                      priceYear: plan.priceYear,
                      currPrice: planPrice(plan, subscriptionType),
                      // currPrice: planPrice(plan, subscriptionType),
                    },
                  });
                }}
              >
                <span>{plan.icon}</span>
                <h3>{plan.name}</h3>
                <p style={{ margin: 0 }}>
                  ${planPrice(plan, subscriptionType)}/{subType}
                </p>
              </div>
            ))}
          </div>
          {/* Switch package from npm */}
          <div className="switch-container">
            <h4 className={fontColorSwitcher("monthly")}>Monthly</h4>
            <Switch
              checked={switchBool}
              onChange={() => {
                dispatch({
                  type: "switch",
                  // payload: {
                  //   name: selectedPlan.name,
                  //   price: planPrice(selectedPlan.price, subscriptionType),
                  // },
                });
              }}
              checkedIcon={false}
              uncheckedIcon={false}
              height={22}
              width={40}
              offColor="#02295a"
              onColor="#02295a"
              handleDiameter={15}
              aria-label="switch to select plan: monthly or yearly"
            />
            <h4 className={fontColorSwitcher("yearly")}>Yearly</h4>
          </div>
        </InputsBox>
        <div className="buttons">
          <Button callback="go/back" type="btn-previous">
            Go back
          </Button>
          <Button sub="submit" type="btn-next">
            Next
          </Button>
        </div>
      </form>
    </>
  );
}
// <img src={plan.icon} alt=`plan name: ${plan.name}` /

export default StepTwoLayout;
