# hashUI
Une interface qui permet de lancer la phase online

Lancer le serveur (port 3001):

`cd server`

`npm start`

Lancer le client (port 3000):

`cd client`

`npm start`

## Qu'est ce qui marche ?

Un fichier Online.py fera office du logicel de la phase online.
Pour commencer changer la constante `PATH` dans /server/index.js (c'est la localisasion du fichier Online.py)

Une fois le client et le serveur sont lancés, pour tester :
- Se rendre dans l'onglet OneHash
- Rentrer un faux hash (soit hash soit 12345)
- Le serveur rendra :
  - Password pour hash
  - Mot de passe pour 12345
