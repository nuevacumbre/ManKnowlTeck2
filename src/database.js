const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/KnowlteckDB', {
    //useNewUrlParser: true // <-- no longer necessaryuse
   // UnifiedTopology: true // <-- no longer necessary
    /*useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false*/
})
 .then(db => console.log('DB is connected'))
 .catch(err => console.error(err));