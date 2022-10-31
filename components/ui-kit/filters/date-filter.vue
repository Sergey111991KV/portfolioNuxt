<template>
  <div>
    <div @click="toggle">
      curent-date
    </div>
    <div v-if="isOpen" class="filter_date__popup">
      <div>
        <form>
          <select v-model="form.selected">
            <option v-for="option in options" :value="option.value">
              {{ option.text }}
            </option>
          </select>
          <input placeholder="с" disabled="true" :value="form.dateFrom">
          <input placeholder="по" disabled="true" :value="form.dateTo">
        </form>
      </div>
      <v-date-picker v-model="form.date"></v-date-picker>
      <div class="filter_date">
        <button @click="clear" class="filter_date_button">Очистить</button>
        <button @click="submit" :disabled=disabled class="filter_date_button">Применить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DateFilter",
  data() {
    return {
      form : {
        dateFrom: '22.01',
        dateTo: '23.02',
        selected: 'A',
        date: ''
      },
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      isOpen: false
    }
  },
  mounted() {
    this.date_function()
  },
  computed: {
    disabled() {
      return !(this.form.dateFrom && this.form.dateTo && this.form.selected);
    }
  },
  methods: {
    clear() {
      this.form.dateFrom = ''
      this.form.dateTo = ''
      this.form.selected = undefined
    },
    submit() {
      console.log(!(this.form.dateFrom && this.form.dateTo && this.form.selected))
      console.log(this.form)
      this.$emit('dateFilter', this.form)
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
    date_function() {
      var currentDate = new Date();
      console.log(currentDate);

      var formatted_date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      console.log(formatted_date);

    }
  }
}
</script>

<style scoped>
  .filter_date__popup{
    position: absolute;
    margin-top: 20px;
    border: 1px solid red;
    border-radius: 16px;
    padding: 10px;
  }
</style>
