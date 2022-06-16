import { IData } from "./chartsData.interface";

export interface IDataSets {
    label: string,
    data: number[],
    borderColor: string,
    fill: boolean,
    borderWidth:number
    backgroundColor:string,
}
