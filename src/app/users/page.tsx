"use client";
import React from "react";
import { motion } from "framer-motion";
import * as LucideIcon from "lucide-react";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import UserTable from "../components/users/UserTable";
import UserActivityHeatmap from "../components/overviews/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/overviews/users/UserDemographicsChart";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: 2.4,
};

const Users = () => {
  const StatCard = dynamic(() => import("../components/StatCard"), {
    ssr: false,
  });
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <main className="max-w-full mx-1 py-6 px-12 lg:px-12 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={LucideIcon.UsersIcon}
            moneyType=""
            value={userStats.totalUsers}
            color="#10B981"
            percentance=""
          />
          <StatCard
            name="New Users Today"
            icon={LucideIcon.UserPlus}
            moneyType=""
            value={userStats.newUsersToday}
            color="#F59E0B"
            percentance=""
          />
          <StatCard
            name="Active Users"
            icon={LucideIcon.UserCheck}
            moneyType=""
            value={userStats.activeUsers}
            color="#F59E0B"
            percentance=""
          />
          <StatCard
            name="Churn Rate"
            icon={LucideIcon.UserX}
            moneyType=""
            value={userStats.churnRate}
            color="#EF4444"
            percentance="%"
          />
        </motion.div>
        <UserTable />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserDemographicsChart />
          <UserActivityHeatmap />
        </div>
      </main>
    </div>
  );
};

export default Users;
