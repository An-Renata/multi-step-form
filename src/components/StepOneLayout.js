import StepInfoHeader from "./StepInfoHeader";
import { useForm } from "../contexts/FormContext";
import InputsBox from "./InputsBox";
import Button from "./Button.js";
function StepOneLayout() {
  // giving input values, to persist them throughout steps, using disptach function to save the state value
  const { name, email, phoneNumber, dispatch } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    // Check if all input fields are filled
    if (name === "" || email === "" || phoneNumber === "") return;

    dispatch({ type: "go/next" });
  }

  return (
    <>
      {/* Created separate component, to reuse it in later steps */}
      <StepInfoHeader
        header="Personal info"
        paragraph="Please provide your name, email address, and phone number"
      />
      <InputsBox>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">Name</label>
          <input
            required
            type="text"
            placeholder="e.g. Stephen King"
            id="firstName"
            // dispatch function to save the name value
            onChange={(e) =>
              dispatch({ type: "name", payload: e.target.value })
            }
            value={name}
          ></input>

          <label htmlFor="email">Email Address</label>
          <input
            required
            type="text"
            placeholder="e.g. Stephen King@lorem.com"
            id="email"
            // dispatch function to save the email value
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
            value={email}
          ></input>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            required
            type="text"
            placeholder="e.g. +1 234 567 890"
            id="phoneNumber"
            // dispatch function to save the phoen number value
            onChange={(e) =>
              dispatch({ type: "phoneNumber", payload: e.target.value })
            }
            value={phoneNumber}
          ></input>
          <div>
            <Button sub="submit" type="btn-next">
              Next
            </Button>
          </div>
        </form>
      </InputsBox>
    </>
  );
}

export default StepOneLayout;
