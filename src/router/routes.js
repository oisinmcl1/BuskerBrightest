import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../api/firebase";
function isAuth(to, from, next) {
    console.log("Checking auth");
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
            // User is signed in so continue to desired page
            return next();
            // ...        
        } else {
            // User is signed out
            // Send them back to the home page or maybe the login page
            return next({ path: '/login' });
        }
    });
}

function loadPage(component) {
    // '@' is aliased to src/components
    return () => import(/* webpackChunkName: "[request]" */
        `@/pages/${component}.vue`)
}
export default [
    { path: '/', component: loadPage('Home') },
    { path: '/blog', component: loadPage('Blog') },
    { path: '/registration', component: loadPage('Registration') },
    { path: '/login', component: loadPage('Login') },
    { path: '/secure', component: loadPage('Secure'), beforeEnter : isAuth },
    { path: '/upload', component: loadPage('Upload') },
    { path: '/queue', component: loadPage('Queue') },
    { path: '/stafflogin', component: loadPage('StaffLogin') },
    { path: '/staff', component: loadPage('Staff') },
    { path: '/menu', component: loadPage('Menu') },
    { path: '/cart', component: loadPage('Cart') },
    { path: '/orderConfirmation', component: loadPage('OrderConfirmation') },
    { path: '/viewproducts', component: loadPage('ViewProducts') }
]
