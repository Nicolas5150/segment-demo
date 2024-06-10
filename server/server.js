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
  "DcpD8IcILzwLoLuaodk6d8hj25IOHhql5uMzRthOOXn3-U8psRjgjRCrddUngRhrrJYwYD2_DgFpncF0z1hIoPbYD-I95F38_d0rxn-BS2A92e7cF3TJ42Rpx4nrPW6rK_1ZfaPRgvzmkfZJF0lF_sXdA3JfJ0vc3Ix7KNLub5cBcr0qu17O47P6nwj04bI4UpSjQCih-j1zGATj3KetX8Esu2bGlOLDntJ6BTnyVb328-PzduS658sODfaxpF-_TBw16J6i8ewNFbQZL-RxqNBCOxI=";

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
