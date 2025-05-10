import { useEffect, useState } from "react";
import { fetchOrders } from "../api/api";

export default function Orders({ token }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (token) {
      fetchOrders(token).then((data) => setOrders(data));
    }
  }, [token]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Orders</h2>
      <ul className="space-y-2">
        {orders.map((order) => (
          <li key={order._id} className="border p-2 rounded">
            <p><strong>User:</strong> {order.user?.name}</p>
            <p><strong>Total:</strong> ₹{order.totalPrice}</p>
            <p><strong>Status:</strong> {order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
