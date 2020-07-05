import simpleCalendar from './simpleCalendar'

let calendar = {}
calendar.install = function (Vue, options) {
  Vue.component('simpleCalendar', simpleCalendar)
}
if (typeof window !== 'undefined' && window.Vue) {
 window.Vue.use(calendar);
}
export default calendar
