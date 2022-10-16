import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Icon } from "@iconify/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Card from "../../components/Card/card.component";
import CountUp from "react-countup";
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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Home = () => {
  const router = useRouter();
  return (
    <div className="min-w-7xl mx-auto max-w-7xl">
      <h1 className="mt-5 p-0 text-lg font-semibold md:px-2">
        ACCOUNT DETAILS
      </h1>
      <div className="flex w-full flex-col gap-8 p-0  md:w-3/5 md:flex-row md:p-2">
        <Card className="flex flex-1 cursor-pointer items-center gap-5">
          <Icon icon="el:key" width="75px" height="75px" />
          <div className="flex-1">
            <div className="text-xl font-semibold">API KEY</div>
            <div className="font-normal text-gray-500">
              ewekadknwefwekd87wkej8knweu
            </div>
          </div>
        </Card>
        <Card className="flex flex-1 cursor-pointer items-center gap-5">
          <Icon icon="bi:shield-lock-fill" width="75px" height="75px" />
          <div className="flex-1">
            <div className="text-xl font-semibold">API SECRET</div>
            <div className="font-normal text-gray-500">
              ewekadknwefwekd87wkej8knweu
            </div>
          </div>
        </Card>{" "}
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
            <CountUp end={5} duration={1} />{" "}
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
              data={data}
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
