import StepInfoHeader from "./StepInfoHeader";
function StepThreeLayout() {
  return (
    <>
      <StepInfoHeader
        header="Pick add-ons"
        paragraph="Add-ons help enhance your gaming experience."
      />
      <div className="inputs-box">
        <div className="add-ons">
          <div className="add-on">
            <input type="checkbox"></input>
            <div>
              <h4>Online service</h4>
              <p>Access to multiplayer games</p>
            </div>
            <span>+$1/mo</span>
          </div>

          <div className="add-on">
            <input type="checkbox"></input>
            <div>
              <h4>Larger storage</h4>
              <p>Extra 1TB of cloud save</p>
            </div>
            <span>+$2/mo</span>
          </div>

          <div className="add-on">
            <input type="checkbox"></input>
            <div>
              <h4>Customizable Profile</h4>
              <p>Custom theme on your profile</p>
            </div>
            <span>+$1/mo</span>
          </div>
        </div>
        {/* <div className="buttons">
          <Button type="btn-previous">Go back</Button>
          <Button type="btn-next">Next step</Button>
        </div> */}
      </div>
    </>
  );
}

export default StepThreeLayout;
