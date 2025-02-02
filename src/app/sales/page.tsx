"use client";
import React from "react";
import { motion } from "framer-motion";
import * as LucideIcon from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const salesStats = {
  totalRevenue: 1234567,
  averageOrderValue: 7890,
  conversionRate: 3.45,
  salesGrowth: 12.3,
};
const Sales = () => {
  const StatCard = dynamic(() => import("../components/StatCard"), {
    ssr: false,
  });
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales Dashboard" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* SALES STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Revenue"
            icon={LucideIcon.DollarSign}
            moneyType="$"
            value={salesStats.totalRevenue}
            color="#6366F1"
            percentance=""
          />
          <StatCard
            name="Avg. Order Value"
            icon={LucideIcon.ShoppingCart}
            moneyType="$"
            value={salesStats.averageOrderValue}
            color="#10B981"
            percentance=""
          />
          <StatCard
            name="Conversion Rate"
            icon={LucideIcon.TrendingUp}
            moneyType=""
            value={salesStats.conversionRate}
            color="#F59E0B"
            percentance="%"
          />
          <StatCard
            name="Avg. Order Value"
            icon={LucideIcon.CreditCard}
            moneyType=""
            value={salesStats.salesGrowth}
            color="#EF4444"
            percentance="%"
          />
        </motion.div>

        <SalesOverviewChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
};

export default Sales;
