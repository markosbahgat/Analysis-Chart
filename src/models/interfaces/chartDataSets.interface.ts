export interface IDataSets {
  id: string;
  dataSets: {
    label: string;
    data: number[];
    borderColor: string;
    fill: boolean;
    borderWidth: number;
    hoverRadius?: number;
    radius?: number;
    backgroundColor: string;
  };
}
