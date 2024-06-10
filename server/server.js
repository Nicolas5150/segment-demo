/* eslint-disable no-console */
import express, { urlencoded } from "express";
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

// const token =
//   "5j1Ofrks1KV0To-pTMGnNO4c6KIXYdEktM74CFEb-DmJ4M0pTDWJEl9jn0J0rxblAdaK4tcDfd7MCwQZ-clDyd00fLqDXhsGIlWpV4u9k3n70J_rx7GcfKJXl13YOlRj9Pv5C-BWrUAq-n4w6PXdd-jBg1NL0_GW9h63S0QAgu7AmNRZgSsaR1KGZ6k_p3E8bXrpr821ZX2k4N62knXyV6Mbh4crUmICQgfHiFGQwDfLYxOGGzX1PgCBhoNfdkCiHMaLyXI9srl5zdTtj7PqMmvDeVU=";

app.get("/api/events/:userId/:eventName", async (req, res) => {
  const { userId, eventName } = req.params;
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    headers: {
      Authorization:
        "Basic NWoxT2Zya3MxS1YwVG8tcFRNR25OTzRjNktJWFlkRWt0TTc0Q0ZFYi1EbUo0TTBwVERXSkVsOWpuMEowcnhibEFkYUs0dGNEZmQ3TUN3UVotY2xEeWQwMGZMcURYaHNHSWxXcFY0dTlrM243MEpfcng3R2NmS0pYbDEzWU9sUmo5UHY1Qy1CV3JVQXEtbjR3NlBYZGQtakJnMU5MMF9HVzloNjNTMFFBZ3U3QW1OUlpnU3NhUjFLR1o2a19wM0U4YlhycHI4MjFaWDJrNE42MmtuWHlWNk1iaDRjclVtSUNRZ2ZIaUZHUXdEZkxZeE9HR3pYMVBnQ0Job05mZGtDaUhNYUx5WEk5c3JsNXpkVHRqN1BxTW12RGVWVT06",
    },
  };
  try {
    const response = await fetch(
      `https://profiles.segment.com/v1/spaces/spa_7ibrGdDz7WuuHea4rS7wTZ/collections/users/profiles/user_id:${userId}/events?include=${encodeURIComponent(eventName)}`,
      config,
    );
    if (response.status === 200) {
      const json = await response.json();
      console.log(json);
      res.json(json);
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
