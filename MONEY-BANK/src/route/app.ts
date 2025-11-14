import { FinancialController } from "../controller/FinancialController";
import express from "express";
import bodyParser from "body-parser";


const app = express();
const jsonParser = bodyParser.json()
const port = 3000
const financialController = new FinancialController()


 app.get('/getStockValue/:stock', async (req, res) =>  {
    let valueStock = null
    try{
        valueStock = await financialController.getValue(req.params.stock)
        console.log(valueStock)
    }
    catch(error){
        console.log("error")
    }
    res.send(valueStock)
    
})

app.post('/create', jsonParser, function (req, res) {
   financialController.save(req.body.type,req.body.name,req.body.quantity,req.body.ticker)
   res.send("Arigato")
})


 app.get('/getYoutWalletTicker/:ticker', async (req, res) =>  {
    let valueStock = null
    try{
        valueStock = await financialController.getTickerInformation(req.params.ticker)
        console.log(valueStock)
    }
    catch(error){
        console.log("error")
    }
    res.send(valueStock)
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})