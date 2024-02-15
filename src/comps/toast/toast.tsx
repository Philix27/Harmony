import {
  Bounce,
  ToastContainer,
  ToastContainerProps,
  toast,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppToastController = toast;

export function AppToastContainer(props: ToastContainerProps) {
  return (
    <ToastContainer
      {...props}
      position={"top-center"}
      autoClose={5000}
      hideProgressBar={false}
      transition={Bounce}
      theme="colored"
      pauseOnHover
      newestOnTop
      closeOnClick
    />
  );
}
