<template>
  <div>
    <v-container class="m">
      <v-row class="mb-6" no-gutters>
        <v-col v-for="n in 4" :key="n">
          <v-card class="pa-2" tile outlined>col</v-card>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col v-for="n in 2" :key="n" :cols="n === 1 ? 8 : 4">
          <v-card class="pa-2" tile outlined>col-{{ n === 1 ? 8 : 4 }}</v-card>
        </v-col>
      </v-row>
      <v-row no-gutters class="mt-4">
        <v-col md="7" cols="12">
          <SearchInput />
        </v-col>
        <v-col md="2" sm="6" class="px-2" cols="12">
          <datepicker />
        </v-col>
        <!-- <v-col md="2" sm="6" class="px-2" cols="12">
          <datepicker  />
        </v-col>-->
        <!-- <v-col md="2" cols="12" >
        -->
        <v-col md="1" cols="12">
          <v-btn v-on:click="update" color="primary" block large>OK</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="message" label="Solo" solo></v-text-field>
          <label >{{message}}</label>
        </v-col>
      </v-row>
      <Carlendar />
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'home',

  data() {
    return {
      message: '',
    }
  },
  methods:{
    update:function(){
      console.log( this.message)
    }
  }
}
</script>

<style>
</style>