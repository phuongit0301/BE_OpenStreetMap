const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const mockData = [
  {
      "city": "Mumbai",
      "country": "India",
      "department": "Department A",
      "name": "Department A",
      "lat": "18.987807",
      "lng": "72.836447",
      "status": 1,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Delhi",
      "country": "India",
      "department": "Example",
      "name": "Example",
      "lat": "28.651952",
      "lng": "77.231495",
      "status": 1,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Kolkata",
      "country": "India",
      "department": "Department India",
      "name": "Department India",
      "lat": "22.562627",
      "lng": "88.363044",
      "status": 2,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Chennai",
      "country": "India",
      "department": "Ministry",
      "name": "Ministry",
      "lat": "13.084622",
      "lng": "80.248357",
      "status": 2,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Bengaluru",
      "country": "India",
      "department": "Labour",
      "name": "Labour",
      "lat": "12.977063",
      "lng": "77.587106",
      "status": 2,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Hyderabad",
      "country": "India",
      "department": "Employment",
      "name": "Employment",
      "lat": "17.384052",
      "lng": "78.456355",
      "status": 2,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Ahmadabad",
      "country": "India",
      "department": "Enterprises",
      "name": "Enterprises",
      "lat": "23.025793",
      "lng": "72.587265",
      "status": 2,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Haora",
      "country": "India",
      "department": "Enterprises",
      "name": "Enterprises",
      "lat": "22.576882",
      "lng": "88.318566",
      "status": 2,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Pune",
      "country": "India",
      "department": "Employment",
      "name": "Employment",
      "lat": "18.513271",
      "lng": "73.849852",
      "status": 1,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "S\u016brat",
      "country": "India",
      "department": "Energy",
      "name": "Energy",
      "lat": "21.195944",
      "lng": "72.830232",
      "status": 1,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Mardanpur",
      "country": "India",
      "department": "Employment",
      "name": "Employment",
      "lat": "26.430066",
      "lng": "80.267176",
      "status": 1,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Rampura",
      "country": "India",
      "department": "Employment 12",
      "name": "Employment 12",
      "lat": "26.884682",
      "lng": "75.789336",
      "status": 1,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Lucknow",
      "country": "India",
      "department": "dep 12",
      "name": "dep 12",
      "lat": "26.839281",
      "lng": "80.923133",
      "status": 1,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Nara",
      "country": "India",
      "department": "dep 12",
      "name": "dep 12",
      "lat": "21.203096",
      "lng": "79.089284",
      "status": 2,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Patna",
      "country": "India",
      "department": "dep 123",
      "name": "dep 123",
      "lat": "25.615379",
      "lng": "85.101027",
      "status": 2,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Indore",
      "country": "India",
      "department": "dep 12",
      "name": "dep 12",
      "lat": "22.717736",
      "lng": "75.85859",
      "status": 2,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Vadodara",
      "country": "India",
      "department": "dep 12",
      "name": "dep 12",
      "lat": "22.299405",
      "lng": "73.208119",
      "status": 1,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Bhopal",
      "country": "India",
      "department": "dep 12",
      "name": "dep 12",
      "lat": "23.254688",
      "lng": "77.402892",
      "status": 1,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Coimbatore",
      "country": "India",
      "department": "dep 12",
      "name": "dep 12",
      "lat": "11.005547",
      "lng": "76.966122",
      "status": 1,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Ludhiana",
      "country": "India",
      "department": "dep 12",
      "name": "dep 12",
      "lat": "30.912042",
      "lng": "75.853789",
      "status": 2,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "\u0100gra",
      "country": "India",
      "department": "dep 12",
      "name": "dep 12",
      "lat": "27.187935",
      "lng": "78.003944",
      "status": 0,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Kalyan",
      "country": "India",
      "department": "dep 12",
      "name": "dep 12",
      "lat": "19.243703",
      "lng": "73.135537",
      "status": 0,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Vishakhapatnam",
      "country": "India",
      "department": "dep 12",
      "name": "dep 12",
      "lat": "17.704052",
      "lng": "83.297663",
      "status": 0,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  },
  {
      "city": "Kochi",
      "country": "India",
      "department": "dep 12",
      "name": "dep 12",
      "lat": "9.947743",
      "lng": "76.253802",
      "status": 0,
      "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&w=1000&q=80"
  }
];

const app = express();
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({force: true})
  .then(() => {
    db.locations.bulkCreate(mockData, { validate: true }).then(() => {
      console.log('sync successfully!');
    }).catch((err) => { console.log(err); });
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
require("./app/routes/location.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});