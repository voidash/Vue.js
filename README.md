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
