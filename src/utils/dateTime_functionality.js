export default class DateTimeFormatter {
  static getFormattedDate(date) {
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
      "Oct",
      "Nov",
      "Dec",
    ];
    const inputDate = new Date(date);
    const month = months[inputDate.getMonth()];
    return `${month} ${inputDate.getUTCFullYear()}`;
  }
}
