"use strict";

//NEW RENDERER
export default class Renderer {
  constructor (){
    this.dom = document.querySelector('.root')
    
  }
  newScene(){
    this.replace(this.dom)
  }
  build(data, root){
    const rootEl = root? root: this.dom;

    const UI_Builder = this.generateNewBuilder()

    const refs = UI_Builder(data, rootEl)

    return refs
  }
  //TODO Figure out why we can't zero at specific points in DOM
  replace(data, root){
    this.zero(root)
    const refs = this.build(data, root)
    return refs
  }
  zero(root){
   while (this.dom.firstChild){
     this.dom.removeChild(this.dom.firstChild)
   }
  }
  generateNewBuilder() {
    const ref_MAP = {};
  
    const render = (nodeList, parentElement) => {
      nodeList.forEach((node) => {
        const newNode = document.createElement(node.type);
        if (node.classNames) {
          for (let i = 0; i < node.classNames.length; i++) {
            newNode.classList.add(node.classNames[i]);
          }
        }
        if (node.attributes) {
          for (let i = 0; i < node.attributes.length; i++) {
            const { type, value } = node.attributes[i];
            newNode.setAttribute(type, value);
          }
        }
        if (node.innerText) {
          newNode.textContent = node.innerText;
        }
        parentElement.appendChild(newNode);
  
        if (node.children) {
          render(node.children, newNode);
        }
        if (node.ref) {
          ref_MAP[node.ref] = newNode;
        }
      });
      return ref_MAP;
    }
    return render;
  }
}





//PROS:
// - Performant. Only makes one DOM query per element. Using an HTML string template
// would require that we insert the reference, then query the dom to get the reference
// - Secure. The alternative would require using innerHTML, which is known for 
// XSS attacks. Uses desired appendChild method instead. 

//CONS:
//- DATA ENTRY FOR THIS SUCKS. If we look at how I have to enter that data into a data file, 
// the amount of work I have to do for one HTML element is ridiculous. React solved this problem
// by making JSX. I do not want to write a JSX parser. 
//- Not pure. Does two major tasks under facade of only doing one. 
//- Not sure the best way to 'refresh' the DOM yet. But we will have to zero the DOM for each
//new game. 
//- Not the simplest approach. Will probably encounter more and more edge cases as time goes on. 


// function generateUI(data, root) {
//   const rootRef = document.querySelector(root);

//   //generates our closure. 
//   const UI_Builder = generateNewBuilder();

//   //When we call UI_Builder, it does 2 things. 
//   //1. It generates HTML from the JS objects passed in recursively based 
//   // on the desired DOM Tree structure modeled in data.js.

//   //2. If the data specifies that we create a reference, we create one
//   // and save it in an object. By the time our recursive funttion has finished building 
//   //HTML in the manner specified in data.js, it will have collected an object of 
//   //DOM refernces and return it to be saved directly as an argument to be passed 
//   //into that variable below.  

  

//   const refs = UI_Builder(data, rootRef);

//   return refs;
// }

// function generateNewBuilder() {
//   const ref_MAP = {};

//   function render(nodeList, parentElement) {
//     nodeList.forEach((node) => {
//       // console.log(node.type)
//       const newNode = document.createElement(node.type);
//       if (node.classNames) {
//         for (let i = 0; i < node.classNames.length; i++) {
//           newNode.classList.add(node.classNames[i]);
//         }
//       }
//       if (node.attributes) {
//         for (let i = 0; i < node.attributes.length; i++) {
//           const { type, value } = node.attributes[i];
//           newNode.setAttribute(type, value);
//         }
//       }
//       if (node.innerText) {
//         newNode.textContent = node.innerText;
//       }

//       parentElement.appendChild(newNode);

//       if (node.children) {
//         render(node.children, newNode);
//       }
//       if (node.ref) {
//         ref_MAP[node.ref] = newNode;
//       }
//     });
//     return ref_MAP;
//   }
//   return render;
// }


// function zeroUI(){
//   const root = document.querySelector('.root')
//   const game = document.querySelector('.game')
//  while (root.firstChild){
//    root.removeChild(root.firstChild)
//  }
//