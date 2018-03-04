<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item><a href="#/infra-estrutura">InfraEstrutura</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#/banco-dados">Banco de Dados</a></el-breadcrumb-item>
            <el-breadcrumb-item>Novo</el-breadcrumb-item>
        </el-breadcrumb>
        <div><br></div>
        

        <el-form :model="ruleForm" :label-position="labelPosition"  label-width="200px" :rules="rules" ref="ruleForm">
    
            <fieldset><legend>Cadastro Banco de Dados</legend>
           
            <el-form-item label="Descrição" prop="descricao" required>
    
                <el-input v-model="ruleForm.descricao"></el-input>
    
            </el-form-item>

             <el-form-item label="Nome Conexao" prop="nomeConexao" required>
    
                <el-input v-model="ruleForm.nomeConexao"></el-input>
    
            </el-form-item>

             <el-form-item label="String Conexão" prop="stringConexao" required>
    
                <el-input v-model="ruleForm.stringConexao"></el-input>
    
            </el-form-item>
    
            <el-form-item label="Modelo Banco Dados" prop="modeloBancoDadosId" required>
    
                <el-select v-model="ruleForm.modeloBancoDadosId" placeholder="Modelo Banco Dados">
    
                    <el-option label="Sql Server" value="1"></el-option>
    
                    <el-option label="Mysql" value="2"></el-option>
    
                </el-select>
    
            </el-form-item>
     
     </fieldset>
     <br>

            <el-button type="primary" v-on:click="submitForm('ruleForm')">Criar</el-button>
    
            <el-button v-on:click="resetForm('ruleForm')">Limpar</el-button>
    
        </el-form>
    
    </div>
</template>
<script>
    import {servidor} from '@/config/servidor';
    import axios from 'axios';
    export default {
         data() {
            return {
                servidor:[servidor],
                labelPosition: 'left',
                ruleForm: {
                descricao: '',
                nomeConexao: '',
                stringConexao: '',
                modeloBancoDadosId: ''
                },
                rules: {
                descricao: [
                    { required: true, message: 'Informação Obrigatória', trigger: 'blur' },
                    { min: 5, max: 200, message: 'De 5 à 200 caracteres', trigger: 'blur' }
                ],
                nomeConexao: [
                    { required: true, message: 'Informação Obrigatória', trigger: 'blur' },
                    { min: 3, max: 20, message: 'De 3 à 20 caracteres', trigger: 'blur' }
                ],
                stringConexao: [
                    { required: true, message: 'Informação Obrigatória', trigger: 'blur' },
                    { min: 3, max: 500, message: 'De 3 à 500 caracteres', trigger: 'blur' }
                ],
                modeloBancoDadosId: [
                    { required: true, message: 'Informação Obrigatória', trigger: 'change' }
                ],
                
                
                }
            };
    },
    methods: {
      submitForm(formName) {
          
        this.$refs[formName].validate((valid) => {
          if (valid) {
          
           this.salvarDados(this.ruleForm)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      salvarDados(ruleForm) {
       let vm = this;   
       axios({
        method: 'post',
        url: servidor.BancoDadosNovo,
        data: {
            descricao: ruleForm.descricao,
            nomeConexao: ruleForm.nomeConexao,
            stringConexao: ruleForm.stringConexao,
            modeloBancoDadosId: ruleForm.modeloBancoDadosId
        }
        })
        .then(function (response) {
            vm.$message({
                message: 'Registro Criado Com Sucesso!.',
                type: 'success'
                 });
            window.location = "#/banco-dados"                 
            
        })
        .catch(function (error) {
            console.log(error);
        });
      }

    }
    }
</script>
<style >
    .el-main{
        text-align: left;
    }
    .el-select{
      width: 100%;
  }
</style>
