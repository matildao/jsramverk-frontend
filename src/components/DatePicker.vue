<template>
  <div class="datepicker">
    <div class="picker-part">
      <div class="picker-content">
        <button
          v-bind:class="choose === 'date' ? 'active':'picker-button'"
          @click="ChangeActiveChoose('date')"
        >{{ date }}</button>/
        <button
          v-bind:class="choose === 'month' ? 'active':'picker-button'"
          @click="ChangeActiveChoose('month')"
        >{{ month }}</button>/
        <button
          v-bind:class="choose === 'year' ? 'active':'picker-button'"
          @click="ChangeActiveChoose('year')"
        >{{ year }}</button>
      </div>
      <div class="picker-tools">
        <md-button @click="ChangeChosenInput('up')" class="arrow-button">
          <md-icon>arrow_drop_up</md-icon>
        </md-button>
        <md-button @click="ChangeChosenInput('down')" class="arrow-button">
          <md-icon>arrow_drop_down</md-icon>
        </md-button>
      </div>
    </div>
  </div>
</template>


<script>
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Otc",
  "Nov",
  "Dec"
];

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let years = [];
for (let i = 1900; i <= 2019; i++) {
  years.push(i);
}

var finalDate = "";

export default {
  props: {
    sendDataToParent: { type: Function, default: Function }
  },
  data() {
    return {
      date: 1,
      month: months[0],
      year: 2019,
      choose: "date"
    };
  },
  created() {
    this.$emit("created");
  },
  methods: {
    ChangeActiveChoose(buttonChoice) {
      event.preventDefault();

      this.choose = buttonChoice;
    },
    getBirthFromChild() {},
    transformToFinalDateString() {
      let monthToNumber = months.indexOf(this.month) + 1;
      let newDate = this.date < 10 ? "0" + this.date.toString() : this.date;
      let newMonth =
        monthToNumber < 10 ? "0" + monthToNumber.toString() : monthToNumber;
      let newYear = this.year;

      return (
        newYear.toString() +
        "-" +
        newMonth.toString() +
        "-" +
        newDate.toString()
      );
    },

    ChangeChosenInput(direction) {
      switch (this.choose) {
        case "date":
          this.changeDate(direction);
          break;
        case "month":
          this.ChangeMonth(direction);
          break;
        case "year":
          this.ChangeYear(direction);
          break;
        default:
          break;
      }
      finalDate = this.transformToFinalDateString();
      this.sendDataToParent(finalDate);
    },
    changeDate(direction) {
      if (direction === "up") {
        this.date =
          this.date < days[months.indexOf(this.month)] ? this.date + 1 : 1;
      } else {
        this.date =
          this.date === 1 ? days[months.indexOf(this.month)] : this.date - 1;
      }
    },
    ChangeMonth(direction) {
      const index = months.indexOf(this.month);

      if (direction === "up") {
        this.month = this.month !== "Dec" ? months[index + 1] : months[0];
      } else {
        this.month = this.month === "Jan" ? months[11] : months[index - 1];
      }
      this.date = 1;
    },
    ChangeYear(direction) {
      const d = new Date();
      const currentYear = d.getFullYear();
      const indexYear = years.indexOf(this.year);

      if (direction === "up") {
        this.year = this.year === currentYear ? years[0] : years[indexYear + 1];
      } else {
        this.year =
          this.year === 2019 || this.year > 1900 ? this.year - 1 : currentYear;
      }
    }
  }
};
</script>


<style scoped>
.datepicker {
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 5px;
  margin-top: 1em;
  padding: 5px;
  margin-bottom: 2em;
}

.picker-part {
  display: flex;
  flex-direction: row;
}

.picker-content {
  text-align: center;
  padding: 1em;
  border-bottom: 1px solid rgb(173, 173, 173);
}

.md-icon-button {
  margin-bottom: 2px;
  margin-top: 2px;
}

.picker-tools {
  border-bottom: 1px solid rgb(173, 173, 173);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.active {
  background-color: #a3a3a3;
  border: none;
}

.picker-button {
  background-color: transparent;
  border: none;
}

.picker-button:hover {
  cursor: text;
}

.active:hover {
  cursor: text;
}

.arrow-button {
  min-width: 10px;
  margin: 0;
  height: 20px;
}

.md-ripple {
  padding: 0 !important;
}
</style>