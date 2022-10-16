import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "../components/Header/Header.component";

type AuthGuardProps = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    },
  });

  // useEffect(() => {
  //   console.log(session, "hehehehehe");
  //   if (!session) {
  //     router.push("/");
  //   }
  // }, [session]);

  // if (!session) {
  //   router.push("/");
  // }

  if (status == "loading") {
    return <div>loading....</div>;
  }

  if (session) {
    return (
      <div className="flex h-screen w-screen flex-col">
        <Header session={session} />
        <div className="w-full flex-1 overflow-y-auto p-4 md:p-8">{children}</div>
      </div>
    );
  }

  return null;
};

export default AuthGuard;
