import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('top-navigation', 'Integration | Component | top navigation',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#top-navigation}}
      //     template content
      //   {{/top-navigation}}
      // `);

      this.render(hbs`{{top-navigation}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
