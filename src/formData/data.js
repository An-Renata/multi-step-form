import { ReactComponent as Arcade } from "../images/icon-arcade.svg";
import { ReactComponent as Advanced } from "../images/icon-advanced.svg";
import { ReactComponent as Pro } from "../images/icon-pro.svg";

const steps = [
  { step: 1, text: "Your info" },
  { step: 2, text: "Select Plan" },
  { step: 3, text: "Add-ons" },
  { step: 4, text: "Summary" },
];

const planCards = [
  {
    icon: <Arcade />,
    name: "Arcade",
    priceMonth: 9,
    priceYear: 90,
    currPrice: 9,
  },
  {
    icon: <Advanced />,
    name: "Advanced",
    priceMonth: 12,
    priceYear: 120,
    currPrice: 12,
  },
  {
    icon: <Pro />,
    name: "Pro",
    priceMonth: 15,
    priceYear: 150,
    currPrice: 15,
  },
];

const addOnsData = [
  {
    title: "Online service",
    text: "Access to multiplayer games",
    priceMonth: 1,
    priceYear: 10,
    currPrice: 1,
  },
  {
    title: "Larger storage",
    text: "Extra 1TB of cloud save",
    priceMonth: 2,
    priceYear: 20,
    currPrice: 2,
  },
  {
    title: "Customizable Profile",
    text: "Custom theme on your profile",
    priceMonth: 1,
    priceYear: 20,
    currPrice: 1,
  },
];

export { steps, addOnsData, planCards };
