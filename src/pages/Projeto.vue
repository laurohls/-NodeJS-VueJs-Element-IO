<template>
  <div>
   <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><a href="~/Modelagem">Modelagem</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="~/Modelagem/Projetos">Projetos</a></el-breadcrumb-item>
        <el-breadcrumb-item>Listagem</el-breadcrumb-item>
    </el-breadcrumb>

    <div><br /></div>

    <el-table v-loading="loading" :data="registros"  style="width: 100%">
        <el-table-column prop="id" label="#" width="180"></el-table-column>
        <el-table-column prop="descricao" label="Descrição" width="180"></el-table-column>
        <el-table-column prop="modeloBancoDados" label="Modelo"></el-table-column>
        <el-table-column prop="nomeConexao" label="Nome Conexao"></el-table-column>
        <el-table-column prop="stringConexao" label="String Conexao"></el-table-column>
        <el-table-column prop="dataCriacao" label="Data Criação"></el-table-column>
    </el-table>

    <el-pagination background="true"
                   @size-change="MetodoQuantidadeElementos"
                   @current-change="MetodoPaginaSelecionada"
                   :current-page.sync="paginacao.paginaAtual"
                   :page-sizes="[10, 20, 30, 50, 100]"
                   :page-size="paginacao.registrosPorPagina"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="paginacao.totalRegistrosFiltrados">
    </el-pagination>
</div>
</template>

<script>
  export default {
      data() {
            return {
                registros: [],
                paginacao: {
                    paginaAtual: 1,
                    totalRegistrosFiltrados: 0,
                    registrosPorPagina: 10
                },
                caminhoUrlLista: window.location.origin + "/BancoDados/Listar",
                titulo: "Banco Dados",
                loading: true,
              
            }
        },
        mounted() {
            this.listar(1, 10);
           
        },
        methods: {
            listar: function (pagina, qtdRegistros) {
                this.loading = true;
                axios.get(this.caminhoUrlLista, {
                    params: {
                        pagina: pagina,
                        qtdRegistros: qtdRegistros
                    }
                })
                    .then(response => {
                        this.registros = response.data.dados;
                        this.paginacao = response.data.paginacao;
                        this.loading = false;
                    })
                    .catch(e => {
                        this.errors.push(e)
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


<style scoped>
body{
    background-color: #E9EEF3;
}
  .tela {
    position: relative;
    margin: auto;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width: 400px;
    height: auto;
    border-radius: 3px;
  }
  .el-header, .el-footer {
    text-align: center;
    line-height: 60px;
    float:unset;
    top:0px;
  }

  .el-aside {
    text-align: center;
    line-height: 200px;
    background-color: #E9EEF3;
  }

  .el-main {
    text-align: center;
    line-height: 30px;
  }

  body > .el-container {
    margin-bottom: 50px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 150px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  footer{
    float:right;
  }
  
</style>
