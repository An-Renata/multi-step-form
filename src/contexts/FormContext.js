import { createContext, useContext, useReducer } from "react";

const FormContext = createContext();

const initialState = {
  index: 0,
  name: "",
  email: "",
  phoneNumber: "",
  switchBool: false,
  plan: {},
  subscriptionType: "monthly",
  addOns: [],
  isChecked: false,
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
        subscriptionType: !state.switchBool ? "yearly" : "monthly",
      };
    case "select/add/ons":
      //   returns true value if title is already on the addOns array, otherwise false
      const titleExists = state.addOns
        .map((addOn) => addOn.title)
        .includes(action.payload.title);

      // If user clicks the same add-on to disable the selection, state.addOns should filter that title out of the array
      if (titleExists) {
        return {
          ...state,
          isChecked: false,
          addOns: state.addOns.filter(
            (title) => title.title !== action.payload.title
          ),
        };
      }
      //   If user pick doesn't match the same title, add it to the array
      return {
        ...state,
        addOns: [
          ...state.addOns,
          { title: action.payload.title, price: action.payload.price },
        ],
        isChecked: true,
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
      addOns,
      isChecked,
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
        addOns,
        isChecked,

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
