import{g as u,b as t,c as r,e as a,F as p,q as l,t as n,u as h,p as g,l as _}from"./index-DTOr8pt5.js";import{g as f,h as k,c as y,a as v,b as C,m as I,d as S,v as b,e as K,w as x,s as $,f as w}from"./dash-BYmBszUU.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";const B={data(){return{products:[{name:"Guinness",price:"€5.10",image:f},{name:"Heineken",price:"€6.20",image:k},{name:"Coors",price:"€6.00",image:y},{name:"Corona",price:"€4.90",image:v},{name:"Harp",price:"€5.80",image:C},{name:"Moretti",price:"€6.90",image:I},{name:"Asahii",price:"€7.00",image:S},{name:"Vodka",price:"€5.50",image:b},{name:"Gin",price:"€6.20",image:K},{name:"Whisky",price:"€7.30",image:x},{name:"Soft Drink",price:"€1.90",image:$},{name:"Dash",price:"€0.50",image:w}],customerKey:null}},mounted(){this.generateCustomerKey()},methods:{generateCustomerKey(){this.customerKey=String(Math.floor(Math.random()*900)+100)},addItemToCart(e){if(u().currentUser){const i=this.customerKey;this.$emit("addItemToCart",{...e,customerKey:i})}else console.error("User not authenticated.")}}},D=e=>(g("data-v-9ed3b95f"),e=e(),_(),e),M=D(()=>a("h1",null,"Products",-1)),T={class:"products"},F={class:"cost"},G=["onClick"];function H(e,o,i,P,c,m){return t(),r("div",null,[M,a("div",T,[(t(!0),r(p,null,l(c.products,(s,d)=>(t(),r("div",{key:d,class:"product-card"},[a("h3",null,n(s.name),1),a("div",F,n(s.price),1),a("div",{class:"product-image",style:h({backgroundImage:`url(${s.image})`})},null,4),a("button",{onClick:U=>m.addItemToCart(s)},"Add to cart",8,G)]))),128))])])}const E=A(B,[["render",H],["__scopeId","data-v-9ed3b95f"]]);export{E as default};
