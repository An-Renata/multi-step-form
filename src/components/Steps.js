import { useForm } from "../contexts/FormContext";
import { steps } from "../formData/data";

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
