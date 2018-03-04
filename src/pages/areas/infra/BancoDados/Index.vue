<template>


  <div>
    
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item><a href="#/infra-estrutura">InfraEstrutura</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#/banco-dados">Banco de Dados</a></el-breadcrumb-item>
            <el-breadcrumb-item>Listagem</el-breadcrumb-item>
            <router-link :to="{name: 'BancoDadosNovo'}">
                 <el-button type="success" style="float:right;" icon="el-icon-circle-plus-outline" plain>Novo</el-button>
            </router-link>
           
        </el-breadcrumb>
    
           <el-table v-loading="loading" :data="registros" style="width: 100%">
            <el-table-column prop="id" label="#" width="180"></el-table-column>
            <el-table-column prop="descricao" label="Descrição" width="180"></el-table-column>
            <el-table-column prop="modeloBancoDados" label="Modelo"></el-table-column>
            <el-table-column prop="nomeConexao" label="Nome Conexao"></el-table-column>
            <el-table-column prop="stringConexao" label="String Conexao"></el-table-column>
            <el-table-column prop="dataCriacao" label="Data Criação"></el-table-column>
        </el-table>

         <el-pagination
                v-on:size-change="MetodoQuantidadeElementos"
                v-on:current-change="MetodoPaginaSelecionada"     
                :current-page.sync="paginacao.paginaAtual"
                :page-sizes="[10, 20, 30, 50, 100]"
                :page-size="paginacao.registrosPorPagina"
                layout="total, sizes, prev, pager, next, jumper"
                :total="paginacao.totalRegistrosFiltrados">
            </el-pagination>
        
    
        </div>
  

</template>
<script>
    import {servidor} from '@/config/servidor';
    import axios from 'axios';
    export default{
       
        data() {
        return {
            servidor:[servidor],
            registros: [],
            paginacao: {
                paginaAtual: 1,
                totalRegistrosFiltrados: 0,
                registrosPorPagina: 10
            },
            errors: [],
            titulo: "Banco Dados",
            loading: true
        }
    },
    mounted() {
        this.listar(1, 10);
    },
    methods: {
       
        listar: function(pagina, qtdRegistros) {
            this.loading = true;
            let vm = this;
           
            axios.get(servidor.BancoDadosLista, {
                    params: {
                        pagina: pagina,
                        qtdRegistros: qtdRegistros
                    }
                })
                .then(response => {
                    vm.registros = response.data.dados;
                    vm.paginacao = response.data.paginacao;
                    vm.loading = false;
                })
                .catch(e => {
                    vm.errors.push(e)
                })
        },
        MetodoQuantidadeElementos(val) {
            this.listar(1, val)
        },
        MetodoPaginaSelecionada(val) {
            this.listar(val, this.paginacao.registrosPorPagina)
        },
    }
    }
</script>