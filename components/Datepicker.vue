<template>
  <div>
    <v-menu
      v-model="menu2"
      :close-on-content-click="false"
      :nudge-right="0"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          readonly
          v-bind="attrs"
          solo
          prepend-inner-icon="mdi-calendar"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker default v-model="date" color="green lighten-1" header-color="primary" range>
        
          <v-card-actions>
            <v-btn  color="primary" v-on:click="cancel()">Cancel</v-btn>
            <v-btn  color="primary" v-on:click="ok(date)">OK</v-btn>
          </v-card-actions>
        
      </v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  updated(){
// alert('data changed!');
  },
  beforeCreate(){
    
  },
  beforeDestroy(){
    
  },
  name:'x-date-picker',
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    // date:'',
    menu: false,
    modal: false,
    menu2: false,
    
  }),
  
  methods: {
  cancel:function(){
    this.menu2 = false;
    console.log(this.menu2);
  },
  ok(date){
    // var list = this.date
    console.log(date);
    this.menu2 = false
    this.$store.commit('setDate',date)
    // this.$emit("setParentComponentDetails",date);  
  }
}
}
</script>