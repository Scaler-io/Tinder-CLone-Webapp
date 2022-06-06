export interface DateFormatOption {
  parse: ParseInfo;
  display: DisplayInfo;
}

interface ParseInfo {
  dateInput: string;
}

interface DisplayInfo {
  dateInput: string; // this is how your date will get displayed on the Input
  monthYearLabel: string;
  dateA11yLabel: string;
  monthYearA11yLabel: string;
}

export const DD_MM_YYYY: DateFormatOption = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export const YYYY_MM_DD: DateFormatOption = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export const ApprovedDateFormats = {
  dateMonthYear: DD_MM_YYYY,
  yearMonthDate: YYYY_MM_DD,
};
