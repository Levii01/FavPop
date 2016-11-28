import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    addRating(person) {
      let newRecord = this.get('store')
        .createRecord('rate', {user: person, value: 1});
      newRecord
        .save()
        .then(() => person.save())
        .catch(() => newRecord.deleteRecord());
    }
  }
});

// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//   store: Ember.inject.service(),
//   actions: {
//     addRating(person) {
//       let newRecord = this.get('store')
//         .createRecord('rate', {user: person, value: 1});
//
//     newRecord
//     .save()
//     .then(() => person.save())
//     .catch(() => newRecord.deleteRecord());
//     }
//   }
// });
