
import AppController from './AppController';

require('../sass/styles.scss');

console.log(`🤖 Parrains2017 v${VERSION}`);// eslint-disable-line no-undef

// TODO test webgl here and show modal if needed

const app = new AppController();

app.start();
