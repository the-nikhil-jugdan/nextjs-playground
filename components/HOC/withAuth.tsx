import React, { useEffect } from "react";
import useUser from "@/contexts/userContext";
import { useRouter } from "next/router";

const withAuth = (Component) => {
  function AuthComponent() {
    const router = useRouter();
    const { isLoggedIn } = useUser();
    useEffect(() => {
      if (!isLoggedIn) {
        router.push("/login");
      }
    }, [isLoggedIn]);
    if (!isLoggedIn) {
      return <></>;
    }
    return <Component />;
  }

  return AuthComponent;
};

export default withAuth;
