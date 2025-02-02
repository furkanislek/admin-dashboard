"use client"
import React from 'react'
import * as LucideIcon  from 'lucide-react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import DailyOrders from '../components/orders/DailyOrders';
import OrderDistribution from '../components/orders/OrderDistribution';
import OrdersTable from '../components/orders/OrdersTable';

const orderStats = {
  totalOrders: 1234,
  pendingOrders: 56,
  completed:1178,
  totalRevenue:98765
}
  const StatCard = dynamic(() => import("../components/StatCard"), {
    ssr: false,
  });
const Orders = () => {
  
 	return (
    <div className="flex-1 relative z-10 overflow-auto">
      <Header title={"Orders"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Orders"
            icon={LucideIcon.ShoppingBag}
            moneyType=""
            value={orderStats.totalOrders}
            color="#6366F1"
            percentance=''
          />
          <StatCard
            name="Pending Orders"
            icon={LucideIcon.Clock}
            moneyType=""
            value={orderStats.pendingOrders}
            color="#F59E0B"
            percentance=''
          />
          <StatCard
            name="Completed Orders"
            icon={LucideIcon.CheckCircle}
            moneyType=""
            value={orderStats.completed}
            color="#10B981"
            percentance=''
          />
          <StatCard
            name="Total Revenue"
            icon={LucideIcon.DollarSign}
            moneyType="$"
            value={orderStats.totalRevenue}
            color="#EF4444"
            percentance=''
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrders />
          <OrderDistribution />
        </div>

        <OrdersTable />
      </main>
    </div>
  );
}

export default Orders