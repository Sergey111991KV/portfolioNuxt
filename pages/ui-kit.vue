<template>
  <div>
    <h1>UIKit</h1>
    <section>
      <h3>Date Filter</h3>
      <div class="date_filter_container">
        <date-filter></date-filter>
      </div>
    </section>
    <section>
      <h3>Table component</h3>
      <ui-table>
        <ui-thead>
          <ui-tr>
            <ui-th>
              ...
            </ui-th>
            <ui-th>
              header 1
            </ui-th>
            <ui-th>
              header 2
            </ui-th>
          </ui-tr>
        </ui-thead>
<!--        <ui-tbody>-->
<!--          <ui-tr *ngFor="let row of table.items; let index = index">-->
<!--            <ui-td>-->
<!--              ...-->
<!--            </ui-td>-->
<!--            <ui-td>-->
<!--              cell -1-->
<!--            </ui-td>-->
<!--            <ui-td>-->
<!--              cell -2-->
<!--            </ui-td>-->
<!--          </ui-tr>-->
<!--        </ui-tbody>-->
      </ui-table>
    </section>

  </div>
</template>

<script>
import UiTable from '@/components/ui-kit/table/table'
import UiTbody from "~/components/ui-kit/table/tbody";
import UiTr from "~/components/ui-kit/table/tr";
import UiTd from "~/components/ui-kit/table/td";
import UiThead from "~/components/ui-kit/table/thead";
import UiTh from "~/components/ui-kit/table/th";
import DateFilter from "~/components/ui-kit/filters/date-filter"

export default {
  name: "ui-kit",
  components: {UiTh, UiThead, UiTd, UiTr, UiTbody, UiTable, DateFilter}
}
</script>

<style scoped>
section{
  margin-top: 100px;
}
.date_filter_container{
  margin-top: 100px;
}
</style>
