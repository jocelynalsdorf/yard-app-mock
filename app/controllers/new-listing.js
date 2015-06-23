import Ember from 'ember';

export default Ember.Controller.extend({
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
        description: this.get('description'),
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
        image1: '',
        image2: '',
        image3: '',
        image4: ''
      });
      this.transitionToRoute('listings');
    }
  }
});