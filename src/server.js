const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/api/weather', async (req, res) => {
    try {
        //Belo horizonte latitude e longitude
        const params = {
            latitude: -19.9208,
            longitude: -43.9378,
            daily: ["precipitation_probability_max", "temperature_2m_min", "temperature_2m_max"],
            timezone: "America/Sao_Paulo",
            start_date: "2026-02-20",
            end_date: "2026-02-22",
        };

        const url = "https://api.open-meteo.com/v1/forecast";

        const response = await axios.get(url, { params });

        res.json(response.data);

    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
