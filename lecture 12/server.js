const express= require("express")
const productroutes=require("./routes/productRoutes")
const app=express();
const PORT=3000


app.use(express.json());  //json data parse

app.use("/api/products",productroutes);

app.listen(PORT,()=>console.log("server is running"));