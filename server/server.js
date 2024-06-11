/* eslint-disable no-console */
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const baseProfilesURL =
  "https://profiles.segment.com/v1/spaces/spa_7ibrGdDz7WuuHea4rS7wTZ/collections/users/profiles/";

const auth =
  "Basic NWoxT2Zya3MxS1YwVG8tcFRNR25OTzRjNktJWFlkRWt0TTc0Q0ZFYi1EbUo0TTBwVERXSkVsOWpuMEowcnhibEFkYUs0dGNEZmQ3TUN3UVotY2xEeWQwMGZMcURYaHNHSWxXcFY0dTlrM243MEpfcng3R2NmS0pYbDEzWU9sUmo5UHY1Qy1CV3JVQXEtbjR3NlBYZGQtakJnMU5MMF9HVzloNjNTMFFBZ3U3QW1OUlpnU3NhUjFLR1o2a19wM0U4YlhycHI4MjFaWDJrNE42MmtuWHlWNk1iaDRjclVtSUNRZ2ZIaUZHUXdEZkxZeE9HR3pYMVBnQ0Job05mZGtDaUhNYUx5WEk5c3JsNXpkVHRqN1BxTW12RGVWVT06";
const config = {
  method: "get",
  maxBodyLength: Infinity,
  headers: {
    Authorization: auth,
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
