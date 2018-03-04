
<style scope>
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
<template>
  <el-container >
    <el-header>Sistema SGPF</el-header>
    <el-main class="tela">
      <el-card class="box-card " >
        <div slot="header" class="clearfix">
          <span>{{titulo_janela}}</span>
        </div>
        <div class="text item">

          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item label="Usuário" prop="usuario">
              <el-input v-model="ruleForm.usuario"></el-input>
            </el-form-item>
            <el-form-item label="Senha" prop="senha">
              <el-input type="password" v-model="ruleForm.senha"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" >Acessar</el-button>
              <el-button @click="resetForm('ruleForm')">Limpar</el-button>
            </el-form-item>
          </el-form>


        </div>
      </el-card>
    </el-main>
    <el-footer>
      <el-button style="padding: 3px 0" type="text">Recuperar Acesso</el-button>
    </el-footer>
  </el-container>

   



</template>

<script>
  export default {
    data() {
      return {
        titulo_janela: 'Acesso ao Sistema',
        ruleForm: {
          usuario: '',
          senha: ''
       
        },
        rules: {
          usuario: [
            { required: true, message: 'Não pode ser vazio!', trigger: 'blur' },
            { min: 5, max: 20, message: 'Entre 5 e 20 caracteres!', trigger: 'blur' }
          ],
          senha: [
            { required: true, message: 'Não pode ser vazio!', trigger: 'blur' }
            
          ],
        
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            window.location = "/#/home";
          } else {
           return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>


