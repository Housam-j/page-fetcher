const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const local = process.argv[3];
const fetcher = function(url , local) {
  request(url , (error, response, body) => {
    console.log("string", body);
    if (error) {
      console.log("ERROR: fail to download", error);
      return;
    }
    fs.writeFile(local, body, (error) => {
      if (error) {
        console.log("error writing to local", local);
      } else {
        console.log(`${body.length} Byte are downloaded and saved locally in ${local}`);
      }
    });
  });
};
fetcher(url, local);