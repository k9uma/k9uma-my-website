<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-avatar>
        <img src="/img/logo.jpg" alt="Avatar">
      </md-avatar>

      <div class="md-toolbar-section-end">
        <md-button><router-link to="/">Home</router-link></md-button>
        <md-button><router-link to="/blog">Blog</router-link></md-button>
      </div>
    </md-toolbar>
    <md-content class="md-primary">
      <router-view/>
    </md-content>
  </div>
</template>

<style lang="scss" scoped>

.md-content {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }
.page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

