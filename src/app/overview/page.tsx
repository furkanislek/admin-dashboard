"use client";
import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import * as LucideIcon from "lucide-react";
import dynamic from "next/dynamic";
import SalesOverview from "../components/overviews/SalesOverview/SalesOverview";
import SalesChannelChart from "../components/overviews/SalesChannelChart/SalesChannelChart";
import CategoryDistributionChart from "../components/overviews/CategoryDistributionChart/CategoryDistributionChart";

const Overview = () => {
  const StatCard = dynamic(() => import("../components/StatCard"), {
    ssr: false,
  });
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      <main className="max-w-full mx-1 py-6 px-12 lg:px-12 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <StatCard
            name="Total Sales"
            icon={LucideIcon.Zap}
            moneyType="$"
            value={12345}
            color="#6366F1"
            percentance=""
          />
          <StatCard
            name="New Users"
            icon={LucideIcon.Users}
            moneyType=""
            value={1234}
            color="#8B5CF6"
            percentance=""
          />
          <StatCard
            name="Total Products"
            icon={LucideIcon.ShoppingBag}
            moneyType=""
            value={598}
            color="#EC4899"
            percentance=""
          />
          <StatCard
            name="Conversion Rate"
            icon={LucideIcon.BarChart2}
            moneyType=""
            value={12.8}
            color="#10B981"
            percentance="%"
          />
        </motion.div>
        {/*CHARTs*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SalesOverview />
          <CategoryDistributionChart />
        </div>
        <div className="grid grid-cols-1 gap-4 mt-10">
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default Overview;
