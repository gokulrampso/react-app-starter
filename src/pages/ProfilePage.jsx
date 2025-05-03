import { useEffect, useState } from "react";

function ProfilePage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // In a real app, fetch from backend. Here, mock from localStorage.
    const history = localStorage.getItem("orderHistory");
    setOrders(history ? JSON.parse(history) : []);
  }, []);

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body text-center">
              <div className="mb-3">
                <img
                  src="https://ui-avatars.com/api/?name=Demo+User&background=0d6efd&color=fff&size=96"
                  alt="User Avatar"
                  className="rounded-circle border border-3 border-primary mb-2"
                  style={{ width: 96, height: 96 }}
                />
              </div>
              <h4 className="fw-bold mb-1">Demo User</h4>
              <p className="text-muted mb-2">demo@susisclothing.com</p>
              <span className="badge bg-primary">Customer</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="fw-bold mb-4 text-primary">Order History</h4>
              {orders.length === 0 ? (
                <div className="alert alert-info mb-0">
                  No orders yet. Start shopping to see your orders here!
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Order #</th>
                        <th scope="col">Date</th>
                        <th scope="col">Total</th>
                        <th scope="col">Items</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, idx) => (
                        <tr key={idx}>
                          <td className="fw-semibold">{order.id}</td>
                          <td>{order.date}</td>
                          <td className="text-success">₹{order.total}</td>
                          <td>
                            <ul className="list-unstyled mb-0">
                              {order.items.map((item) => (
                                <li key={item.id} className="small">
                                  <span className="fw-semibold">
                                    {item.title}
                                  </span>{" "}
                                  x{item.qty}{" "}
                                  <span className="text-muted">
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
