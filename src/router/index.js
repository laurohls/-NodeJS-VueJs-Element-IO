import Vue from 'vue'
import Router from 'vue-router'
import PageAuth from '@/Pages/Auth'
import PageHome from '@/Pages/Home'
import PageProjeto from '@/Pages/Projeto'
import PageBancoDados from '@/Pages/areas/infra/BancoDados/Index'
import PageBancoDadosNovo from '@/Pages/areas/infra/BancoDados/Novo'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Auth',
            component: PageAuth
        },
        {
            path: '/home',
            name: 'Home',
            component: PageHome,
            children: [{
                    path: '/projetos',
                    name: 'Projetos',
                    component: PageProjeto
                },
                {
                    path: '/banco-dados',
                    name: 'BancoDados',
                    component: PageBancoDados
                },
                {
                    path: '/banco-dados/novo',
                    name: 'BancoDadosNovo',
                    component: PageBancoDadosNovo
                }
            ]
        }
    ]
})