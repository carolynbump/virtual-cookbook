import { Response } from 'ember-cli-mirage';
import ENV from 'ember-get-config';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */
  this.urlPrefix = ENV.apiFullPath;

  this.get('users/:id');
  this.post('users');

  this.post('/auth/sign_in', (db, request) => {
    const { user } = JSON.parse(request.requestBody);
    const { email, password } = user;
    const dbUser = db.users.findBy({ email, password });

    if (!dbUser) {
      return new Response(403, {}, { errors: ['Invalid username or password']});
    }

    return {
      email,
      token: 'ABC123',
      token_type: 'Bearer',
      client: 'DEF456',
      uid: email,
      expiry: '9999999999'
    };
  });
}
