<template>
  <v-container>
     <client-only>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
      @click:row="rowClick"
    ></v-data-table>
    </client-only>    
    <v-container>
      <v-layout justify-center>
        <v-btn color="secondary" @click="addClick">글쓰기</v-btn>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>

  export default {
    computed: {
      headers() {
        return this.$store.state.board.headers;
      },
      desserts() {
        return this.$store.state.board.desserts;
      }
    },
    methods: {
      addClick() {
        this.$router.push('/write');
      },
      rowClick(items) {
        this.$router.push('/about/'+ items.no);
      }
    },
  }
</script>