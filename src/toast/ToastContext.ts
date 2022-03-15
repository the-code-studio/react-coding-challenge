import { createContext } from "react";
import { ToastInput, ToastStats } from "./types";

type ToastContextValue = {
  stats: ToastStats | null;
  addToast: (props: ToastInput) => void;
};

export const ToastContext = createContext<ToastContextValue>({
  stats: null,
  addToast: () => {
    throw new Error("not implemented");
  },
});
