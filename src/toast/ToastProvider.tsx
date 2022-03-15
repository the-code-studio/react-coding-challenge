import { ToastContext } from "./ToastContext";

type Props = {
  children: React.ReactNode;
};

// your mission: implement this component
export function ToastProvider(props: Props) {
  const { children } = props;

  return (
    <ToastContext.Provider
      value={{
        stats: null,
        addToast: () => {
          throw new Error("not implemented");
        },
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}
