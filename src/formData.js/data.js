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
  },
  {
    icon: <Advanced />,
    name: "Advanced",
    priceMonth: 12,
    priceYear: 120,
  },
  {
    icon: <Pro />,
    name: "Pro",
    priceMonth: 15,
    priceYear: 150,
  },
];

const addOnsData = [
  {
    title: "Online service",
    text: "Access to multiplayer games",
    priceMonth: 1,
    priceYear: 10,
  },
  {
    title: "Larger storage",
    text: "Extra 1TB of cloud save",
    priceMonth: 2,
    priceYear: 20,
  },
  {
    title: "Customizable Profile",
    text: "Custom theme on your profile",
    priceMonth: 1,
    priceYear: 20,
  },
];

export { steps, addOnsData, planCards };
