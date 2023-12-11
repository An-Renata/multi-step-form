import { useForm } from "../contexts/FormContext";
import StepInfoHeader from "./StepInfoHeader";
import Button from "./Button.js";
function Summary() {
  const { plan, subscriptionType, addOns } = useForm();

  const total = plan.price + addOns.reduce((acc, curr) => acc + curr.price, 0);

  console.log(plan);
  return (
    <>
      <StepInfoHeader
        header="Finishing up"
        paragraph="Double-chek everything looks OK before confirming"
      />

      <div className="inputs-box">
        <div className="summary-info">
          {/* <div className="highlited"> */}
          <div className="summary">
            <div>
              <h4>
                {plan.name} ({subscriptionType})
              </h4>
              <button className="change-plan">Change</button>
            </div>
            <span>+${plan.price}/mo</span>
          </div>
          {/* Should be displayed depending on what ad-ons user selected */}
          {addOns.map((adds) => (
            <div className="summary" key={adds.title}>
              <p>{adds.title}</p>
              <span>+${adds.price}/mo</span>
            </div>
          ))}

          <div className="summary total">
            <p>
              Total (per {subscriptionType === "monthly" ? "month" : "year"})
            </p>
            <span>
              +${total}/{subscriptionType === "monthly" ? "mo" : "yr"}
            </span>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Button callback="go/back" type="btn-previous">
          Go back
        </Button>
        <Button callback="go/next" type="btn-next">
          Confirm
        </Button>
      </div>
    </>
  );
}

export default Summary;
