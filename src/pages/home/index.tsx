import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Card from "../../components/Card/card.component";
import CountUp from "react-countup";
import { trpc } from "../../utils/trpc";
import { useBoundStore } from "../../store/store";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data1 = [
  {
    name: "Sunday",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Monday",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Tuesday",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Wednesday",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Thrusday",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Friday",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Saturday",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Home = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const setUser = useBoundStore((state) => state.setUser);

  const { isLoading, data, refetch } = trpc.useQuery(
    ["user.userData", { id: session?.user?.id || "" }],
    {
      onSuccess: (data) => {
        console.log(data, "the data is here");
        setUser(data?.user || null);
      },
    }
  );

  const keyMutation = trpc.useMutation(["user.generateKeys"], {
    onSuccess: (data) => {
      console.log(data, "hehehehe");
      refetch();
    },
  });

  const handleGenerateKey = () => {
    keyMutation.mutate({
      id: session?.user?.id || "",
    });
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (isLoading) {
    return <h1>loading....</h1>;
  }

  return (
    <div className="min-w-7xl mx-auto max-w-7xl">
      <div className="mt-5 flex w-full items-center justify-between gap-5">
        <h1 className="p-0 text-lg font-semibold md:px-2">ACCOUNT DETAILS</h1>
        <button
          className="flex items-center gap-2  rounded-md bg-primary py-2 px-8 text-sm text-text3"
          onClick={handleGenerateKey}
        >
          GENERATE <Icon icon="el:key" width="20px" height="20px" />
        </button>
      </div>
      <div className="flex w-full flex-col gap-8 p-0  md:w-3/5 md:flex-row md:p-2">
        <Card
          className="flex flex-1 cursor-pointer items-center gap-5"
          onClick={() => {
            handleCopyText(data?.user?.apiKey || "");
          }}
        >
          <Icon icon="el:key" width="75px" height="75px" />
          <div className="flex-1">
            <div className="text-xl font-semibold">API KEY</div>
            <div className="font-normal text-gray-500">
              {data?.user?.apiKey || "-"}
            </div>
          </div>
          <Icon icon="fluent:copy-16-filled" width="25px" height="25px" />
        </Card>
        <Card
          className="flex flex-1 cursor-pointer items-center gap-5"
          onClick={() => {
            handleCopyText(data?.user?.apiSecret || "");
          }}
        >
          <Icon icon="bi:shield-lock-fill" width="75px" height="75px" />
          <div className="flex-1">
            <div className="text-xl font-semibold">API SECRET</div>
            <div className="font-normal text-gray-500">
              {data?.user?.apiSecret || "-"}
            </div>
          </div>
          <Icon icon="fluent:copy-16-filled" width="25px" height="25px" />
        </Card>
      </div>
      <h1 className="mt-5 px-2 text-lg font-semibold">DASHBOARD</h1>
      <div className="flex w-full flex-col gap-3 p-2 md:flex-row md:gap-8 ">
        <Card
          className="flex flex-1 cursor-pointer items-center gap-5"
          onClick={() => {
            console.log("oooop");
            router.push("/projects");
          }}
        >
          <div className="w-1/5 text-center text-2xl font-semibold md:w-fit md:text-5xl md:font-bold ">
            <CountUp end={data?.user?.projects.length || 0} duration={1} />{" "}
          </div>
          <div>
            <div className="text-lg font-semibold md:text-xl">Projects</div>
            <div className="font-normal text-gray-500">View all projects!</div>
          </div>
        </Card>
        <Card className="flex flex-1 cursor-pointer items-center gap-5">
          <div className="w-1/5 text-center text-2xl font-semibold md:w-fit md:text-5xl md:font-bold ">
            <CountUp end={2.3} decimal="." decimals={1} duration={1} /> k
          </div>
          <div>
            <div className="text-xl font-semibold">Users</div>
            <div className="font-normal text-gray-500">View all users!</div>
          </div>
        </Card>{" "}
        <Card className="flex flex-1 cursor-pointer items-center gap-5">
          <div className="w-1/5 text-center text-2xl font-semibold md:w-fit md:text-5xl md:font-bold ">
            <CountUp end={3} duration={1} />
          </div>
          <div>
            <div className="text-xl font-semibold">Reward Models</div>
            <div className="font-normal text-gray-500">View all models!</div>
          </div>
        </Card>
      </div>
      <h1 className="mt-5 px-2 text-lg font-semibold">OVERALL ANALYTICS</h1>
      <div className="mt-4 h-fit w-full rounded-2xl p-5 shadow-shadow1">
        <h1 className="mb-5 font-semibold">USER LOGINS</h1>
        <div className="h-64 w-full  md:w-4/5">
          <ResponsiveContainer height="100%" width="100%">
            <LineChart
              width={730}
              height={250}
              data={data1}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              {/* <YAxis /> */}
              <Tooltip />
              <Legend />
              <Line
                type="linear"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={3}
              />
              <Line
                type="linear"
                dataKey="uv"
                stroke="#82ca9d"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <button onClick={() => signOut()}>LOG OUT</button>
    </div>
  );
};

Home.requireAuth = true;

export default Home;
