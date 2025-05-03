function Header() {
  return (
    <header
      className="bg-gradient bg-primary text-white shadow"
      style={{
        background: "linear-gradient(90deg, #0d6efd 60%, #6610f2 100%)",
      }}
    >
      <div className="container py-4 d-flex align-items-center gap-3">
        <img
          src="https://avatars.githubusercontent.com/u/69631?s=80"
          alt="Logo"
          className="rounded-circle border border-3 border-white shadow-sm"
          style={{ width: 56, height: 56 }}
        />
        <div>
          <h1 className="display-6 fw-bold mb-1">Sample React App</h1>
          <p className="lead mb-0 text-white-50">
            A modern, professional React app styled with Bootstrap
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
