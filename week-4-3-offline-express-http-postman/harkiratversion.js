const express = require("express");
const app = express();
let users = [{
    name: "john",
    kidneys: [{ healthy: true }, { healthy: false }]
}]
app.use(express.json())
app.get('/', (req, res) => {
    let johnkidneys = users[0].kidneys;
    let noofkidneys=johnkidneys.length;
    let healthykidneys=0;
    for(let i=0;i<johnkidneys.length;i++){
        if(johnkidneys[i].healthy){
            healthykidneys+=1
        }
    }
    let unhealthykidneys=noofkidneys-healthykidneys;
    res.json({noofkidneys,healthykidneys,unhealthykidneys})
})

app.post('/',(req,res)=>{
    let ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    // let kidney=req.body;
    // users[0].kidneys.push(kidney)
    res.status(200).send('kidney inserted succesfully')
})
app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    
    res.json({msg:"updated succesfully"})
})
app.delete("/",(req,res)=>{
    let unhealthykidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].length===false){
            unhealthykidneys.push(users[0].kidneys[i])
        }
    }
    if(unhealthykidneys.length===0){
        res.status(500).json({msg:"kidneys not found"})
    }
    users[0].kidneys.splice(0,unhealthykidneys.length);
    res.json({msg:'done'})
})
app.listen(3000)