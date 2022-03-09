const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://username:password@cluster0.ci3a6.mongodb.net/node-api?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));