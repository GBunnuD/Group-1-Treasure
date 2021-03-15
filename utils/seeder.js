  
const Datastore = require('nedb'); // set up a temporary (in memory) database
// const LOG = require('./logger');
const developerData = require('../data/locdata.json'); // read in data file


module.exports = (app) => {
//   LOG.info('START data seeder.');
  const db = {};

  db.developers = new Datastore(); 
  db.developers.loadDatabase(); 

  
  db.developers.insert(developerData);

  app.locals.developers = db.developers.find(developerData);
//   LOG.info(`${app.locals.developers.query.length} developers seeded`);

//   LOG.info('END Data Seeder. Sample data read and verified.');
};