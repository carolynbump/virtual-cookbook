import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import ENV from 'ember-get-config';

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: ENV.apiAuthEndpoint
});
