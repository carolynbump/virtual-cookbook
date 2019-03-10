import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  session: service(),
  store: service(),

  model() {
    return EmberObject.create({
      email: null,
      password: null,
      passwordConfirmation: null,
      isValid: false,
      newUser: false
    });
  },

  actions: {
    authenticate(user) {
      this._authenticate(user);
    },

    signUp(user) {
      const newUser = this.get('store').createRecord('user', { email: user.email, password: user.password });
      newUser.save()
        .catch((e) => this._showErrors(e))
        .then(() => this._authenticate(user));
    }
  },

  _authenticate(user) {
    let { email, password } = user;
    this.get('session').authenticate('authenticator:application', email, password)
      .then(() => this.transitionTo('/recipes'))
      .catch((e) => this._showErrors(e));
  },

  _showErrors(e) {
    console.log(e); // eslint-disable-line
    return false;
  }
});