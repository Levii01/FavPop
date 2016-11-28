import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user')
    });
  },
  beforeModel: function() {
    return this.get('session').fetch().catch(() => null);
  }
});

// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   beforeModel: function() {
//     return this.get('session').fetch().catch(()=> null);
//   },
//   actions: {
//     signIn: function(provider) {
//       this.get('session').open('firebase', { provider: provider}).then(function(data) {
//         console.log(data.currentUser);
//       });
//     },
//     signOut: function() {
//       this.get('session').close();
//     }
//   }
// });
