import simpleCalendar from './simpleCalendar'

let smallCalendar = {}
smallCalendar.install = function (Vue, options) {
  Vue.component('simpleCalendar', simpleCalendar)
}
if (typeof window !== 'undefined' && window.Vue) {
  console.log(222)
 window.Vue.use(smallCalendar);
}
console.log(smallCalendar)
export default smallCalendar
