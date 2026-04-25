const STORAGE_KEY = "portfolio_reviews_v1";

export function getStoredReviews() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Failed to read reviews from storage:", error);
    return [];
  }
}

export function saveStoredReviews(reviews) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  } catch (error) {
    console.error("Failed to save reviews to storage:", error);
  }
}

export async function loadInitialReviews() {
  const existing = getStoredReviews();
  if (existing.length > 0) return existing;

  const response = await fetch("/reviews.json");
  if (!response.ok) throw new Error("Failed to load seed reviews");
  const seedReviews = await response.json();
  const normalized = Array.isArray(seedReviews) ? seedReviews : [];
  saveStoredReviews(normalized);
  return normalized;
}

export function addReview(review) {
  const current = getStoredReviews();
  const created = {
    id: Date.now(),
    name: review.name?.trim() || "Anonymous",
    role: review.role?.trim() || "Client",
    company: review.company?.trim() || "",
    review: review.review?.trim() || "",
    rating: Number(review.rating) || 5,
    createdAt: new Date().toISOString(),
  };
  const next = [created, ...current];
  saveStoredReviews(next);
  return { created, all: next };
}

export function deleteReviewById(id) {
  const current = getStoredReviews();
  const next = current.filter((item) => String(item.id) !== String(id));
  saveStoredReviews(next);
  return next;
}
