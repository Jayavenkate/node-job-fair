import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
const MONGO_URL = "mongodb+srv://jaya:jaya123@cluster0.q8ola8v.mongodb.net";
export const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongo is connected !!!  ");

const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());
const data = [
  {
    id: 1,
    name: "Fire Boltt Ninja 2",
    img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
    amt: 1599,
    seller: "Boltt Store",
    catagory: "Watch",
  },

  {
    id: 2,
    name: "Noise Pulse Go",
    img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
    amt: 1300,
    seller: "Noise Store",
    catagory: "Watch",
  },

  {
    id: 3,
    name: "boAt Xtend Pro",
    img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
    amt: 2799,
    seller: "Rajesh Watchs",
    catagory: "Watch",
  },
  {
    id: 4,
    name: "Lenovo Tab M8",
    img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
    amt: 9270,
    seller: "Stonehenge Retail",
    catagory: "Tablets",
  },
  {
    id: 5,
    name: "Honor PAD X8",
    img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
    amt: 12999,
    seller: "Honor india",
    catagory: "Tablets",
  },

  {
    id: 6,
    name: "IKALL N9 ",
    img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
    amt: 3999,
    seller: "IKALL Store",
    catagory: "Tablets",
  },

  {
    id: 7,
    name: "Oppo Pad Air",
    img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
    amt: 15999,
    seller: "Oppo Store",
    catagory: "Tablets",
  },
  {
    id: 8,
    name: "Acer EK220Q",
    img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
    amt: 6249,
    seller: "Accer Store",
    catagory: "Monitors",
  },
  {
    id: 9,
    name: "Samsung 24",
    img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
    amt: 9799,
    seller: "Samsung Store",
    catagory: "Monitors",
  },

  {
    id: 10,
    name: "ZEBRONICS AC32FHD ",
    img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
    amt: 12799,
    seller: "ZEBRONICS Store",
    catagory: "Monitors",
  },
  {
    id: 11,
    name: "ZEBRONICS AC32FHD ",
    img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
    amt: 12799,
    seller: "ZEBRONICS Store",
    catagory: "Monitors",
  },
  {
    id: 12,
    name: "ZEBRONICS AC32FHD ",
    img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
    amt: 12799,
    seller: "ZEBRONICS Store",
    catagory: "Monitors",
  },
];
app.get("/", function (req, res) {
  res.send("hello world job fair");
});
app.get("/elecronics", async function (req, res) {
  try {
    const electronics = await client
      .db("b42wd2")
      .collection("electronics")
      .find({})
      .toArray();
    res.send(electronics);
  } catch (error) {
    res.status(401).send({ message: "error" });
  }
});
app.post("/create-electronics", async function (req, res) {
  const createdata = req.body;
  console.log(createdata);
  const result = await client
    .db("b42wd2")
    .collection("electronics")
    .insertMany(createdata);
  res.send(result);
  //   res.status(200).send({ message: succuss });
});

app.listen(PORT, () => console.log(`The server Staryted in :${PORT}`));
