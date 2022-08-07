module.exports = app => {
    const locations = require("../controllers/location.controller.js");
  
    var router = require("express").Router();
  
    // Create a new location
    router.post("/", locations.create);
  
    // Retrieve all locations
    router.get("/", locations.findAll);
  
    // Retrieve all published locations
    router.get("/published", locations.findAllPublished);
  
    // Retrieve a single location with id
    router.get("/:id", locations.findOne);
  
    // Update a location with id
    router.put("/:id", locations.update);
  
    // Delete a location with id
    router.delete("/:id", locations.delete);
  
    // Delete all locations
    router.delete("/", locations.deleteAll);
  
    app.use('/api/locations', router);
};