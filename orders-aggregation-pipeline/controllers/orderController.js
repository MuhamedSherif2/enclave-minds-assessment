const Order = require("../models/orderModel");

const getOrdersByCategory = async (req, res) => {
  try {
    const revenue = await Order.aggregate([
      { $match: { quantity: { $gt: 5 } } },
      { $project: { category: 1, revenue: { $multiply: ["$price", "$quantity"] } } },
      { $group: { _id: "$category", totalRevenue: { $sum: "$revenue" } } },
      { $sort: { totalRevenue: -1 } }
    ]);

    res.json({ success: true, data: revenue });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { getOrdersByCategory };
