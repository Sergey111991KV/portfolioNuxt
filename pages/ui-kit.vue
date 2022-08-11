<template>
  <div>
    <h1>UIKit</h1>
    <h3>Table component</h3>
    <ui-kit-table>

      <ui-kit-thead>
        <ui-kit-tr>
          <ui-kit-th>
            ...
          </ui-kit-th>
          <ui-kit-th>
            header s 1
          </ui-kit-th>
          <ui-kit-th>
            header 2
          </ui-kit-th>
        </ui-kit-tr>
      </ui-kit-thead>
      <ui-kit-tbody>
        <ui-kit-tr *ngFor="let row of table.items; let index = index">
          <ui-kit-td>
            ...
          </ui-kit-td>
          <ui-kit-td>
            cell -1
          </ui-kit-td>
          <uiskit-td>
            cell -2
          </uiskit-td>
        </ui-kit-tr>
      </ui-kit-tbody>
    </ui-kit-table>
  </div>
</template>

<script>
export default {
  name: "ui-kit"
}
</script>

<style scoped>

</style>
