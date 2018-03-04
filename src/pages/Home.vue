<template>
  <el-container>
    <el-aside width="auto">
      <el-menu theme="dark" :router="true" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">Administrativo</span>
          </template>
          <el-menu-item-group>
            <span slot="title">Acessos</span>
            <el-menu-item index="1-1" :route="{name:'Perfils'}">- Perfils</el-menu-item>
            <el-menu-item index="1-2" :route="{name:'Usuarios'}">- Usuários</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Valores">
            <el-menu-item index="1-3">- Menus</el-menu-item>
            <el-menu-item index="1-4">- Grupos</el-menu-item>
          </el-menu-item-group>
         </el-submenu>
         <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">Modelagem</span>
          </template>
          <el-menu-item-group title="Valores">
            <el-menu-item index="2-1" :route="{name:'Projetos'}">- Projetos</el-menu-item>
            <el-menu-item index="2-2" :route="{name:'Fases'}">- Fases</el-menu-item>
            <el-menu-item index="2-3" :route="{name:'Campos'}">- Campos</el-menu-item>
          </el-menu-item-group>
         </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">InfraEstrutura</span>
          </template>
          <el-menu-item-group title="Valores">
            <el-menu-item index="3-1" :route="{name:'BancoDados'}">- Banco de Dados</el-menu-item>
            <el-menu-item index="3-2" :route="{name:'Fases'}">- Tipo Dominios</el-menu-item>
            <el-menu-item index="3-3" :route="{name:'Campos'}">- Campos</el-menu-item>
          </el-menu-item-group>
         </el-submenu>
         <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">Projetos</span>
          </template>
          <el-menu-item-group title="Valores">
            <span slot="title">Operacional</span>
            <el-menu-item index="4-1" :route="{name:'Perfils'}">- Criar Processo</el-menu-item>
            <el-menu-item index="4-2" :route="{name:'Usuarios'}">- Processos</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Valores">
             <span slot="title">Relatórios</span>
            <el-menu-item index="4-3">- Processos</el-menu-item>
            <el-menu-item index="4-4">- Usuarios</el-menu-item>
          </el-menu-item-group>
         </el-submenu>
      </el-menu>
    </el-aside>
  <el-container>
    <el-header >
      <div style="text-align:left;">
      <i class="el-icon-menu" v-on:click="isCollapse=!isCollapse"></i>
      SCADA - BPMS Services 
    </div>
    
    </el-header>
    <el-main>  
      <router-view/> 
    </el-main>
    <el-footer>Copyright @2018</el-footer>
  </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style >
  .el-header, .el-footer {
    background-color: rgb(8, 185, 118);
    color: white;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: transparent;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    
    
  }
  .el-menu{
    background-color: whitesmoke;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-menu-item-group__title{
    font-size: 12pt;
    color: darkgreen;
    padding: 0px;
    margin: 0px;
    text-align: left;
    text-decoration: double;
  }

  .el-submenu__title{
    font-size: 12pt;
    background-color:#E9EEF3;
    text-align: left;
    padding-left: 0px;
    padding-right: 50px;
  }
  .el-menu-item{
    text-align: left;
   
  }
  .el-card__header{
    padding: 0px;
  }
  .el-submenu__icon-arrow{
    right: 5px;
  }
</style>