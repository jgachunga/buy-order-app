module.exports = {
  async up(db, next) {
    // TODO write your mig ration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    var data_package_types = db.collection('data_package_types');
	  data_package_types.insert({name: 'Device Location'}, next);
    data_package_types.insert({name: 'Device Behaviour'}, next);
    data_package_types.insert({name: 'ID Mapping'}, next);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
