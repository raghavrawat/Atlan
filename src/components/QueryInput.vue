<template>
  <div class="query-input-container">
    <v-textarea
        name="input-7-1"
        filled
        flat
        clearable
        clear-icon="mdi-close-circle"
        placeholder="Enter the query here...."
        background-color="#fff"
        auto-grow
        v-model="queryInput"
        :error-messages="errorMessage"
    ></v-textarea>
    <v-btn class="run-query" color="primary" @click="handleClick">Run Query</v-btn>
  </div>
</template>

<script>
export default {
  name: 'QueryInput',
  props: {
    errorMessage: {
      type: String,
      required: false,
      default: ''
    },
    selectedQuery: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    queryInput: {
      get () {
        return this.selectedQuery
      },
      set (val) {
        this.$emit('change', val)
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    },
  }
}
</script>

<style scoped lang="scss">
.query-input-container {
  display: flex;
  align-items: center;

  .run-query {
    margin-left: 16px;
  }
}
</style>