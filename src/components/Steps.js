import { useForm } from "../contexts/FormContext";

const steps = [
  { step: 1, text: "Your info" },
  { step: 2, text: "Select Plan" },
  { step: 3, text: "Add-ons" },
  { step: 4, text: "Summary" },
];

// className = "active-step";
function Steps() {
  const { index } = useForm();

  return (
    <>
      {steps.map((step) => (
        <div className="step" key={step.step}>
          <span className={step.step === index + 1 ? "active-step" : ""}>
            {step.step}
          </span>
          <div>
            <p>Step {step.step}</p>
            <h3>{step.text}</h3>
          </div>
        </div>
      ))}
    </>
  );
}

export default Steps;
