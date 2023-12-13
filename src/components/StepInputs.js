import { useForm } from "../contexts/FormContext";
import ConfirmationText from "./ConfirmationText";
import StepOneLayout from "./StepOneLayout";
import StepThreeLayout from "./StepThreeLayout";
import StepTwoLayout from "./StepTwoLayout";
import Summary from "./Summary";

function StepInputs() {
  const { index } = useForm();

  return (
    <>
      {index === 0 && <StepOneLayout />}
      {index === 1 && <StepTwoLayout />}
      {index === 2 && <StepThreeLayout />}
      {index === 3 && <Summary />}
      {index === 4 && <ConfirmationText />}
    </>
  );
}

export default StepInputs;
