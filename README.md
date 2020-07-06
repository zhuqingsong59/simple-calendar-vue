# simple-calendar-vue
> a simple vue component about calendar

## Installation
```
npm i simple-calendar-vue
```

## Usage
```
import simpleCalendar from 'simple-calendar-vue'
Vue.use(simpleCalendar)

  ...

<simpleCalendar
  @currentMonth="currentMonth"
  v-model="list"
  ref="simpleCalendar">
</simpleCalendar>

```
## Data binding
  v-model， binding curent selected date
## Props
<table>
  <tr>
    <th>props</th>
    <th>type</th>
    <th>default</th>
    <th>required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>initDate</td>
    <td>String</td>
    <td>''</td>
    <td>No</td>
    <td>initial moth</td>
  </tr>
  <tr>
    <td>preDisabled</td>
    <td>Boolean</td>
    <td>false</td>
    <td>No</td>
    <td>set per button disabled</td>
  </tr>
  <tr>
    <td>nextDisabled</td>
    <td>Boolean</td>
    <td>false</td>
    <td>No</td>
    <td>set next button disabled</td>
  </tr>
  <tr>
    <td>isMultiple</td>
    <td>Boolean</td>
    <td>false</td>
    <td>No</td>
    <td>Select multiple dates</td>
  </tr>
</table>

## Events
<table>
  <tr>
    <th>event</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>currentMonth</td>
    <td>click pre or next button, return currentMonth</td>
  </tr>
</table>
