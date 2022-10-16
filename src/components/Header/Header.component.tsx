import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Session } from "next-auth";
import Link from "next/link";

const Header = ({ session }: { session: Session }) => {
  return (
    <div className="flex h-14 w-screen cursor-pointer items-center justify-between bg-primary px-8">
      <Link href="/home">
        <div className="text-lg md:text-xl font-semibold md:font-bold text-text3">web reward system</div>
      </Link>
      <div className="flex gap-5 items-center" >
        <div className="hidden items-center gap-5 md:flex">
          <Icon
            icon="fluent:add-circle-16-filled"
            color="white"
            width="22px"
            height="22px"
          />
          <Icon
            icon="ci:settings-filled"
            color="white"
            width="22px"
            height="22px"
          />
          <Icon
            icon="ic:baseline-notifications"
            color="white"
            width="22px"
            height="22px"
          />
          <Icon
            icon="bxs:help-circle"
            color="white"
            width="22px"
            height="22px"
          />
        </div>
        <img
          src={
            session.user?.image ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          }
          alt=""
          className="h-8 w-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
