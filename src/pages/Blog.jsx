function Blog() {
  return (
    <div style={{ maxWidth: 800, margin: "3rem auto", padding: "0 1rem" }}>
      <h1 style={{ fontWeight: 700, fontSize: 32, marginBottom: 24 }}>
        Susi's Clothing Blog
      </h1>
      <p style={{ fontSize: 18, marginBottom: 18, color: "#374151" }}>
        Stay updated with the latest trends, style tips, and news from the world
        of fashion. Our blog brings you inspiration, guides, and
        behind-the-scenes stories from Susi's Clothing.
      </p>
      <div style={{ marginTop: 32 }}>
        <h5 style={{ fontWeight: 600, marginBottom: 12 }}>Latest Articles</h5>
        <ul style={{ color: "#374151" }}>
          <li>
            <strong>Top 10 Summer Fashion Trends in India</strong> – Discover
            what's hot this season and how to style your wardrobe.
          </li>
          <li>
            <strong>How to Care for Your Ethnic Wear</strong> – Tips to keep
            your sarees and kurtas looking new.
          </li>
          <li>
            <strong>Behind the Scenes: Our Design Process</strong> – Meet our
            creative team and see how collections come to life.
          </li>
        </ul>
      </div>
      <p style={{ marginTop: 32, color: "#6b7280" }}>
        More articles coming soon. Stay tuned!
      </p>
    </div>
  );
}

export default Blog;
