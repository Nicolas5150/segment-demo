/* eslint-disable no-console */
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS middleware
app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);

app.options("*", cors());

const token =
  "5j1Ofrks1KV0To-pTMGnNO4c6KIXYdEktM74CFEb-DmJ4M0pTDWJEl9jn0J0rxblAdaK4tcDfd7MCwQZ-clDyd00fLqDXhsGIlWpV4u9k3n70J_rx7GcfKJXl13YOlRj9Pv5C-BWrUAq-n4w6PXdd-jBg1NL0_GW9h63S0QAgu7AmNRZgSsaR1KGZ6k_p3E8bXrpr821ZX2k4N62knXyV6Mbh4crUmICQgfHiFGQwDfLYxOGGzX1PgCBhoNfdkCiHMaLyXI9srl5zdTtj7PqMmvDeVU=";

app.get("/api/events/:userId/:eventName", async (req, res) => {
  const { userId, eventName } = req.params;

  try {
    console.log(userId, eventName);
    const response = await fetch(
      `https://profiles.segment.com/v1/spaces/spa_7ibrGdDz7WuuHea4rS7wTZ/collections/users/profiles/user_id:${userId}/events?include=Article%20Viewed`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response.status === 200) {
      res.json(response);
    } else {
      console.log(response);
      res.status(response.status).json({
        error: response.statusText,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
