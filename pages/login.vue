<template>
  <section class="login-form container">
    <el-form
      ref="login_form"
      :model="login_form"
      :rules="rules"
      label-width="120px"
      class="demo-login_form"
    >
      <el-form-item prop="login" label-width="0">
        <el-input
          v-model="login_form.login"
          placeholder="Email"
          type="email"
          class="login-item"
          value="valter@gmail.com"
          @keyup.enter.native="submit_form('login_form')"
        />
      </el-form-item>

      <el-form-item prop="password" label-width="0">
        <el-input
          v-model="login_form.password"
          placeholder="Password"
          type="password"
          class="login-item"
          value="valter"
          @keyup.enter.native="submit_form('login_form')"
        />
      </el-form-item>

      <el-form-item label-width="0">
        <el-button type="primary" @click="submit_form('login_form')">
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      login_form: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          {
            required: true,
            pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
            message: 'Preencha o email',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Preencha a senha',
            trigger: 'blur'
          },
          { min: 5, message: 'Senha muito curta', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    metodo() {
      this.name = 'outro nome'
    },
    submit_form(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          return this.$auth.loginWith('local', {
            data: this.login_form
          })
        }
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.login-form {
  padding: 30px;
}

.login-item {
  padding: 10px 0;
}
</style>
