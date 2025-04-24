import { Category } from "./types";

export const getIconUrlForCategory = (category?: Category): string => {
  switch (category) {
    case "cafes":
      return "/icons/coffee-duotone.svg";
    case "bars":
      return "/icons/martini-duotone.svg";
    case "restaurants":
      return "/icons/fork-knife-duotone.svg";
    case "shops":
      return "/icons/shopping-cart-duotone.svg";
    case "parks":
      return "/icons/tree-duotone.svg";
    case "hikes":
      return "/icons/mountains-duotone.svg";
    case "pending":
      return "/icons/question-duotone.svg";
    default:
      return "/icons/file-svg-duotone.svg";
  }
};
