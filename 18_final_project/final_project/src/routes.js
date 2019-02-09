import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', name: 'portfolio', component: Portfolio },
  { path: '/stocks', name: 'stocks', component: Stocks },
  { path: '*', component: Home },
]
