function ListGroup() {
  const items = [
    { icon: "★", text: "First item", color: "#fbbf24" },
    { icon: "⚡", text: "Second item", color: "#0d6efd" },
    { icon: "❤", text: "Third item", color: "#ef4444" },
    { icon: "🌙", text: "Fourth item", color: "#0ea5e9" },
    { icon: "✔", text: "Fifth item", color: "#22c55e" },
  ];
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        borderRadius: 16,
        background: "linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #eee",
          padding: "1rem 1.5rem",
        }}
      >
        <h5 style={{ margin: 0, fontWeight: 600, color: "#374151" }}>
          List Group Example
        </h5>
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((item, idx) => (
          <li
            key={item.text}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.75rem 1.5rem",
              background:
                idx === 0
                  ? "linear-gradient(90deg, #0d6efd 60%, #6610f2 100%)"
                  : "transparent",
              color: idx === 0 ? "#fff" : "#374151",
              fontWeight: idx === 0 ? 700 : 500,
              fontSize: 16,
              borderBottom: "1px solid #f3f4f6",
            }}
          >
            <span style={{ marginRight: 12, color: item.color }}>
              {item.icon}
            </span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
