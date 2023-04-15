import Vue from "vue";

console.log('Loading click outside directive plugin')

Vue.directive('click-outside', 
    {
        bind: function (el, binding, vnode) {
            el.clickOutsideEvent = function (event) {
                // here I check that click was outside the el and his childrens
                if (!(el == event.target || el.contains(event.target))) {
                    // and if it did, call method provided in attribute value
                    // console.log(el.checkVisibility());
                    // console.log(el.style.getPropertyValue('display'));
                    // console.log(JSON.stringify(el));
                    // console.log(el);
                    vnode.context[binding.expression](event);
                }
            };
            document.body.addEventListener('click', el.clickOutsideEvent)
        },
        unbind: function (el) {
            document.body.removeEventListener('click', el.clickOutsideEvent)
        },
    }
)