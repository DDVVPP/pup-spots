import { Category } from "./types";

export const getIconPathAndColor = (
  category?: Category
): { iconPath: string; color: string } => {
  switch (category) {
    case "cafes":
      return {
        iconPath: "/icons/coffee-duotone.svg",
        color: "#754b10",
      };
    case "bars":
      return {
        iconPath: "/icons/martini-duotone.svg",
        color: "#49839c",
      };
    case "restaurants":
      return {
        iconPath: "/icons/fork-knife-duotone.svg",
        color: "#ffc800",
      };
    case "shops":
      return {
        iconPath: "/icons/shopping-cart-duotone.svg",
        color: "#9c59ee",
      };
    case "parks":
      return {
        iconPath: "/icons/tree-duotone.svg",
        color: "#1ab734",
      };
    case "hikes":
      return {
        iconPath: "/icons/mountains-duotone.svg",
        color: "#3a824c",
      };
    case "pending":
      return {
        iconPath: "/icons/question-duotone.svg",
        color: "#ff6e3d",
      };
    default:
      return {
        iconPath: "/icons/file-svg-duotone.svg",
        color: "#9ca3af",
      };
  }
};
