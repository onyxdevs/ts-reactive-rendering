import { createComponent, VDomNode } from "./virtual_dom";
import { createDiff } from "./diffs";
import { renderDOM, applyUpdate } from "./render";
import { CountersComponent, CounterComponent, ToDoContainer } from "./component";

// const app: VDomNode = {
//   tagname: 'div',
//   props: { 'id': 'root' },
//   childeren: {
//     h1: {
//       tagname: 'h1',
//       props: { 'class': 'header' },
//       childeren: { txt: 'hello world'}
//     },
//     xx: {
//       tagname: 'h3',
//       props: {  'class': 'header' },
//       childeren: { txt: 'h3 first'}
//     },
//     foo: {
//       tagname: 'div',
//       childeren: { txt: 'FOO' }
//     },
//     btn: {
//       tagname: 'button',
//       childeren: { txt: 'click me' },
//       props: {
//         'onclick': () => alert(1)
//       }
//     }
//   }
// }

const count: VDomNode = createComponent(CountersComponent, { key: 'root'})

const todos: VDomNode = createComponent(ToDoContainer, { key: 'root'}) 

// const app1 = createElement(
//   'div',
//   { 'id': 'root-updated' },
//   child(
//     'h3', createElement(
//       'h1',
//       { 'class': 'header' },
//       child('txt', createText('hello world - updated'))
//     )
//   ).set(
//     'xx', createElement(
//       'h3',
//       {},
//       child('txt', createText('h3 new'))
//     )
//   )
//   .set(
//     'yy', createElement(
//       'h3',
//       {},
//       child('txt', createText('h3 2nd'))
//     )
//   )
// )

// const app2 = createElement(
//   'div',
//   { 'id': 'root-updated' },
//   child(
//     'yy', createElement(
//       'b',
//       {},
//       child('txt', createText('h3 2nd'))
//     )
//   ).set(
//     'xx', createElement(
//       'h3',
//       {},
//       child('txt', createText('h3 new f'))
//     )
//   )
// )

const rootElem = renderDOM('root', todos)


// const diffV2 = createDiff(app, app1, true)
// console.log(diffV2)

// setTimeout(() => applyUpdate(rootElem, diffV2, rootElem), 1500)

// const diffV3 = createDiff(app1, app2, true)
// console.log(diffV3)


// setTimeout(() => applyUpdate(rootElem, diffV3, rootElem), 3000)
