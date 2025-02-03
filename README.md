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

# Interpolation Syntax

    Interpolation refers to embedding expressions into marked up text

    Docs: ejs.co
    
    Example:
        <%= 1+3%> --> gives output 4 in the html

        <%=["name","xyz"][1]%> --> gives xyz

# Passing data into EJS

    Pass the given data as 2nd paramter to the app.render("ejsfile",{varname/data});
    We can directly pass the variable or we can use a key value pair

# Conditional Statements

    <% if statement { %>
     what needs to executed if true
    <%} else { %>
     what need to be done if false
    <%}%>

    Example:
        <% if(num%2==0){%>
            <h3>Even number</h3>
        <%}%>

# Loops

    <% loop statement { %>
        what needs to be done
    <% } %>

    Example: 
    <%for(let i=1;i<=10;i++){%>
            <h4><%= i %></h4>
    <% } %>

# Serving Static Files
    
    Sometimes, we may need to send CSS and JS codes along with our html response.

    We can send the data using this method, where express.static is a middleware.

        app.use(express.static(folder_containing_files));

    We generally send these files using this method:

        app.use(express.static(path.join(__dirname,"public")));

    If we have sub-folders then we need to serve them seperately for each sub-folder, in order to use them. Example:

        app.use(express.static(path.join(__dirname,"/public/css")));

        app.use(express.static(path.join(__dirname,"/public/js")));

# Includes

    This is used to include sub templates into the existing templates