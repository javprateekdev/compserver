const express = require("express");
const con = require("./config");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.get("/compare/data", (req, resp) => {
  con.query("select * from project", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});
app.post("/compare/data", (req, res) => {
  const q = "INSERT INTO `project`(`u_id`, `name`, `label`, `ProjectPlotArea`, `GreenArea`, `PropertyStatus`, `PriceRange`, `TotalTowers`, `TotalFlats`, `OCStatus`, `Density`, `PodiumNonPodium`, `ApprovedBank`, `ClubHouseSize`, `ConstructionType`, `TowerHeights`, `LiftperTower`, `FloorvsFlats`, `PossessionDate`, `Lobby`, `Distance`, `Segment`) VALUES (?)";

  const values = [
    req.body.u_id,
    req.body.name,
    req.body.label,
    req.body.ProjectPlotArea,
    req.body.GreenArea,
    req.body.PropertyStatus,
    req.body.PriceRange,
    req.body.TotalTowers,
    req.body.TotalFlats,
    req.body.OCStatus,
    req.body.Density,
    req.body.PodiumNonPodium,
    req.body.ApprovedBank,
    req.body.ClubHouseSize,
    req.body.ConstructionType,
    req.body.TowerHeights,
    req.body.LiftperTower,
    req.body.FloorvsFlats,
    req.body.PossessionDate,
    req.body.Lobby,
    req.body.Distance,
    req.body.Segment,
    
  ];

  con.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/compare/data/:id",(req,resp)=>{
  con.query("DELETE FROM `project` WHERE u_id="+req.params.id,(error,results)=>{
    if(error) throw error;
    console.log(req.params.id)
    resp.send(results)
  })
})
app.post("/compare/data/", (req, res) => {
  const q = "INSERT INTO `project`(`u_id`, `name`, `label`, `ProjectPlotArea`, `GreenArea`, `PropertyStatus`, `PriceRange`, `TotalTowers`, `TotalFlats`, `OCStatus`, `Density`, `PodiumNonPodium`, `ApprovedBank`, `ClubHouseSize`, `ConstructionType`, `TowerHeights`, `LiftperTower`, `FloorvsFlats`, `PossessionDate`, `Lobby`, `Distance`, `Segment`) VALUES (?)";

  const values = [
    req.body.u_id,
    req.body.name,
    req.body.label,
    req.body.ProjectPlotArea,
    req.body.GreenArea,
    req.body.PropertyStatus,
    req.body.PriceRange,
    req.body.TotalTowers,
    req.body.TotalFlats,
    req.body.OCStatus,
    req.body.Density,
    req.body.PodiumNonPodium,
    req.body.ApprovedBank,
    req.body.ClubHouseSize,
    req.body.ConstructionType,
    req.body.TowerHeights,
    req.body.LiftperTower,
    req.body.FloorvsFlats,
    req.body.PossessionDate,
    req.body.Lobby,
    req.body.Distance,
    req.body.Segment,
    
  ];

  con.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>console.log(`Server is running succesfully on PORT ${PORT}`))
