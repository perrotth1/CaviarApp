const { client } = require('./mongo.js');

const fs = require('fs');

const collectionTops = client.db(process.env.MONGO_DBNAME).collection('tops');
const collectionPants = client.db(process.env.MONGO_DBNAME).collection('pants');
const collectionShoes = client.db(process.env.MONGO_DBNAME).collection('shoes');

module.exports.collectionTops = collectionTops;
module.exports.collectionPants = collectionPants;
module.exports.collectionShoes = collectionShoes;

module.exports.Seed = async function Seed() { 

    const result = fs.readFile('C:/Users/obsid/Desktop/CaviarApp/assets/items.json', 'utf8', function readFileCallBack (err, data) {
        if( err ) {
            console.log(err);
            throw {msg: "Error reading file"};
        }
        else {
            const itemsObj = JSON.parse(data);
            collectionTops.insertMany(itemsObj.Sheet1);
            collectionPants.insertMany(itemsObj.Sheet2);
            collectionShoes.insertMany(itemsObj.Sheet3);
        }
    })

    return result;
}



module.exports.Search = async function Search(a_type, a_term) {
    
    let targetColl;

    switch(a_type) {
        case "tops":
            targetColl = collectionTops;
            break;
        case "pants":
            targetColl = collectionPants;
            break;
        case "shoes":
            targetColl = collectionShoes;
            break;
        default: 
            return Promise.reject({code: 404, msg: "Incorrect mode"});
    }  

    const terms = a_term.split(' ');
    console.log(terms)

    let results = await targetColl.find( { A: new RegExp(terms[0], "i") } ).toArray();
    terms.splice(0, 1);
    
    for(const t of terms) {
        results = results.filter(r => r.A.match( new RegExp(t, "i") ) );
    }

    console.log(results);

    if(results.length > 60){
        results.splice(60);
    }

    return results;
}


