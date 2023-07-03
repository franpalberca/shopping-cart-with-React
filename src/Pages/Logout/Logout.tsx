import { useEffect } from "react";
import { useAuthContext } from "../../config/context/AuthContext";


export const Logout = () => {
  const {logout} = useAuthContext();
  useEffect(() => logout());
  return null
}
