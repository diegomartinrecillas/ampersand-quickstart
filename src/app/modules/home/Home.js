// Ampersand
import View from 'ampersand-view';
import Model from 'ampersand-model';
// JQuery and Lodash
import $ from 'jquery';
import _ from 'lodash';

// AfterRender util
import extendRender from 'app/utils/extendRender';
// Template
import template from './Home.html';

const HomeView = View.extend({
    template: _.template(template),
    initialize() {
        // Helper that binds beforeRender(), render() and afterRender() together.
        extendRender(this);
        this.model = new HomeModel();
        this.model.set({
            text: 'Hola Mundo'
        });
        // No need to override render, the model (if defined) is passed automatically.
    },
    viewWillRender() {
        console.log('will render');
    },
    viewDidRender() {
        $('#foo').append("bar");
        console.log('did render');
    },
    viewWillDisappear() {
        console.log('will disappear');
    }
});

// Model properties must be defined beforehand, not like in Backbone that can be defined on the fly.
const HomeModel = Model.extend({
    props: {
        text: 'string'
    }
});

export default HomeView;
