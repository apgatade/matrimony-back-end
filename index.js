let express = require("express");
let bodyparser = require("body-parser");
let mongoose = require("mongoose");

let app = express();
app.use(express.static("assets"));
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
        return res.status(200).json({});
    }
    next();
});


//mongoose.connect("mongodb://127.0.0.1:27017/igapmatrimony");
mongoose.connect("mongodb+srv://apgatade:admin123@cluster0.nqdioeh.mongodb.net/matrimony");
let db = mongoose.connection;

db.on("error", error => console.log(error));
db.on("open", () => console.log("connection success"));

app.get("/", (req, res) => {
    res.end("Welcome to node js")
})

app.use("/admins", require("./routes/admins"));
app.use("/states", require("./routes/states"));
app.use("/districts", require("./routes/districts"));
app.use("/talukas", require("./routes/talukas"));
app.use("/towns", require("./routes/towns"));
app.use("/profiles", require("./routes/profiles"));
app.use("/login", require("./routes/login"));
app.use("/plans", require("./routes/plans"));
app.use("/businesses", require("./routes/businesses"));
app.use("/businesspay", require("./routes/businesspay"));
app.use("/businessplans", require("./routes/businessplans"));
app.use("/relations", require("./routes/relations"));
app.use("/religions", require("./routes/religions"));
app.use("/profilebusinessplan", require("./routes/profilebusinessplan"));

app.listen(8081, () => {
    console.log("API running on http://localhost:8081");
})





