import VImg from './src/img.vue';

VImg.install = function (Vue) {
    Vue.component(VImg.name, VImg);
};

export default VImg;
