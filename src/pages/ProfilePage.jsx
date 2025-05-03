import { useEffect, useState } from "react";

function ProfilePage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // In a real app, fetch from backend. Here, mock from localStorage.
    const history = localStorage.getItem("orderHistory");
    setOrders(history ? JSON.parse(history) : []);
  }, []);

  return (
    <div style={{ maxWidth: 1100, margin: "3rem auto", padding: "0 1rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
        <div style={{ flex: "1 1 320px", maxWidth: 360 }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              marginBottom: 24,
            }}
          >
            <div style={{ padding: 32, textAlign: "center" }}>
              <div style={{ marginBottom: 16 }}>
                <img
                  src="https://ui-avatars.com/api/?name=Demo+User&background=0d6efd&color=fff&size=96"
                  alt="User Avatar"
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: "50%",
                    border: "3px solid #0d6efd",
                    marginBottom: 8,
                  }}
                />
              </div>
              <h4 style={{ fontWeight: 700, marginBottom: 4 }}>Demo User</h4>
              <p style={{ color: "#6b7280", marginBottom: 8 }}>
                demo@susisclothing.com
              </p>
              <span
                style={{
                  background: "#0d6efd",
                  color: "#fff",
                  borderRadius: 8,
                  padding: "0.25em 0.75em",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Customer
              </span>
            </div>
          </div>
        </div>
        <div style={{ flex: "2 1 500px", minWidth: 320 }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ padding: 32 }}>
              <h4
                style={{ fontWeight: 700, marginBottom: 24, color: "#0d6efd" }}
              >
                Order History
              </h4>
              {orders.length === 0 ? (
                <div
                  style={{
                    background: "#e0e7ff",
                    color: "#374151",
                    borderRadius: 8,
                    padding: 16,
                    marginBottom: 0,
                  }}
                >
                  No orders yet. Start shopping to see your orders here!
                </div>
              ) : (
                <div style={{ overflowX: "auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: 15,
                    }}
                  >
                    <thead style={{ background: "#f3f4f6" }}>
                      <tr>
                        <th style={{ textAlign: "left", padding: 12 }}>
                          Order #
                        </th>
                        <th style={{ textAlign: "left", padding: 12 }}>Date</th>
                        <th style={{ textAlign: "left", padding: 12 }}>
                          Total
                        </th>
                        <th style={{ textAlign: "left", padding: 12 }}>
                          Items
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, idx) => (
                        <tr
                          key={idx}
                          style={{ borderBottom: "1px solid #f3f4f6" }}
                        >
                          <td style={{ fontWeight: 600, padding: 12 }}>
                            {order.id}
                          </td>
                          <td style={{ padding: 12 }}>{order.date}</td>
                          <td
                            style={{
                              color: "#22c55e",
                              fontWeight: 600,
                              padding: 12,
                            }}
                          >
                            ₹{order.total}
                          </td>
                          <td style={{ padding: 12 }}>
                            <ul
                              style={{
                                listStyle: "none",
                                margin: 0,
                                padding: 0,
                              }}
                            >
                              {order.items.map((item) => (
                                <li
                                  key={item.id}
                                  style={{ fontSize: 14, marginBottom: 2 }}
                                >
                                  <span style={{ fontWeight: 600 }}>
                                    {item.title}
                                  </span>{" "}
                                  x{item.qty}{" "}
                                  <span style={{ color: "#6b7280" }}>
                                    (₹{item.price * item.qty})
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
