export type TCustomCalendar = {
  onChange: React.Dispatch<any>;
  value: Value;
  valueSecond?: Date;
  type: string;
};

export type Value = Date | undefined;