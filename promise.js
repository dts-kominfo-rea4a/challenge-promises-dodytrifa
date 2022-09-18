const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = (emosi) =>{
  return new Promise ((resolve, reject) => {
    let angryCounter = 0
    let calmCounter = 0
    promiseTheaterIXX()
      .then((result) => {
        result.forEach((element) => {
          if (element.hasil === emosi) {
            calmCounter++
          } else {
            angryCounter++;
          }
        });
      })
      .catch((error) => {
        reject(error);
      })
    promiseTheaterVGC()
      .then((result) => {
        result.forEach((element) => {
          if (element.hasil === emosi) {
            calmCounter++
          } else {
            angryCounter++;
          }
          });
          resolve(calmCounter);
          resolve(angryCounter);
      })
      .catch((error) => {
        reject(error);
      })
    })
}

module.exports = {
  promiseOutput,
};
