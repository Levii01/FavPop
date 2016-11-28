import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  actions: {
    addRating(person) {
      this.get('store').createRecord('rate', {user: person, value: 1})
        .save();

      person.save();
    }
  }
});
