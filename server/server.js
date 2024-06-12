/* eslint-disable no-console */
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import "dotenv/config";

/**
 * Base URL for profiles API.
 */
const baseProfilesURL =
  "https://profiles.segment.com/v1/spaces/spa_7ibrGdDz7WuuHea4rS7wTZ/collections/users/profiles/";

/**
 * Configuration for fetch requests.
 */
const config = {
  method: "get",
  maxBodyLength: Infinity,
  headers: {
    Authorization: `Basic ${btoa(`${process.env.AUTH_TOKEN}:`)}`,
  },
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);

app.options("*", cors());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/**
 * Fetches profile data from the specified URL.
 * @param {string} url - The URL to fetch the data from.
 * @returns {Promise<Object>} The JSON response data.
 */
async function getProfileData(url) {
  try {
    const response = await fetch(url, config);
    if (response.status === 200) {
      const json = await response.json();
      console.log(json);
      return json;
    }
    throw new Error(response.statusText);
  } catch (error) {
    error.status = error.status || 500;
    throw error;
  }
}

/**
 * Express route handler for fetching events data.
 */
app.get("/api/events/:userId/:eventName", async (req, res) => {
  const { userId, eventName } = req.params;
  const url = `${baseProfilesURL}user_id:${userId}/events?include=${encodeURIComponent(eventName)}`;
  try {
    const data = await getProfileData(url);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

/**
 * Express route handler for fetching traits data.
 */
app.get("/api/traits/:userId/:traits", async (req, res) => {
  const { userId, traits } = req.params;
  const url = `${baseProfilesURL}user_id:${userId}/traits?include=${encodeURIComponent(traits)}`;
  try {
    const data = await getProfileData(url);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});
