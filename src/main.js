import simpleCalendar from './simpleCalendar'

let smallCalendar = {}
smallCalendar.install = function (Vue, options) {
  Vue.component('simpleCalendar', simpleCalendar)
}
if (typeof window !== 'undefined' && window.Vue) {
 window.Vue.use(smallCalendar);
}
export default smallCalendar
