<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <v-flex>
              <v-card height="100%">
                <div id="grid" class="ag-theme-material"></div>
                <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
                  <v-btn color="teal" flat value="recent">
                    <span>Recent</span>
                    <v-icon>history</v-icon>
                  </v-btn>

                  <v-btn color="teal" flat value="favorites">
                    <span>Favorites</span>
                    <v-icon>favorite</v-icon>
                  </v-btn>

                  <v-btn color="teal" flat value="nearby">
                    <span>Nearby</span>
                    <v-icon>place</v-icon>
                  </v-btn>
                </v-bottom-nav>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import * as agGrid from 'ag-grid-community'

export default {
  data() {
    return {
      bottomNav: 'recent'
    }
  },
  computed: {
    gridOptions() {
      return {
        columnDefs: [
          { headerName: 'Make', field: 'make', sortable: true, filter: true },
          { headerName: 'Model', field: 'model', sortable: true, filter: true },
          { headerName: 'Price', field: 'price', sortable: true, filter: true }
        ],
        rowData: [
          { make: 'Toyota', model: 'Celica', price: 35000 },
          { make: 'Ford', model: 'Mondeo', price: 32000 },
          { make: 'Porsche', model: 'Boxter', price: 72000 }
        ]
      }
    }
  },
  mounted() {
    const grid = document.querySelector('#grid')
    new agGrid.Grid(grid, this.gridOptions)
  }
}
</script>
