function ListGroup() {
  const items = [
    { icon: "bi bi-star-fill text-warning me-2", text: "First item" },
    { icon: "bi bi-lightning-fill text-primary me-2", text: "Second item" },
    { icon: "bi bi-heart-fill text-danger me-2", text: "Third item" },
    { icon: "bi bi-moon-stars-fill text-info me-2", text: "Fourth item" },
    { icon: "bi bi-check-circle-fill text-success me-2", text: "Fifth item" },
  ];
  return (
    <div
      className="card mx-auto my-4 shadow-lg border-0"
      style={{
        maxWidth: 400,
        background: "linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%)",
      }}
    >
      <div className="card-header bg-white border-0 pb-2">
        <h5 className="mb-0 fw-semibold text-secondary">List Group Example</h5>
      </div>
      <ul className="list-group list-group-flush">
        {items.map((item, idx) => (
          <li
            key={item.text}
            className={`list-group-item d-flex align-items-center${
              idx === 0 ? " active" : ""
            }`}
          >
            <i className={item.icon}></i>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
