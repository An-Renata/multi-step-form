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
    price: 9,
  },
  {
    icon: <Advanced />,
    name: "Advanced",
    price: 12,
  },
  {
    icon: <Pro />,
    name: "Pro",
    price: 15,
  },
];

const addOnsData = [
  { title: "Online service", text: "Access to multiplayer games", price: 1 },
  { title: "Larger storage", text: "Extra 1TB of cloud save", price: 2 },
  {
    title: "Customizable Profile",
    text: "Custom theme on your profile",
    price: 1,
  },
];

export { steps, addOnsData, planCards };
