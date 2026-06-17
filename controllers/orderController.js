import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
// Placing order using COD method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: "false",
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndDelete(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Placing order using Stripe method
const placeOrderStripe = async (req, res) => {};

// Placing order using Razorpay method
const placeOrderRazorpay = async (req, res) => {};

// All orders for admin panel
const allOrders = async (req, res) => {};

// User order data for frontend
const userOrders = async (req, res) => {};

// update order status from admin panel
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
};
