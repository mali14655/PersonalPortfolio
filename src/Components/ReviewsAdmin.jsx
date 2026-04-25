import React, { useEffect, useState } from "react";
import { Trash2, LogOut } from "lucide-react";
import {
  deleteReviewById,
  getStoredReviews,
  loadInitialReviews,
} from "../utils/reviewsStore";

const ADMIN_USER = "ali";
const ADMIN_PASS = "123";

export default function ReviewsAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const auth = window.localStorage.getItem("portfolio_reviews_admin");
    if (auth === "true") {
      setIsLoggedIn(true);
      setReviews(getStoredReviews());
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (
      credentials.username.trim() === ADMIN_USER &&
      credentials.password === ADMIN_PASS
    ) {
      window.localStorage.setItem("portfolio_reviews_admin", "true");
      setIsLoggedIn(true);
      setError("");
      const data = await loadInitialReviews();
      setReviews(data);
      return;
    }
    setError("Invalid username or password.");
  };

  const handleLogout = () => {
    window.localStorage.removeItem("portfolio_reviews_admin");
    setIsLoggedIn(false);
    setCredentials({ username: "", password: "" });
  };

  const handleDelete = (id) => {
    const next = deleteReviewById(id);
    setReviews(next);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#15161A] text-[#BFC2CB] font-sans flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-[#0000001A] backdrop-blur-xl border border-[#2e3035] rounded-3xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-2">Reviews Dashboard</h1>
          <p className="text-sm text-[#BFC2CB] mb-6">Login to manage reviews</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              value={credentials.username}
              onChange={(e) =>
                setCredentials((prev) => ({ ...prev, username: e.target.value }))
              }
              placeholder="Username"
              className="w-full px-4 py-3 bg-[#0f1115] border border-[#2e3035] rounded-xl text-white placeholder-[#BFC2CB] focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="Password"
              className="w-full px-4 py-3 bg-[#0f1115] border border-[#2e3035] rounded-xl text-white placeholder-[#BFC2CB] focus:outline-none focus:border-blue-500"
              required
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors"
            >
              Login
            </button>
          </form>
          <p className="text-xs text-[#8b90a0] mt-4">Use: ali / 123</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#15161A] text-[#BFC2CB] font-sans px-4 md:px-8 lg:px-16 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Reviews Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="space-y-4">
          {reviews.length === 0 ? (
            <p className="text-[#BFC2CB]">No reviews available.</p>
          ) : (
            reviews.map((item) => (
              <div
                key={item.id}
                className="bg-[#0000001A] backdrop-blur-xl border border-[#2e3035] rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-white font-semibold">{item.name}</h3>
                    <p className="text-sm text-blue-300">
                      {item.role} {item.company ? `- ${item.company}` : ""}
                    </p>
                    <p className="text-sm text-[#D2D5DD] mt-2">"{item.review}"</p>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
