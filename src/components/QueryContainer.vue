<template>
  <div class="query-container">
    <v-toolbar flat class="query-header" height="68">
      <h3>{{ pageTitle }}</h3>
    </v-toolbar>
    <div class="content-container">
      <query-input
          :error-message="errorMessage"
          :selectedQuery="selectedQuery"
          @click="handleClick"
          @change="handleChange"
      />
      <data-table v-if="!errorMessage && !isFirstRun" :loading="loading" :headers="headers" :content="content" />
    </div>
  </div>
</template>

<script>
import QueryInput from '@/components/QueryInput.vue'
import { mapActions, mapState, mapMutations } from 'vuex'
import DataTable from '@/components/DataTable.vue'

export default {
  name: 'QueryContainer',
  components: {
    DataTable,
    QueryInput
  },
  data () {
    return {
      headers: [],
      content: []
    }
  },
  props: {
    pageTitle: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    ...mapState('sql', ['loading', 'isFirstRun', 'errorMessage', 'selectedQuery'])
  },
  methods: {
    ...mapMutations('sql', ['setSelectedQuery']),
    ...mapActions('sql', ['getSQLData']),
    async handleClick () {
      const sqlData = await this.getSQLData(this.selectedQuery)
      if (sqlData) {
       this.headers = sqlData.headers
       this.content = sqlData.content
      }
    },
    handleChange (val) {
      this.setSelectedQuery(val)
    }
  }
}
</script>

<style scoped lang="scss">
.query-container {
  flex: 1 1 auto;
  padding: 0 0 0 240px;
  overflow: hidden;

  .query-header {
    height: 68px;
    background-color: #fff;
    border-color: #fff;
  }

  .content-container {
    background-color: #FBFBFB;
    padding: 32px;
    height: 100%;
  }
}
</style>