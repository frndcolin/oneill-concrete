export default [
  {
    path: "/success/",
    component: () => import(/* webpackChunkName: "page--src--pages--success-vue" */ "/Users/cfriend/Dev/Sites/oneill-concrete/src/pages/success.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/cfriend/Dev/Sites/oneill-concrete/src/pages/Contact.vue")
  },
  {
    path: "/blog/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/cfriend/Dev/Sites/oneill-concrete/src/pages/Blog.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/cfriend/Dev/Sites/oneill-concrete/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/cfriend/Dev/Sites/oneill-concrete/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/cfriend/Dev/Sites/oneill-concrete/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/cfriend/Dev/Sites/oneill-concrete/src/pages/404.vue")
  }
]

