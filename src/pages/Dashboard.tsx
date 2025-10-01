import { DollarSign, Users, Store, Package, ShoppingBag, TrendingUp } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { dashboardMetrics } from "@/lib/mockData";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's what's happening with your marketplace today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Total Revenue"
          value={`$${dashboardMetrics.totalRevenue.toLocaleString()}`}
          change={dashboardMetrics.revenueChange}
          icon={DollarSign}
          gradient
        />
        <MetricCard
          title="Active Users"
          value={dashboardMetrics.activeUsers.toLocaleString()}
          change={dashboardMetrics.usersChange}
          icon={Users}
        />
        <MetricCard
          title="Total Vendors"
          value={dashboardMetrics.totalVendors}
          change={dashboardMetrics.vendorsChange}
          icon={Store}
        />
        <MetricCard
          title="Active Products"
          value={dashboardMetrics.activeProducts.toLocaleString()}
          change={dashboardMetrics.productsChange}
          icon={Package}
        />
        <MetricCard
          title="Monthly Orders"
          value={dashboardMetrics.monthlyOrders.toLocaleString()}
          change={dashboardMetrics.ordersChange}
          icon={ShoppingBag}
        />
        <MetricCard
          title="Conversion Rate"
          value={`${dashboardMetrics.conversionRate}%`}
          change={dashboardMetrics.conversionChange}
          icon={TrendingUp}
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
