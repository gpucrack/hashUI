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
  console.log('Password is : '+msg) //Recupération pwd
  console.log('Time is : '+nb_time)
  console.log('Nb false alarm is : '+nb_false_alarm)

  res.status(201).json({ // on envoie le pwd
    password: msg, 
    time : nb_time,
    number : nb_false_alarm
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


function onlineProg (str){
  const execSync = require('child_process').execSync;
  try{
    cmd ='./online_short full_start_0.bin full_end_0.bin -h ' + str+" > file.txt"; // création de la commande
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