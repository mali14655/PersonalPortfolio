import React, { useEffect, useState } from "react";
import { Star, Send, X } from "lucide-react";
import { addReview, loadInitialReviews } from "../utils/reviewsStore";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    review: "",
    rating: 5,
  });

  const fetchReviews = async () => {
    try {
      const data = await loadInitialReviews();
      setReviews(data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { all } = addReview(formData);
      setReviews(all);
      setFormData({
        name: "",
        role: "",
        company: "",
        review: "",
        rating: 5,
      });
      setHoveredRating(0);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to submit review:", error);
      alert("Could not submit your review. Please try again.");
    }
  };

  return (
    <section id="reviews" className="py-20 px-4 md:px-8 lg:px-16 lg:ml-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client Reviews
          </h2>
          <p className="text-xl text-[#BFC2CB] max-w-3xl mx-auto">
            Feedback from clients and collaborators
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            <Send className="w-4 h-4" />
            Submit a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-[#BFC2CB]">Loading reviews...</p>
          ) : (
            reviews.map((item) => (
              <article
                key={item.id}
                className="bg-[#0000001A] backdrop-blur-xl border border-[#2e3035] rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => {
                      const isActive = index < (item.rating || 5);
                      return (
                        <Star
                          key={index}
                          className={`w-4 h-4 mr-1 ${
                            isActive
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-600"
                          }`}
                        />
                      );
                    })}
                  </div>
                  <span className="text-xs text-[#8b90a0]">Verified Client</span>
                </div>
                <p className="text-[#d2d5dd] text-sm leading-relaxed mb-6 min-h-[80px]">
                  "{item.review}"
                </p>
                <div className="border-t border-[#2e3035] pt-4">
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <p className="text-sm text-blue-300">{item.role}</p>
                  <p className="text-xs text-[#9aa0af]">{item.company}</p>
                </div>
              </article>
            ))
          )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <div className="relative z-10 w-full max-w-xl bg-[#16181d] border border-[#2e3035] rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Submit Review</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-[#BFC2CB]" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-[#0f1115] border border-[#2e3035] rounded-xl text-white placeholder-[#BFC2CB] focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Your Role (e.g. CEO)"
                  className="w-full px-4 py-3 bg-[#0f1115] border border-[#2e3035] rounded-xl text-white placeholder-[#BFC2CB] focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-[#0f1115] border border-[#2e3035] rounded-xl text-white placeholder-[#BFC2CB] focus:outline-none focus:border-blue-500"
                />

                <div>
                  <p className="text-sm text-[#BFC2CB] mb-2">Your Rating</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => {
                      const starValue = index + 1;
                      const isActive =
                        starValue <= (hoveredRating || formData.rating);
                      return (
                        <button
                          key={starValue}
                          type="button"
                          onMouseEnter={() => setHoveredRating(starValue)}
                          onMouseLeave={() => setHoveredRating(0)}
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, rating: starValue }))
                          }
                          className="p-1"
                          aria-label={`Set rating to ${starValue}`}
                        >
                          <Star
                            className={`w-6 h-6 transition-colors ${
                              isActive
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-500"
                            }`}
                          />
                        </button>
                      );
                    })}
                    <span className="ml-2 text-sm text-[#BFC2CB]">
                      {formData.rating} / 5
                    </span>
                  </div>
                </div>

                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  placeholder="Write your review"
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0f1115] border border-[#2e3035] rounded-xl text-white placeholder-[#BFC2CB] focus:outline-none focus:border-blue-500 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
