import { createContext, useContext, useReducer } from "react";
import { planCards, addOnsData } from "../formData/data.js";

const FormContext = createContext();

const initialState = {
  index: 0,
  name: "",
  email: "",
  phoneNumber: "",
  plans: planCards,
  addOnsData: addOnsData,
  switchBool: false,
  isChanged: false,
  plan: { name: "", priceMonth: 0, priceYear: 0, currPrice: 0 },
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
    // Switch button which changes the state of subscription type from monthly to yearly.
    // Based on the current subscription type, the plan and add-ons prices should be displayed accordingly to their pricelist
    case "switch":
      const newSubscriptionType = !state.switchBool ? "yearly" : "monthly";

      // Update plan prices in the UI if the subscription type changes
      const updatePlanPrice = {
        ...state.plan,
        currPrice:
          newSubscriptionType === "monthly"
            ? state.plan.priceMonth
            : state.plan.priceYear,
      };
      // If subscription types changes, update the price in UI
      const updatedAddOnsPrice = state.addOnsData.map((add) => {
        return {
          ...add,
          currPrice:
            newSubscriptionType === "monthly" ? add.priceMonth : add.priceYear,
        };
      });

      // Update not only the UI and new selected add-ons but also the ones, that are already selected.
      const updateSelectedAddOnsPrice = state.addOns?.map((add) => {
        return {
          ...add,
          currPrice:
            newSubscriptionType === "monthly" ? add.priceMonth : add.priceYear,
        };
      });

      return {
        ...state,
        switchBool: !state.switchBool,
        subscriptionType: newSubscriptionType,
        plan: updatePlanPrice,
        addOnsData: updatedAddOnsPrice,
        addOns: updateSelectedAddOnsPrice,
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
          {
            title: action.payload.title,
            priceMonth: action.payload.priceMonth,
            priceYear: action.payload.priceYear,
            currPrice: action.payload.currPrice,
          },
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
      isValid,
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
      addOnsData,
      plans,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const subType = subscriptionType === "monthly" ? "mo" : "yr";

  // Function to bolden the selected plan
  function fontColorSwitcher(switchType) {
    if (subscriptionType === switchType) return "active";
  }

  // to avoid repetition, created a function to evaluate which plan is selected and based on that return the correct price
  function planPrice(plan, subscriptionType) {
    if (subscriptionType === "monthly") {
      return plan?.currPrice;
    }
    return plan?.priceYear;
  }

  return (
    <FormContext.Provider
      value={{
        isValid,
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
        subType,
        fontColorSwitcher,
        planPrice,
        addOnsData,
        plans,
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
