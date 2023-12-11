import StepInfoHeader from "./StepInfoHeader";
import { useForm } from "../contexts/FormContext";

function StepOneLayout() {
  // giving input values, to persist them throughout steps, using disptach function to save the state value
  const { name, email, phoneNumber, dispatch } = useForm();

  return (
    <>
      {/* Created separate component, to reuse it in later steps */}
      <StepInfoHeader
        header="Personal info"
        paragraph="Please provide your name, email address, and phone number"
      />
      <div className="inputs-box">
        <div className="inputs">
          <label htmlFor="firstName">Name</label>
          <input
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
            type="text"
            placeholder="e.g. +1 234 567 890"
            id="phoneNumber"
            // dispatch function to save the phoen number value
            onChange={(e) =>
              dispatch({ type: "phoneNumber", payload: e.target.value })
            }
            value={phoneNumber}
          ></input>
        </div>
      </div>
    </>
  );
}

export default StepOneLayout;
