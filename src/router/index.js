import Vue from 'vue'
import Router from 'vue-router'
import IndexContainer from '@/components/IndexContainer'
import Login from '@/views/Login'
import IndexCharts from '@/views/Index.vue'
import Account from '@/views/accountFind/account.vue'
import DayRecord from '@/views/accountFind/dayRecord.vue'
import MonthRecord from '@/views/accountFind/monthRecord.vue'
import YearRecord from '@/views/accountFind/yearRecord.vue'
import Statistic from '@/views/accountStatistics/statistic.vue'
import dayStatistic from '@/views/accountStatistics/dayStatistic.vue'
import monthStatistic from '@/views/accountStatistics/monthStatistic.vue'
import yearStatistic from '@/views/accountStatistics/yearStatistic.vue'
import userSet from '@/views/accountSet/userSet.vue'
import accountCreate from '@/views/accountSet/accountCreate.vue'
import accountShow from '@/views/accountShare/accountShow.vue'
import accountAdd from '@/views/accountSet/accountAdd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexContainer',
      component: IndexContainer,
      redirect: '/indexCharts',
      children: [
        {
           path: '/indexCharts',
           name: 'IndexCharts',
           component: IndexCharts
         },
         {
           path: '/account',
           name: 'Account',
           component: Account,
           redirect: '/account/day',
           children:[
             {
               path: '/account/day',
               name: 'DayRecord',
               component: DayRecord
             },
             {
               path: '/account/month',
               name: 'MonthRecord',
               component: MonthRecord
             },
             {
               path: '/account/year',
               name: 'YearRecord',
               component: YearRecord
             }
           ]
         },
         {
           path:'/statistic',
           name:'Statistic',
           component:Statistic,
           redirect:'/statistic/month',
           children:[
             {
               path:'/statistic/day',
               component: dayStatistic
             },
             {
               path:'/statistic/month',
               component: monthStatistic
             },
             {
               path:'/statistic/year',
               component: yearStatistic
             }
           ]
         },
         {
         	path: '/accountCreate',
         	name: 'accountCreate',
         	component: accountCreate
         },
         {
           path: '/accountShow',
           name: 'accountShow',
           component: accountShow
         },
         {
           path: '/accountAdd',
           name: 'accountAdd',
           component: accountAdd
         }
       ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/userSet',
      name: 'userSet',
      component: userSet
    }
  ]
})
