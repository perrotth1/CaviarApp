const { ObjectId } = require("bson");

const Users = require("./users"); 
const { client } = require("./mongo");

const collection = client.db(process.env.MONGO_DBNAME).collection('users');
module.exports.collection = collection;

const userPosts = [
    {
        userHandle: "@uruhara_kisuke",

        imgTopSrc: "https://images-na.ssl-images-amazon.com/images/I/519pr6HAytL._AC_UL550_SR423,550_QL65_.jpg",
        imgTopText: "Gucci Men's Floral Puma Print T-Shirt",

        imgPantsSrc: "https://images-na.ssl-images-amazon.com/images/I/41qve4wrPYL._AC_UL550_SR423,550_QL65_.jpg",
        imgPantsText: "Thom Browne Men's Solid Tone Ankle Cut Trousers",

        imgShoesSrc: "https://m.media-amazon.com/images/I/81-YIHCJZ8L._AC_SX255_.jpg",
        imgShoesText: "adidas Y-3 by Yohji Yamamoto Harigane",

        postTime: Date(),

        caption: "Rocking out with my new running shoes by Yoji",

        likes: 21,

        isPublic: true

    },
    {
        userHandle: "@tony_titanium",

        imgTopSrc: "https://images-na.ssl-images-amazon.com/images/I/41zxpmatpIL._AC_UL558_SR429,558_QL65_.jpg",
        imgTopText: "Mens Mare Operato Rigato T-Shirt",

        imgPantsSrc: "https://images-na.ssl-images-amazon.com/images/I/41drgqPSqDL._AC_UL550_SR423,550_QL65_.jpg",
        imgPantsText: "Philipp Plein Mine Men's Contrast Red Stitch Jogging Pants",

        imgShoesSrc: "https://m.media-amazon.com/images/I/817o4JlyxVL._AC_SX255_.jpg",
        imgShoesText: "New Balance Numeric NM255",

        postTime: Date(),

        caption: "This is my skating fit",

        likes: 14,

        isPublic: true
    }
]