export type Tcheckbox = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  id?: string;
  name?: string;
  disabled?: boolean;
};
