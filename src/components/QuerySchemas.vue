<template>
  <div class="query-navigation-drawer">
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Atlan
          </v-list-item-title>
          <v-list-item-subtitle>
            sql-builder
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        flat
      >
        <v-list-item-group
            v-model="_selectedSchema"
            color="indigo"
        >
          <v-list-item
              v-for="(item) in items"
              :key="item.id"
              :value="item.id"
              :disabled="item.id === _selectedSchema"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { navigationItems } from '@/constants'

export default {
  name: 'QuerySchemas',
  data () {
    return {
      items: navigationItems
    }
  },
  props: {
    selectedSchema: {
      type: Number,
      required: false,
      default: 1
    }
  },
  computed: {
    _selectedSchema: {
      get () {
        return this.selectedSchema
      },
      set (val) {
        this.$emit('updateSelectedSchema', val)
      }
    }
  },
}
</script>

<style scoped lang="scss">
.query-navigation-drawer {
  position: fixed;
  height: 100%;
  width: 240px;
  z-index: 1;
}
</style>