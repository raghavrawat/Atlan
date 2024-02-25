<template>
  <div class="data-table-container">
    <v-text-field
        class="search-field"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
    ></v-text-field>
    <v-data-table
        dense
        :loading="loading"
        :headers="getHeader"
        :items="itemsArray"
        fixed-header
        fixed-footer
        height="400"
        class="elevation-1"
        :search="search"
    />
  </div>

</template>

<script>
export default {
  name: 'DataTable',
  props: {
    headers: {
      type: Array,
      default: () => ([]),
      required: false
    },
    content: {
      type: Array,
      default: () => ([]),
      required: false
    },
    loading: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    getHeader () {
      return this.headers
    },
    itemsArray () {
      return this.content
    }
  },
  methods: {
    filterText (value, search) {
      return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLowerCase().indexOf(search.toLowerCase()) !== -1
    }
  }
}
</script>

<style scoped>
.elevation-1 {
  height: calc(100vh - 68px - 32px - 160px - 36px - 16px - 32px);
  overflow: scroll;
}
.search-field {
  width: 300px;
  margin-bottom: 16px;
}

.elevation-1 >>> .v-data-table-header th {
  font-size: 16px;
  padding: 8px;
}
</style>