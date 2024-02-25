<template>
  <div class="query-view-container">
    <query-schemas
        :selected-schema="selectedSchema"
        @updateSelectedSchema="updateSelectedSchema"
    />
    <query-container :pageTitle="pageTitle" />
  </div>
</template>

<script>
import QuerySchemas from '@/components/QuerySchemas.vue'
import QueryContainer from '@/components/QueryContainer.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'QueryView',
  components: {
    QuerySchemas,
    QueryContainer
  },
  computed: {
    ...mapState('sql', ['selectedSchema', 'pageTitle'])
  },
  methods: {
    ...mapActions('sql', ['setSelectedSchema']),
    updateSelectedSchema (val) {
      this.setSelectedSchema(val)
    }
  }
}
</script>

<style scoped lang="scss">
.query-view-container {
  display: flex;
  height: 100vh;
}
</style>