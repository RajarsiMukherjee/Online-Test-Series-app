const express = require("express");
const Test = require("../models/test");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    console.log(req.body);
    const data = await Test.create(req.body);
    return res.send(data);
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
});

router.get("", async (req, res) => {
  try {


    const data = await Test.find().lean().exec();
    // console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/testName", async (req, res) => {
    try {
        console.log(req.query.name)
      const data = await Test.find().lean().exec();
      const filter = data.filter((e) => e.testName === req.query.name)
    //   console.log(data);
      return res.send(filter);
    } catch (error) {
      return res.send(error);
    }
  });

  router.get("/individual", async (req, res) => {
    try {
        console.log(req.query.testname, req.query.level)
      const data = await Test.find().lean().exec();
      const testfilter = data.filter((e) => e.testName === req.query.testname)
      const lelfilter = testfilter.filter((e) => e.level === req.query.level)
    //   console.log(data);
      return res.send(lelfilter);
    } catch (error) {
      return res.send(error);
    }
  });

  router.get("/namess", async (req, res) => {
    try {
        // console.log(req.query.testname, req.query.level)
      const data = await Test.find().lean().exec();
        const namemap = data.map((e) => e.testName)
        let uniqueChars = [...new Set(namemap)];
    //   console.log(data);
      return res.send(uniqueChars);
    } catch (error) {
      return res.send(error);
    }
  });





module.exports = router;