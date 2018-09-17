# TV Show Tracker

A full-stack application deployed to heroku for tracking TV shows. You can add a series you want to watch, move it to the "watched" column once you've finished it & "like" it as well! 

* Powered by Javascript, jquery, node.js, expess package, body-parser package, handlebars, Heroku deployment, html, bootstrap
* [TV Tracker on Heroku](https://vast-falls-23902.herokuapp.com/)

### Image Preview

<!-- take a picture of the image and add it into the readme  -->
* TV Tracker ![tracker](https://i.imgur.com/08mOJ0b.jpg)

## Prerequisites

This project has been deployed to Heroku, therefore you may use it with full functionality as a browser based web application with no additional installs or downloads!

## Technology Used

* **Javascript** - the primary scripting logic powering the game
* **Node.js** - allowing us to use an assortment of node packages
* **Express** -allowing us to create pointers at certain urls to have specific work done or to return certain data or html
* **Handlebars** -dynamically generate client side content being provided from a mysql database on the server-side
* **Heroku** -free backend hosting for full-stack web applications


# Code Snippets

<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

A user interacts with the client-side HTML page (in this case adding a new TV show to track)
```
<form class="create-form" action="/api/shows" method="post">
      <div class="form-group">
        <div class="input-group">
          <input type="text" class="form-control" id="show-name" name="name"
                aria-label="Show Name"
                placeholder="Show Name">
            <div class="input-group-append">
                <button class="btn btn-warning" type="submit">Add Show</button>
            </div>
        </div>
      </div>
    </form>
```
In a seperate file in a different directory there is a jquery listener for the click of any button with the "create-form" form. Upon click the values input by the user are stored as an object. Then an ajax post request is sent to /api/shows and the object is sent as data.
```
$(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newShow = {
        name: $("#show-name").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/shows", {
        type: "POST",
        data: newShow
      }).then(
        function() {
          console.log("added new show");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
```
In a controller file in a seperate directory there is an express listener for the method of "post" at the route of /api/shows which then calls the create function of the show model and passes along the data in it's request.
```
router.post("/api/shows", function(req, res) {
  show.create(req.body, function(result) {
    res.redirect("/");
  });
});
```
This is the create function that is a part of the show model. This function passes calls the create method of the orm object. The user input is passed along again.
```
var show = {
  create: function(obj, cb) {
    orm.create("shows", obj, function(result) {
      cb(result);  
    });  
  },
};  
```
This is the create function build on the orm object. Here mysql syntax can finally be seen. We have variables in our query string which table to insert the data into & for our data values.
```
var orm = {
  create: function(table, vals, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [table, vals], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};  
```
After all of these steps of communication are complete the page will reload & the user's added show will be in the "Shows to Watch" column.

# Learning points

<!-- Learning points where you would write what you thought was helpful -->
* The capabilities & limitations of handlebars
* Deploying a server to Heroku
* Deploying a database to JawsDB
* Continuing to build more & more complex full stack web applications


## Authors

* **Taylor Skeels** - [GitHub](https://github.com/skeeis)
