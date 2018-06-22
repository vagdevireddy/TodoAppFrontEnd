// server.js

    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
	
    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");