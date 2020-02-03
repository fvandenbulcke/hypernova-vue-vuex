<template>
  <div>
    my name is {{data.name}}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LysModule',
  computed: {
    ...mapGetters(['data']),
  },

  methods: {
    ...mapActions(['loadData']),
  },

  created() {
    this.loadData();
  },
};
</script>
