export type TCustomCalendar = {
  onChange: (selectedDate: Date | Date[] | null) => void;
  value: Date;
  type: string;
};
