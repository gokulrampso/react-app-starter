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
      className="card mx-auto my-5 border-0 shadow-lg overflow-hidden position-relative"
      style={{
        maxWidth: 520,
        background: "linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%)",
      }}
    >
      <span className="badge bg-primary position-absolute top-0 end-0 m-3 px-3 py-2 fs-6 shadow">
        Gallery
      </span>
      <div className="card-header bg-white border-0 pb-0 d-flex align-items-center gap-3">
        <img
          src={images[imgIdx]} // Display the current image
          alt={`Sample ${imgIdx + 1}`}
          className="rounded border shadow-sm"
          style={{ width: 80, height: 80, objectFit: "cover" }}
        />
        <div>
          <h3 className="card-title mb-1 fw-bold text-primary">Sample Card</h3>
          <p className="card-text mb-0 text-secondary small">
            Click the button to see a random image!
          </p>
        </div>
      </div>
      <div className="card-body pt-3">
        <button
          className="btn btn-gradient btn-lg w-100 fw-semibold py-2"
          style={{
            background: "linear-gradient(90deg, #0d6efd 60%, #6610f2 100%)",
            color: "#fff",
            border: "none",
          }}
          onClick={showRandomImage}
        >
          <i className="bi bi-shuffle me-2"></i>Show Random Image
        </button>
      </div>
    </div>
  );
}

export default SampleCard;
