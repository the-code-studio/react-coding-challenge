export type ToastType = "success" | "error" | "warning";

export type ToastInput = {
  type: ToastType;
  ttl: number | null;
  body: React.ReactNode;
};

export type ToastStats = {
  success: number;
  warning: number;
  error: number;
};
