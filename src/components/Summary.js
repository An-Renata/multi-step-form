import { useForm } from "../contexts/FormContext";
import StepInfoHeader from "./StepInfoHeader";
import Button from "./Button.js";
import InputsBox from "./InputsBox.js";

function Summary() {
  const { plan, subscriptionType, addOns, subType, dispatch, planPrice } =
    useForm();

  // Calculate total price both from add-ons(if any) and the main plan
  const total =
    plan.currPrice + addOns.reduce((acc, curr) => acc + curr.currPrice, 0);

  // Function is for a change button.
  // After a click user could change from "monthly" to "yearly" subscription without going back in the form steps. New Prices will be displayed right in the summary step
  function handleChange() {
    dispatch({ type: "switch" });
  }

  return (
    <>
      <StepInfoHeader
        header="Finishing up"
        paragraph="Double-chek everything looks OK before confirming"
      />

      <InputsBox>
        <div className="summary-info">
          <div className="highlited">
            <div className="summary">
              <div>
                <h4>
                  {plan.name} ({subscriptionType})
                </h4>
                <button className="change-plan" onClick={handleChange}>
                  Change
                </button>
              </div>
              <span className="price-summary-plan">
                {/* Display price of the selected plan */}
                +${planPrice(plan, subscriptionType)}/mo
              </span>
            </div>
            {/* Should be displayed depending on what ad-ons user selected */}
            {addOns.map((adds) => (
              <div className="summary" key={adds.title}>
                <p>{adds.title}</p>
                <span>+${adds.currPrice}/mo</span>
              </div>
            ))}
            {/* ...................................... */}
          </div>
          <div className="summary total">
            <p>
              Total (per {subscriptionType === "monthly" ? "month" : "year"})
            </p>
            <span>
              +${total}/{subType}
            </span>
          </div>
        </div>
        <div className="buttons">
          <Button callback="go/back" type="btn-previous">
            Go back
          </Button>
          <Button callback="go/next" type="btn-next confirm-btn">
            Confirm
          </Button>
        </div>
      </InputsBox>
    </>
  );
}

export default Summary;
