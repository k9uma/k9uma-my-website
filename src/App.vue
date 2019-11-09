<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <b-img v-bind="mainProps" src="/img/logo.jpg" rounded="circle" alt="Circle image"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item-dropdown text="Podcasts" right>
            <b-dropdown-item to="/podcast-codecast">CodeCast Zambia</b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- <b-nav-item to="/work">Work</b-nav-item>
          <b-nav-item to="/blog">Blog</b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
      return {
        mainProps: {width: 75, height: 75 }
      }
    }
}
</script>

<style>

</style>
