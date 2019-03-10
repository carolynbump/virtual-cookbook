import Controller from '@ember/controller';

export default Controller.extend({
  
  actions: {
    chooseSignUp() {
      this.set('model.newUser', true);
    },
    
    chooseLogin() {
      this.set('model.newUser', false);
    },

    updatePassword() {
      let password = this.get('model.password');
      let passwordConfirmation = this.get('model.passwordConfirmation');
      this.set('model.isValid', password === passwordConfirmation);
    }
  }
});
