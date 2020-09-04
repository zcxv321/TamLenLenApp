<template>
  <v-app light>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>-->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>-->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-switch
        v-on:click="test({switch1})"
        v-model="switch1"
        :label="`Switch 1: ${switch1.toString()}`"
        hide-details
        inset
      ></v-switch>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
 updated(){
   
 },
  data: {},
  props: {
    attrs: {
      type: Object,
      default: () => ({}),
    },
  },

  //   data: (vm) => ({
  // initialDark: vm.$vuetify ? vm.$vuetify.theme.dark : false,
  //  switch1: true,
  //   }),
  methods: {
    test: (switch1) => {
      console.log(switch1.switch1)
      localStorage.setItem('theme', switch1.switch1)
      console.log(localStorage)
    },
  },
  //   destroyed() {
  //     console.log(vm.$vuetify.theme.dark)
  //   },
  mounted() {
    console.log(localStorage.theme)
    if (localStorage.theme) {
      this.switch1 = localStorage.theme === 'true'
    }
  },
  beforeDestroy() {
    // if (switch1) {
    //   console.log(localStorage.theme)
    // }
  },
  //   switch1 = localStorage.theme
  //     },
  //   beforeDestroy() {
  //     localStorage.setItem('theme', vm.$vuetify.theme.dark)
  //   },
  debug(event) {
    console.log('event.target.name')
  },
  data() {
    return {
      switch1: '',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/home',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
