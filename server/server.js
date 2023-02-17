const express = require('express')
const app = express()
const cors = require('cors')
const axios = require("axios");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

var emailIds = ["sintugupta@gmail.com", "riteshkr142002@gmail.com", "riteshgupta9939@gmail.com", "p.kaur012210@gmail.com"];
let itr = 0
let breachedDataList = [];
const getData = async (email) => {

  // if (itr === emailIds.length) {
  //   return;
  // }

  // console.log(emailIds[itr])
  const options = {
    method: 'GET',
    url: `https://haveibeenpwned.com/api/v3/breachedaccount/${email}`,
    headers: {
      ' Hibp-Api-Key': '1c312aad58c3473693169f5773439566',
    }
  };

  return await axios.request(options);

  // itr++;
  // setTimeout(getData, 8000);
}
// 



app.use('/upload-data', async (req, res) => {

  let data = await getData(req.query['email']);
  res.send(data);

})

app.use('/get-data', (req, res) => {
  res.send(breachedDataList);
})

// setTimeout(getData, 6000);
app.listen(3600, () => {

  console.log('alive');
})


// app.listen(3000, () => console.log('app is running'))

