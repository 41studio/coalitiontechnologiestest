import VueRouter from 'vue-router'

const routes=[
 {
  path:'/',
  name:'index',
  component:require('./components/Product')
 },
 {
  path:'/create',
  name:'create',
  component:require('./components/Create')
 },
]

export default new VueRouter({routes});
