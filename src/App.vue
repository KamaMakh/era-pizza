<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <transition name="fade">
          <router-view />
        </transition>
      </v-container>
    </v-main>
    <v-footer app style="font-size: 11px">
      <v-col class="pa-0">
        ООО "ЕРА" <br />
        Адрес: г. Новосибирск, ул. Благовещенская 48/1 подъезд 9.
      </v-col>
      <v-col class="pa-0 text-right">
        ИНН 5408022063 <br />
        КПП 540801001
      </v-col>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
@font-face {
  font-family: "HelveticaNeueCyr";
  src: url("../src/assets/fonts/helvetica.ttf");
}
#app {
  font-family: "HelveticaNeueCyr", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: linear-gradient(137.51deg, #ff5c49 -13.78%, #f4052e 142.63%);
  position: relative;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
