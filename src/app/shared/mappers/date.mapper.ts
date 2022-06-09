export class MomentToStringDateMapper {
  public static toDateString(dateValue: moment.Moment): string {
    return dateValue.year() + '-' + dateValue.month() + '-' + dateValue.day();
  }
}
