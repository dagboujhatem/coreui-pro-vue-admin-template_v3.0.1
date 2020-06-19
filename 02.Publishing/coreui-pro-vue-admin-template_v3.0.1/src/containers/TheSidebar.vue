<template>
  <CSidebar 
    :minimize="minimize"
    :show="show"
    unfoldable
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
  <!--<CSidebar 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >-->
    <CSidebarBrand class="d-md-down-none" to="/">
        <img class="c-sidebar-brand-full" src="img/brand/logo.png" width="138" height="25" alt="Cloud Z CP Logo">
        <img class="c-sidebar-brand-minimized" src="img/brand/sygnet.png" width="22" height="25" alt="Cloud Z CP Logo">
      <!--<CIcon 
        class="c-sidebar-brand-full" 
        name="logo" 
        size="custom-size"
        :height="35" 
        viewBox="0 0 556 134"
      />
      <CIcon 
        class="c-sidebar-brand-minimized" 
        name="logo" 
        size="custom-size"
        :height="35"
        viewBox="0 0 110 134"
      />-->
    </CSidebarBrand>
    <div class="c-side-dropdown-nav">
        <button type="button" 
            v-bind:class="{ active: showDownMenu }" 
            v-on:click="showDownMenu = !showDownMenu">
            <span class="txt">LNG Management</span>
        </button>
        <ul>
            <li><CLink>Manage IAM / RBAC</CLink></li>
            <li><CLink>Copy Login Command</CLink></li>
            <li><button type="button">Log out</button></li>
        </ul>
    </div>
    <CRenderFunction flat :contentToRender="$options.nav" />
    <CLink class="c-side-block-button"><span>System Administrator</span></CLink>
    <CSidebarMinimizer 
      class="c-d-md-down-none" 
      @click.native="$store.commit('toggle', 'sidebarMinimize')"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'

export default {
    name: 'TheSidebar',
    nav, 
    data () {
        return {
            showDownMenu: false
        }
    },
    computed: {
        show () {
            return this.$store.state.sidebarShow 
        },
        minimize () {
            return this.$store.state.sidebarMinimize 
        }
    }
}
</script>

