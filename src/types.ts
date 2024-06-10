export interface AppState {
  app: {
    selectedOption: string;
    discountCode: string;
    notes: string;
  };
}

export interface Radio {
  setSelectedOption: Function;
  selectedOption: string;
  discountCode: string;
  notes: string;
  dispatch: Function;
}

export interface Notes {
  notes: string[];
  dispatch: any;
  setNotes: any;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}
