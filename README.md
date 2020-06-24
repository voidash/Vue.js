# Vue JS cheatsheet .... Maybe

1. Using Camel casing (ThisIsCamelCase) for defining component name is bad practice. Because DOM apparently is not casesensitive.
`<h1>` is same as `<H1>`, Vue will convert camelCasing to kebab casing(this-is-kebab-case)
2. Directives can't be used on Root level element of any template.

 #### Works because `<div>` is root element
 
  ```javascript
    Vue.component("app-component",
{
props:['countries'],
data(){
	return {
  date:`the year is ${new Date().getFullYear()}`
  }
},
template:` <div><h1 v-for="country in countries">{{date}}--{{country}}<h1></div>`,

});
  ```
  #### Does not work because our root element `<h1>` has `v-for` directive.
  
  ```javascript
   Vue.component("app-component",
{
props:['countries'],
data(){
	return {
  date:`the year is ${new Date().getFullYear()}`
  }
},
template:` <h1 v-for="country in countries">{{date}}--{{country}}<h1>`,

});
  ```
  3. Each component instance has its own isolated scope so data must be a function.
  Refer to docs
  
  4. Some frequently used directives
  
![Directives in vue](https://i.imgur.com/aV1EUZ4.png)

  5. Multiple keybinds on same element
  ![Multiple keybindings on same element](https://i.imgur.com/vx6cFmV.png)
  
  6. e.stopPropagation will prevent bubbling to parent element. If chlid element and parent element are listening for events via event listeners. Given that child element lies within the bounds of parent element or simply put on top of parent element then, clicking on child element will trigger function that was supposed to run when child element was clicked and at a same time parent element function also gets triggered. `@mousemove.stop` will stop propagation. 
  
  7. e.preventDefault() comparable to `@submit.prevent`
  
  8. v-html directive to render string into HTML elements
  
  9. Props are used to handle data passed  from one component to another.
  [Props](https://i.imgur.com/yVQVhS7.png)
  
  10. Custom Events can be emitted by
  [firing a custom event](https://i.imgur.com/yVQVhS7.png)
  
