var mongoose = require("mongoose");

var Campground = require("./models/campground");
var Comment= require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id risus sagittis, consectetur diam ac, ullamcorper ipsum. Nunc eget venenatis diam. Integer bibendum purus elementum fringilla vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam quis luctus nunc. Duis feugiat nunc lobortis sagittis dictum. Fusce at nulla id risus mattis viverra. Sed vulputate, massa eu posuere imperdiet, quam odio lacinia ante, a efficitur neque enim vitae est. Ut porttitor feugiat erat in faucibus. Pellentesque blandit orci quis erat volutpat, mattis accumsan libero iaculis. In maximus ut augue sed sodales. Sed id urna nulla. Quisque tempus quis dolor varius cursus. Vivamus dictum quis lectus et ullamcorper. Suspendisse placerat tristique volutpat."
    },
    {
        name: "Shore Mesa", 
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id risus sagittis, consectetur diam ac, ullamcorper ipsum. Nunc eget venenatis diam. Integer bibendum purus elementum fringilla vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam quis luctus nunc. Duis feugiat nunc lobortis sagittis dictum. Fusce at nulla id risus mattis viverra. Sed vulputate, massa eu posuere imperdiet, quam odio lacinia ante, a efficitur neque enim vitae est. Ut porttitor feugiat erat in faucibus. Pellentesque blandit orci quis erat volutpat, mattis accumsan libero iaculis. In maximus ut augue sed sodales. Sed id urna nulla. Quisque tempus quis dolor varius cursus. Vivamus dictum quis lectus et ullamcorper. Suspendisse placerat tristique volutpat."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id risus sagittis, consectetur diam ac, ullamcorper ipsum. Nunc eget venenatis diam. Integer bibendum purus elementum fringilla vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam quis luctus nunc. Duis feugiat nunc lobortis sagittis dictum. Fusce at nulla id risus mattis viverra. Sed vulputate, massa eu posuere imperdiet, quam odio lacinia ante, a efficitur neque enim vitae est. Ut porttitor feugiat erat in faucibus. Pellentesque blandit orci quis erat volutpat, mattis accumsan libero iaculis. In maximus ut augue sed sodales. Sed id urna nulla. Quisque tempus quis dolor varius cursus. Vivamus dictum quis lectus et ullamcorper. Suspendisse placerat tristique volutpat."
    }
];


function seedDB() {
    // remove all comments
    Comment.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("comments removed!");
            // remove all campgrounds
            Campground.remove({}, function(err) {
                if (err) {
                    console.log(err);
                } else {
                console.log("campgrounds removed!");
                // add a few campgrounds
                data.forEach(function(seed) {
                    Campground.create(seed, function (err, campground) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("added a campground");
                            // create a comment
                            Comment.create(
                                {
                                    text: "this place is great, but I wish there was internet!",
                                    author: "Homer"
                                }, function(err, comment) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        campground.comments.push(comment);
                                        campground.save();
                                        console.log("created new comment");
                                    }
                            });
                        }
                    });
                });
                }
            });
        }
    });
    
    // add a few comments
}

module.exports = seedDB;