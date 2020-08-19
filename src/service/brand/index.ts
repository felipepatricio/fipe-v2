// import axios from 'axios';
const axios = require('axios');
const brand = axios.get(
  `${process.env.REACT_APP_BASE_URI}/carros/marcas`
).then((brand:any) => brand);

export default brand
