import StepInfoHeader from "./StepInfoHeader";
import Button from "./Button.js";
function Summary() {
  return (
    <>
      <StepInfoHeader
        header="Finishing up"
        paragraph="Double-chek everything looks OK before confirming"
      />

      <div className="inputs-box">
        <div className="summary-info">
          <div className="highlited">
            <div className="summary">
              <div>
                <h4>Arcade (Monthly)</h4>
                <button className="change-plan">Change</button>
              </div>
              <span>+$9/mo</span>
            </div>
            {/* Should be displayed depending on what ad-ons user selected */}
            <div className="summary ">
              <p>Online service</p>
              <span>+$1/mo</span>
            </div>

            <div className="summary">
              <p>Larger Storage</p>
              <span>+$1/mo</span>
            </div>
          </div>
          <div className="summary total">
            <p>Total (per month)</p>
            <span>+$12/mo</span>
          </div>
        </div>
        {/* <div className="buttons">
          <Button type="btn-previous">Go back</Button>
          <Button type="btn-next">Confirm</Button>
        </div> */}
      </div>
    </>
  );
}

export default Summary;
