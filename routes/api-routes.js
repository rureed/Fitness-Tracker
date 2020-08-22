const db = require("../models");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {

        db.Workout.find({}).then(dbWorkout => {
            console.log("ALL WORKOUTS");
            console.log(dbWorkout);
            dbWorkout.forEach(workout => {
                var total = 0;
                workout.exercises.forEach(e => {
                    total += e.duration;
                });
                workout.totalDuration = total;

            });

            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });
