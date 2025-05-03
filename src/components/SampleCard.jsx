/**
 * SampleCard.jsx
 *
 * This React component displays a card with an image, title, description, and a button.
 * When the button is clicked, it shows a random image from a predefined list,
 * ensuring the new image is different from the current one.
 */

import { useState } from "react";

// Array of image URLs to be displayed in the card
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80",
];

function SampleCard() {
  // State to keep track of the currently displayed image index
  const [imgIdx, setImgIdx] = useState(0);

  // Function to select and display a random image different from the current one
  const showRandomImage = () => {
    let next;
    do {
      next = Math.floor(Math.random() * images.length); // Pick a random index
    } while (next === imgIdx); // Ensure it's not the same as the current image
    setImgIdx(next); // Update the state with the new index
  };

  return (
    <div
      style={{
        maxWidth: 520,
        margin: "2rem auto",
        borderRadius: 20,
        boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
        background: "linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          background: "linear-gradient(90deg, #0d6efd 60%, #6610f2 100%)",
          color: "#fff",
          borderRadius: 12,
          padding: "0.5rem 1.2rem",
          fontWeight: 600,
          fontSize: 16,
          boxShadow: "0 2px 8px rgba(13,110,253,0.10)",
        }}
      >
        Gallery
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: "1.5rem 1.5rem 0 1.5rem",
        }}
      >
        <img
          src={images[imgIdx]} // Display the current image
          alt={`Sample ${imgIdx + 1}`}
          style={{
            width: 80,
            height: 80,
            objectFit: "cover",
            borderRadius: 12,
            border: "1px solid #eee",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        />
        <div>
          <h3 style={{ fontWeight: 700, marginBottom: 4, color: "#0d6efd" }}>
            Sample Card
          </h3>
          <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>
            Click the button to see a random image!
          </p>
        </div>
      </div>
      <div style={{ padding: "1.5rem" }}>
        <button
          style={{
            background: "linear-gradient(90deg, #0d6efd 60%, #6610f2 100%)",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 18,
            width: "100%",
            padding: "0.75rem 0",
            boxShadow: "0 2px 8px rgba(13,110,253,0.10)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
          onClick={showRandomImage}
        >
          <span style={{ fontSize: 20 }}>🔀</span>Show Random Image
        </button>
      </div>
    </div>
  );
}

export default SampleCard;
