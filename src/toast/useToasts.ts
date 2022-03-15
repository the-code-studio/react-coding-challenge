import { useContext } from "react";
import { ToastContext } from "./ToastContext";

export function useToasts() {
  return useContext(ToastContext);
}
