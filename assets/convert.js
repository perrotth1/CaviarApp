
const convertExcel = require('convert-excel-to-json');
const fs = require('fs');

const result = convertExcel({
    sourceFile: "shoesMerged.xlsx" 
})


fs.writeFile('shoes.json', JSON.stringify(result), err => {
    if (err) {
      console.error(err)
      return
    }
    console.log("Success");
    //file written successfully
  })