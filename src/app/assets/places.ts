interface Province {
  value: string;
  viewValue: string;
}

export interface Communities {
  name: string;
  provinces: Province[];
}
