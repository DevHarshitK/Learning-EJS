# EJS (Embedded JavaScript templates)

    We don't need to require EJS manually, requiring express automatically requires EJS

    To use EJS, 
    1. Use app.set("view engine","ejs);

    2. Then render pages as response
        example: app.get("/",(req,res)=>{
                    res.render("home.ejs");
                });

    By default, we need to keep our templates in "views" folder because by default express searches for files in the views folder.

    If we start the index from any other location other than the main directory, then we need to explicitly provide the address of views directory, which can be achceived using "path" module

    1. require the path module
    2. set the directory address using the
        app.set("views",path,join(__dirname,"views"))

        The parameter passed are: 

        1. we are telling look for this directory in
        
        2. path.join() is used to join two paths
            1st parameter: __dirname => gives the directory address of the script
            2nd parameter: name of the folder we need.