"use client";
import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import StatCard from "../components/StatCard";
import * as LucideIcon from "lucide-react";
import dynamic from "next/dynamic";
import CategoryDistributionChart from "../components/overviews/CategoryDistributionChart/CategoryDistributionChart";
import SalesOverview from "../components/overviews/SalesOverview/SalesOverview";
import ProductTable from "../components/Products/ProductTable";
import SalesTree from "../components/overviews/products/SalesTree";

const Products = () => {
  const StatCard = dynamic(() => import("../components/StatCard"), {
    ssr: false,
  });
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />
      <main className="max-w-full mx-1 py-6 px-12 lg:px-12 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <StatCard
            name="Total Products"
            icon={LucideIcon.Package}
            moneyType=""
            value={1234}
            color="#6366F1"
            percentance=""
          />
          <StatCard
            name="Top Selling"
            icon={LucideIcon.TrendingUp}
            moneyType=""
            value={89}
            color="#10B981"
            percentance=""
          />
          <StatCard
            name="Low Stock"
            icon={LucideIcon.AlertTriangle}
            moneyType=""
            value={23}
            color="#F59E0B"
            percentance=""
          />
          <StatCard
            name="Total Revenue"
            icon={LucideIcon.DollarSign}
            moneyType="$"
            value={543210}
            color="#EF4444"
            percentance=""
          />
        </motion.div>
        {/* ProductTable */}
        <ProductTable />
        <motion.div
         initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
         className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTree />
                    <CategoryDistributionChart />
        </motion.div>
      </main>
    </div>
  );
};

export default Products;
