import{g as d,m,a as u,h,s as g,b as _,c as w,e,n as p,v as f,j as i,p as b,l as v}from"./index-DTOr8pt5.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";const x={name:"StaffLogin",data(){return{email:"",password:""}},methods:{login(){const t=d(i);m(t,this.email,this.password).then(o=>{const a=o.user;console.log(a);const r=u(i);h(r,"staffCheck")({uid:a.uid}).then(s=>{console.log(s),console.log(s.data),s.data&&s.data.success?this.$router.push({path:"/staff"}):(console.error("Staff login failed"),g(d(i)).then(()=>{this.$router.push({path:"/stafflogin"}),console.log("logged out")}))}).catch(s=>{console.error("Error checking staff login:",s)})}).catch(o=>{const a=o.code,r=o.message;console.error(a),console.error(r)})}}},c=t=>(b("data-v-37e53342"),t=t(),v(),t),k={class:"login-container"},E={class:"form-container"},S=c(()=>e("h1",null,"Staff Login",-1)),C={class:"form-group"},P=c(()=>e("label",{for:"exampleInputEmail1"},"Email address",-1)),y={class:"form-group"},L=c(()=>e("label",{for:"exampleInputPassword1"},"Password",-1));function B(t,o,a,r,n,s){return _(),w("div",k,[e("div",E,[S,e("div",C,[P,p(e("input",{type:"email","onUpdate:modelValue":o[0]||(o[0]=l=>n.email=l),class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},null,512),[[f,n.email]])]),e("div",y,[L,p(e("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=l=>n.password=l),class:"form-control",id:"exampleInputPassword1",placeholder:"Password"},null,512),[[f,n.password]])]),e("button",{onClick:o[2]||(o[2]=(...l)=>s.login&&s.login(...l)),class:"btn btn-primary"},"Login")])])}const M=I(x,[["render",B],["__scopeId","data-v-37e53342"]]);export{M as default};