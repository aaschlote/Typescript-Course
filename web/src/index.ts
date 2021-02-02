/*import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.builUser({ name: 'Jack', age: 30 });

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();

  console.log(userEdit);
}
*/

import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.builUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});
users.fetch();
