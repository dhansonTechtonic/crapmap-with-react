import { config } from './firebase';
import firebase, {auth} from './../../firebase.js';


class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

}
export default Firebase;
