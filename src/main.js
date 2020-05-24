import simpleCalendar from './simpleCalendar'

let smallCalendar = {}
smallCalendar.install = function (Vue, options) {
  Vue.component('simpleCalendar', simpleCalendar)
}
console.log(smallCalendar)
export default smallCalendar
