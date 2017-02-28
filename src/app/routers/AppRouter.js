// JQuery
import $ from 'jquery';
// Amp Router
import Router from 'ampersand-router';
// View Manager Util
import ViewManager from 'app/utils/ViewManager';
// Views
import HeaderView from 'app/modules/header/Header';
import FooterView from 'app/modules/footer/Footer';
import HomeView from 'app/modules/home/Home';

const AppRouter = Router.extend({
    routes: {
        "": "root"
    },
    initialize() {
        // Header
        this.headerView = new HeaderView();
        $('#header').html(this.headerView.render().el);
        // Footer
        this.footerView = new FooterView();
        $('#footer').html(this.footerView.render().el);
    },
    root() {
        // Home
        this.homeView = new HomeView();
        ViewManager.render(this.homeView);
        $('#content').html(this.homeView.el);
    }

});

export default AppRouter;
