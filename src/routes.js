import Documentation from './components/views/Documentation.vue'
import Home from './components/views/Home.vue'
import Contact from './components/views/Contact.vue'
    const routes = [
        { path: '/', 
        component: Home,
        name: 'home',        
       },
       {
           path: '/documentation',
           component: Documentation,
           name: 'documentation',
       },
      
        {
            path: '/contact',
            component: Contact,
            name: 'contact',
        },
        { path: '*', redirect: '/' }
      ]

export default routes