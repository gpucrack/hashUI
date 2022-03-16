// server/index.js

const PATH ='~/Documents/4INFO/Projet_GPU/UI/UIHash/';

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
  express.urlencoded({
    extended: false
  })
)

app.use(express.json())

/*app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});*/

app.post('/postHash', (req, res) => {
  console.log(req.body.hash); //Affiche ce que le client envoie
  req.body.hash == 'stats' ? // Si on reçoit stats on renvoie stats
  res.status(201).json({
    message: 'stats'
  }) :

  msg=onlineProg(req.body.hash) //Appelle du programme online
  console.log('Password is : '+msg) //Recupération pwd

  res.status(201).json({ // on envoie le pwd
    message: msg
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


function onlineProg (str){
  const execSync = require('child_process').execSync;
  try{
    cmd ='python '+PATH+'Online.py ' + str; // création de la commande
    const output = execSync(cmd, { encoding: 'utf-8' });  // the default is 'buffer'
    //console.log('Output was:\n', output);
    return output;
  }catch (error) {
    console.error(error);
  }
}