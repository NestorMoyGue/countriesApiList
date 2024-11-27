const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const port = 3000;


app.use(cors({
  origin: 'http://localhost:3001' 
}));

dotenv.config({ path: './config/config.env' });

app.get('/api/country/:countryCode', async (req, res) => {
    const countryCode = req.params.countryCode.toUpperCase();
    const countryName = req.query.countryName || '';
  
    try {
      const borderResponse = await axios.get(`${process.env.API_COUNTRY_INFO}/${countryCode}`);
      const borderData = borderResponse.data.borders || [];
      const borderCountries = borderData.map(border => border.commonName);

      const responsePopulation = await axios.post(
        `${process.env.API_POPULATION}`,
        { country: countryName }
      );

      const dataPopulation= responsePopulation.data.data.populationCounts


      const flagResponse = await axios.get(`${process.env.API_FLAG_IMAGES}`);

      let countryFlag = flagResponse.data.data.find(
        (country) => country.name.toLowerCase() === countryName.toLowerCase()
      );
      countryFlag= countryFlag.flag

      res.status(200).json({
        success: true,
        countryCode,
        countryName,
        borderCountries,
        countryFlag,
        dataPopulation,
      });
  
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error at obtain info about country',
        error: error.message
      });
    }
  });

app.get('/api/countries', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.API_AVAILABLE_COUNTRIES}`);

    res.status(200).json({
      success: true,
      countries: response.data
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: 'Error at obtain list of countries'
    });
  }
});



app.listen(port, () => {
  console.log(`Server runing in http://localhost:${port}`);
});
