//
// AboutRoute
//

import * as Radio from 'radio';
import Route from '../../base/route';
import AboutView from './views/about-view';

export default Route.extend({
  show: function() {
    Radio.command('rootView', 'showIn:container', new AboutView());
  }
});
