
import { useMutation } from "@tanstack/react-query";
import authApiRequest from "../api/authApi";

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.logout,
  });
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.login,
  });
};
