import { toast } from "react-toastify";

export const successMessage = (text) =>
  toast.success(text, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    pauseOnHover: true,
    progress: undefined,
    theme: "light",
  });
export const errorMessage = (text) =>
  toast.error(text, {
    position: "top-right",
    autoClose: 2500,

    hideProgressBar: false,
    pauseOnHover: true,
    progress: undefined,
    theme: "light",
  });
