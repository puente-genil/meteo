export default async function handler(req, res) {
  const STATION_ID = "b11498400cece45d";
  const API_KEY = "a1b674d9bf1050396a4ca3137e5f7763";

  const url = `https://api.weathercloud.net/v2/weather/current/${STATION_ID}?key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo datos" });
  }
}

