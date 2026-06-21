const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

function readData(fileName) {
    return JSON.parse(
        fs.readFileSync(
            path.join(__dirname, "data", fileName),
            "utf8"
        )
    );
}

app.get("/", (req, res) => {

    const tasks = readData("tasks.json");
    const habits = readData("habits.json");
    const analytics = readData("analytics.json");

    res.render("dashboard", {
        tasks,
        habits,
        analytics
    });

});

app.get("/tasks", (req, res) => {

    const tasks = readData("tasks.json");

    res.render("tasks", {
        tasks
    });

});

app.get("/habits", (req, res) => {

    const habits = readData("habits.json");

    res.render("habits", {
        habits
    });

});

app.get("/analytics", (req, res) => {

    const analytics = readData("analytics.json");

    res.render("analytics", {
        analytics
    });

});

app.get("/notes", (req, res) => {

    const notes = readData("notes.json");

    res.render("notes", {
        notes
    });

});

const PORT = 3001;

app.listen(PORT, () => {

    console.log(
        `FocusFlow running at http://localhost:${PORT}`
    );

});