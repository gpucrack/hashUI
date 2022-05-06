// server/index.js

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
app.post('/postSevHash', (req, res) => {
  console.log(req.body.hash); //Affiche ce que le client envoie
  req.body.hash == 'stats' ? // Si on reçoit stats on renvoie stats
  res.status(201).json({
    message: 'stats'
  }) :

  onlineSevProg(req.body.hash) //Appelle du programme online
  nb_false_alarm = false_alarm()
  nb_time = time()
  msg = pourcentage()
  console.log('Pourcentag is : '+msg) //Recupération pwd
  console.log('Time is : '+nb_time)
  console.log('Nb false alarm is : '+nb_false_alarm)

  res.status(201).json({ // on envoie le pwd
    password: msg, 
    time : nb_time,
    number : nb_false_alarm
  });
});

app.post('/postHash', (req, res) => {
  console.log(req.body.hash); //Affiche ce que le client envoie
  req.body.hash == 'stats' ? // Si on reçoit stats on renvoie stats
  res.status(201).json({
    message: 'stats'
  }) :

  onlineProg(req.body.hash) //Appelle du programme online
  nb_false_alarm = false_alarm()
  nb_time = time()
  msg = pwd()
  col = column()
  console.log('Password is : '+msg) //Recupération pwd
  console.log('Time is : '+nb_time)
  console.log('Nb false alarm is : '+nb_false_alarm)
  console.log('Number of the column :'+col)

  res.status(201).json({ // on envoie le pwd
    password: msg, 
    time : nb_time,
    number : nb_false_alarm,
    column : col
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


function onlineProg (str){
  const execSync = require('child_process').execSync;
  try{
    cmd ='./online -t ./table4/table4 -h ' + str+" -d > file.txt"; // création de la commande
    const output = execSync(cmd, { encoding: 'utf-8' });  // the default is 'buffer'
    return output;
  }catch (error) {
    console.error(error);
  }
}

function onlineSevProg (str){
  const execSync = require('child_process').execSync;
  try{
    cmd ='./online -t ./table4/table4 -m ' + str+" -d > file.txt"; // création de la commande
    const output = execSync(cmd, { encoding: 'utf-8' });  // the default is 'buffer'
    return output;
  }catch (error) {
    console.error(error);
  }
}

  function false_alarm (){
    const execSync = require('child_process').execSync;
    try{
      cmd ='python fa.py'; // création de la commande
      const output = execSync(cmd, { encoding: 'utf-8' });  // the default is 'buffer'
      return output;
    }catch (error) {
      console.error(error);
    }
  }

  function time (){
    const execSync = require('child_process').execSync;
    try{
      cmd ='python time.py'; // création de la commande
      const output = execSync(cmd, { encoding: 'utf-8' });  // the default is 'buffer'
      return output;
    }catch (error) {
      console.error(error);
    }
  }

  function pwd (){
    const execSync = require('child_process').execSync;
    try{
      cmd ='python pwd.py'; // création de la commande
      const output = execSync(cmd, { encoding: 'utf-8' });  // the default is 'buffer'
      return output;
    }catch (error) {
      console.error(error);
    }
  }

  function pourcentage (){
    const execSync = require('child_process').execSync;
    try{
      cmd ='python pourcentage.py'; // création de la commande
      const output = execSync(cmd, { encoding: 'utf-8' });  // the default is 'buffer'
      return output;
    }catch (error) {
      console.error(error);
    }
  }
  function column (){
    const execSync = require('child_process').execSync;
    try{
      cmd ='python column.py'; // création de la commande
      const output = execSync(cmd, { encoding: 'utf-8' });  // the default is 'buffer'
      return output;
    }catch (error) {
      console.error(error);
    }
  }