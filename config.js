const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "www.themealdb.com/api/json/v1/1/lookup.php?i="
  : "https://your_live_url";
