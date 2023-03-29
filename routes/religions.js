let express = require("express");
let mongoose = require("mongoose");
let Religion = require("../models/Religion");
let Subreligion = require("../models/Subreligion");
let router = express.Router();

router.post("/", (req, res) => {
  let body = req.body;
  let object = new Religion(body);
  object.save()
    .then((result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    })
    .catch((err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.put("/:id", (req, res) => {
  let body = req.body;
  let id = req.params.id;
  Religion.findByIdAndUpdate(id, body)
    .then((result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    })
    .catch((err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.get("/", (req, res) => {
  Religion.find()
    .then((result) => {
      if (result.length > 0) {
        res.end(JSON.stringify({ status: "success", data: result }));

      }
      else {
        res.end(JSON.stringify({ status: "failed", data: "Record Not Found" }));


      }
    }).catch((err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  Religion.findById(id)
    .then((result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    })
    .catch((err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Religion.findByIdAndDelete(id)
    .then((result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    })
    .catch((err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    });
});



router.post("/subreligions", (req, res) => {
  let subreligion = new Subreligion(req.body);
  subreligion
    .save()
    .then((result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    })
    .catch((err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

router.get("/subreligions/:religionid", (req, res) => {
  Subreligion.find({ religionid: req.params.religionid })
    .then((result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    })
    .catch((err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


// router.put("/:id", (req, res) => {
//   let body = req.body;
//   let id = req.params.id;
//   Subreligion.findByIdAndUpdate(id, body)
//     .then((result) => {
//       res.end(JSON.stringify({ status: "success", data: result }));
//     })
//     .catch((err) => {
//       res.end(JSON.stringify({ status: "failed", data: err }));
//     });
// });


router.delete("/subreligions/:id", (req, res) => {
  Subreligion.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.end(JSON.stringify({ status: "success", data: result }));
    })
    .catch((err) => {
      res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


module.exports = router;
