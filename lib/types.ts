import { Dispatch, SetStateAction } from "react";

export type AddPinModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  handleSubmit: () => void;
};

export type Pin = {
  lat: number;
  lng: number;
  title: string;
  category?: Category;
  description: string;
};

export type Category =
  | "cafes"
  | "bars"
  | "restaurants"
  | "shops"
  | "parks"
  | "hikes"
  | "pending";

export type Coords = {
  lat: number;
  lng: number;
};
