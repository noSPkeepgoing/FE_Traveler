export type TCustomCalendar = {
  onChange: React.Dispatch<any>;
  value: Value;
  valueSecond?: Date;
  type: string;
};

type ValuePiece = Date | undefined;

export type Value = ValuePiece;