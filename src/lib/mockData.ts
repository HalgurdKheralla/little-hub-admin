// Mock data for the admin dashboard

export const dashboardMetrics = {
  totalRevenue: 1247500,
  revenueChange: 12.5,
  activeUsers: 8543,
  usersChange: 8.2,
  totalVendors: 234,
  vendorsChange: 5.7,
  activeProducts: 4521,
  productsChange: 15.3,
  monthlyOrders: 3421,
  ordersChange: 22.1,
  conversionRate: 3.8,
  conversionChange: 1.2,
};

export const revenueData = [
  { date: "Jan", revenue: 85000 },
  { date: "Feb", revenue: 92000 },
  { date: "Mar", revenue: 98000 },
  { date: "Apr", revenue: 105000 },
  { date: "May", revenue: 115000 },
  { date: "Jun", revenue: 125000 },
];

export const mockUsers = [
  { id: "1", name: "Sarah Johnson", email: "sarah.j@example.com", role: "Customer", status: "Active", joinDate: "2024-01-15", orders: 12, spent: 2450 },
  { id: "2", name: "Emily Chen", email: "emily.c@example.com", role: "Customer", status: "Active", joinDate: "2024-02-20", orders: 8, spent: 1890 },
  { id: "3", name: "Michael Brown", email: "m.brown@example.com", role: "Vendor", status: "Active", joinDate: "2024-01-10", orders: 0, spent: 0 },
  { id: "4", name: "Jessica Martinez", email: "jess.m@example.com", role: "Customer", status: "Inactive", joinDate: "2023-11-05", orders: 3, spent: 450 },
  { id: "5", name: "David Lee", email: "david.lee@example.com", role: "Customer", status: "Active", joinDate: "2024-03-12", orders: 15, spent: 3200 },
];

export const mockVendors = [
  {
    id: "1",
    businessName: "Baby Bliss Co.",
    ownerName: "Michael Brown",
    email: "contact@babybliss.com",
    status: "Approved",
    products: 45,
    totalSales: 125000,
    commission: 15,
    pendingPayout: 5250,
    rating: 4.8,
    joinDate: "2024-01-10",
  },
  {
    id: "2",
    businessName: "Tiny Treasures",
    ownerName: "Amanda White",
    email: "hello@tinytreasures.com",
    status: "Approved",
    products: 32,
    totalSales: 89000,
    commission: 15,
    pendingPayout: 3120,
    rating: 4.6,
    joinDate: "2024-02-05",
  },
  {
    id: "3",
    businessName: "Kids Corner",
    ownerName: "Robert Taylor",
    email: "info@kidscorner.com",
    status: "Pending",
    products: 0,
    totalSales: 0,
    commission: 15,
    pendingPayout: 0,
    rating: 0,
    joinDate: "2024-06-20",
  },
];

export const mockProducts = [
  {
    id: "1",
    name: "Organic Cotton Baby Onesie Set",
    vendor: "Baby Bliss Co.",
    category: "Clothing",
    price: 29.99,
    stock: 150,
    sold: 234,
    status: "Active",
    featured: true,
    rating: 4.9,
    image: "baby-onesie",
  },
  {
    id: "2",
    name: "Wooden Montessori Toy Set",
    vendor: "Tiny Treasures",
    category: "Toys",
    price: 49.99,
    stock: 85,
    sold: 156,
    status: "Active",
    featured: true,
    rating: 4.7,
    image: "wooden-toys",
  },
  {
    id: "3",
    name: "Baby Safety Gate - Extra Wide",
    vendor: "Kids Corner",
    category: "Safety",
    price: 89.99,
    stock: 42,
    sold: 89,
    status: "Pending Review",
    featured: false,
    rating: 0,
    image: "safety-gate",
  },
];

export const mockArticles = [
  {
    id: "1",
    title: "Safe Sleep Practices for Newborns",
    author: "Dr. Sarah Johnson",
    category: "Health & Safety",
    status: "Published",
    views: 4521,
    publishDate: "2024-05-15",
    featured: true,
  },
  {
    id: "2",
    title: "Introduction to Montessori Learning",
    author: "Emily Chen",
    category: "Education",
    status: "Published",
    views: 3890,
    publishDate: "2024-05-20",
    featured: false,
  },
  {
    id: "3",
    title: "First Foods: A Complete Guide",
    author: "Dr. Michael Brown",
    category: "Nutrition",
    status: "Draft",
    views: 0,
    publishDate: "",
    featured: false,
  },
];

export const mockActivities = [
  { id: "1", type: "order", user: "Sarah Johnson", action: "placed an order", time: "2 minutes ago", amount: "$125.50" },
  { id: "2", type: "vendor", user: "Kids Corner", action: "submitted product for approval", time: "15 minutes ago" },
  { id: "3", type: "user", user: "Emily Chen", action: "joined the platform", time: "1 hour ago" },
  { id: "4", type: "order", user: "David Lee", action: "completed purchase", time: "2 hours ago", amount: "$89.99" },
  { id: "5", type: "article", user: "Dr. Sarah Johnson", action: "published new article", time: "3 hours ago" },
];
