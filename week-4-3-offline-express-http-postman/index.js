const express = require('express');
const app = express();

let users = [{
    name: "john",
    kidneys: [{ healthy: true }, { healthy: false }]
}]

app.use(express.json());

app.get("/", (req, res) => {
    let name = req.query.name
    let user = users.find(user => user.name === name)
    if (user === undefined) {
        res.status(404).send('No user find with this name')
    }
    let kidneycount = user.kidneys.length;
    let healthykidney = user.kidneys.filter(kidney => kidney.healthy).length

    res.status(200).json({ message: `${name} has total ${kidneycount} kidneys`, Healthykidney: healthykidney });


})
app.post("/", (req, res) => {
    let { kidney, name } = req.body;
    let user = users.find(user => user.name === name);
    if (!user) {
        return res.status(404).send('user not found')
    }
    let healthykidney = user.kidneys.filter(kidney => kidney.healthy).length;
    if (healthykidney < 2) {
        user.kidneys.push(kidney);
        res.status(200).json({
            message: 'Kidney has been inserted successfully',
            update: `Now ${name} has ${healthykidney + (kidney.healthy ? 1 : 0)} healthy kidneys`
        });

    }
    else {
        res.status(500).send(`Cannot insert a kidney as ${name} already has 2 healthy kidneys`)
    }

})
app.patch("/", (req, res) => {
    let { name, repair } = req.body;
    let user = users.find(user => user.name === name);

    if (!user) {
        return res.status(404).send('USER NOT FOUND');
    }

    let faultykidneys = user.kidneys.filter(kidney => kidney.healthy === false);

    if (faultykidneys.length === 0) {
        return res.status(400).send(`No faulty kidneys to repair for ${name}`);
    }

    // Repair all faulty kidneys
    faultykidneys.forEach(kidney => kidney.healthy = repair);

    res.status(200).json({
        message: 'Kidneys repaired successfully',
        update: `Now ${name} has 0 faulty kidneys`
    });
});

app.delete("/",(req,res)=>{
    let {name}=req.body;
    let user=users.find(user.name===name);
    let kidneys=user.kidneys
    if(!user){
        return res.status(404).send('USER NOT FOUND')
    }
    let faultykidneys=user.kidneys.filter(kidney=>kidney.healthy===false);
    if(faultykidneys.length===0){
        res.status(500).send(`No unhealthy kidneys found to be removed`)

    }

    else if(faultykidneys.length<2){
        let index=kidneys.find(ki)
        kidneys.splice()
    }
    else{
        kidneys.splice(0,2)
    }
})

app.listen(3000)