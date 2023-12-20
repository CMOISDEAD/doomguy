import { isAxiosError } from "axios";
import notify from "./notify";

export const requestError = (error: unknown): boolean => {
  if (isAxiosError(error)) {
    if (error.response) {
      return true;
    } else if (error.request) {
      notify("The request was made but no response was received", {
        type: "error",
      });
    } else {
      notify(
        "Something happened in setting up the request that triggered an Error",
        { type: "error" },
      );
    }
  } else {
    notify(
      "Something happened in setting up the request that triggered an Error",
      {
        type: "error",
      },
    );
  }
  return false;
};
