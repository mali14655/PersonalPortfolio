import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const reviewsFilePath = path.resolve(__dirname, "data", "reviews.json");
const publicReviewsFilePath = path.resolve(__dirname, "public", "reviews.json");

function reviewsApiPlugin() {
  return {
    name: "reviews-api",
    configureServer(server) {
      server.middlewares.use("/api/reviews", async (req, res) => {
        try {
          if (req.method === "GET") {
            const fileContent = await fs.readFile(reviewsFilePath, "utf-8");
            res.setHeader("Content-Type", "application/json");
            res.end(fileContent);
            return;
          }

          if (req.method === "POST") {
            let body = "";
            req.on("data", (chunk) => {
              body += chunk;
            });

            req.on("end", async () => {
              try {
                const payload = JSON.parse(body || "{}");
                const fileContent = await fs.readFile(reviewsFilePath, "utf-8");
                const existingReviews = JSON.parse(fileContent || "[]");

                const newReview = {
                  id: Date.now(),
                  name: payload.name?.trim() || "Anonymous",
                  role: payload.role?.trim() || "Client",
                  company: payload.company?.trim() || "",
                  review: payload.review?.trim() || "",
                  rating: Number(payload.rating) || 5,
                  createdAt: new Date().toISOString(),
                };

                if (!newReview.review) {
                  res.statusCode = 400;
                  res.setHeader("Content-Type", "application/json");
                  res.end(
                    JSON.stringify({ error: "Review text is required." })
                  );
                  return;
                }

                const updatedReviews = [newReview, ...existingReviews];
                await fs.writeFile(
                  reviewsFilePath,
                  JSON.stringify(updatedReviews, null, 2),
                  "utf-8"
                );
                await fs.writeFile(
                  publicReviewsFilePath,
                  JSON.stringify(updatedReviews, null, 2),
                  "utf-8"
                );

                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(newReview));
              } catch (error) {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                res.end(
                  JSON.stringify({ error: "Invalid request payload." })
                );
              }
            });
            return;
          }

          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed" }));
        } catch (error) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Failed to process reviews." }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), reviewsApiPlugin()],
});
