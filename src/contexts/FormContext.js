import { createContext, useContext, useReducer } from "react";

const FormContext = createContext();

const initialState = {
  index: 0,
  name: "",
  email: "",
  phoneNumber: "",
  switchBool: false,
  plan: "",
  subscriptionType: "monthly",
};

function reducer(state, action) {
  switch (action.type) {
    case "go/next":
      return { ...state, index: state.index === 4 ? 4 : state.index + 1 };
    case "go/back":
      return { ...state, index: state.index === 0 ? 0 : state.index - 1 };
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "phoneNumber":
      return { ...state, phoneNumber: action.payload };
    case "plan":
      return { ...state, plan: action.payload };
    case "switch":
      return {
        ...state,
        switchBool: !state.switchBool,
        subscriptionType:
          state.subscriptionType === false ? "monthly" : "yearly",
      };
    default:
      throw new Error("Unknown action");
  }
}

function FormProvider({ children }) {
  const [
    {
      status,
      index,
      name,
      email,
      phoneNumber,
      switchBool,
      plan,
      subscriptionType,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider
      value={{
        status,
        index,
        name,
        email,
        phoneNumber,
        switchBool,
        plan,
        subscriptionType,
        dispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("FormContext was used outside the FormProvider");
  }

  return context;
}

export { FormProvider, useForm };
