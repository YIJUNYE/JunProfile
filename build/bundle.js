(()=>{"use strict";const e=require("express"),r=require("body-parser"),n=require("url"),i=require("path");var s=(0,n.fileURLToPath)("file:///C:/Users/Benny/Documents/GitHub/JunProfile/index.js"),t=(i.dirname(s),e());t.use(e.static("public")),t.use(r.urlencoded({extended:!0})),t.set("view engine","ejs"),t.get("/",(function(e,r){r.render("index.ejs")}));var u=process.env.PORT||3e3;t.listen(u,(function(){console.log("Server is running on port ".concat(u))}))})();