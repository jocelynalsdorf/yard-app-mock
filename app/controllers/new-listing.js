import Ember from 'ember';

export default Ember.Controller.extend({
  toilets: ['yes', 'no'],
  showers: ['yes', 'no'],
  outlets: ['yes', 'no'],
  pets: ['yes', 'no'],
  actions: {
    addListing: function() {
      var newListing = this.store.createRecord('listing', {
        name: this.get('name'),
        ownerName: this.get('ownerName'),
        addNum: this.get('addNum'),
        addStreet: this.get('addStreet'),
        addCity: this.get('addCity'),
        addState: this.get('addState'),
        addZip: this.get('addZip'),
        price: this.get('price'),
        description: this.get('description'),
        toilet: this.get('toilet'),
        shower: this.get('shower'),
        outlet: this.get('outlet'),
        pet: this.get('pet'),
        image1: this.get('image1'),
        image2: this.get('image2'),
        image3: this.get('image3'),
        image4: this.get('image4')
      });

      newListing.save();
      this.setProperties({
        name: '',
        ownerName:'',
        addNum: '',
        addStreet: '',
        addCity:  '',
        addState:'',
        addZip: '',
        description:'',
        price: '',
        toilet: 'yes',
        shower: 'yes',
        outlet: 'yes',
        pet: 'yes',
        image1: '',
        image2: '',
        image3: '',
        image4: ''
      });
      this.transitionToRoute('listings');
    }
  }
});