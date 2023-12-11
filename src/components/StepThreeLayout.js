import { useForm } from "../contexts/FormContext";
import StepInfoHeader from "./StepInfoHeader";
import { addOnsData } from "../formData.js/data";

function StepThreeLayout() {
  const { dispatch, addOns, isChecked } = useForm();

  return (
    <>
      <StepInfoHeader
        header="Pick add-ons"
        paragraph="Add-ons help enhance your gaming experience."
      />
      <div className="inputs-box">
        <div className="add-ons">
          {addOnsData.map((data) => (
            <div
              key={data.title}
              // add selected-add-ons class if data is in the array to highligh the selection
              className={`add-on ${
                addOns.map((addOn) => addOn?.title).includes(data.title)
                  ? "selected-add-ons"
                  : ""
              }`}
              // Add the selected add-ons to the addOns array and filter them out if user clicks on the item again
              onClick={() =>
                dispatch({
                  type: "select/add/ons",
                  payload: { title: data.title, price: data.price },
                })
              }
            >
              <input
                type="checkbox"
                // activate checked attribute if data is in the addOns array
                checked={
                  addOns.map((addOn) => addOn?.title).includes(data.title)
                    ? true
                    : false
                }
                onChange={() => isChecked}
              ></input>
              <div>
                <h4>{data.title}</h4>
                <p>{data.text}</p>
              </div>
              <span>+${data.price}/mo</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StepThreeLayout;
