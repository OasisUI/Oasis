import Vue from 'vue'
// components
import Img from './img'
// tools

const components = [
    Img,
];

const Oasis = {
    install (Vue) {
        components.map(component => {
            Vue.component(component.name, component);
        });
        Vue.prototype['$message'] = MessageBox;
    }
}

export default Oasis;
