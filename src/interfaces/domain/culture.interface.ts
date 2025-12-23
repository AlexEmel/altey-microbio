import type { ETestResult } from "../../components/Demo/BiochemicalPanel";

export enum EMedium {
  BLOOD_AGAR = "Кровяной агар",
  SABURO = "Агар сабуро",
}

export enum ESex {
  MALE = "Мужской",
  FEMALE = "Женский",
}

export enum ESusceptibility {
  S = "S",
  I = "I",
  R = "R",
  ATU = "ATU",
  NA = "NA"
}

export enum EExpertSystem {
  EUCST25 = "EUCST25",
}

export interface IPatient {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  bornDate: string;
  sex: ESex;
}

export interface IBiochemicalTest {
  id: string;
  code: string;
  result: ETestResult;
}

export interface IDish {
  id: string;
  number: string;
  medium: EMedium;
  growth: boolean;
}

export interface IColony {
  id: string;
  number: string;
  microorganism: string;
  cfu: string;
}

export interface IMicroorganism {
  code: string;
  name: string;
}

export interface IMaldiTOFResult {
  id: string;
  category: string;
  microorganism: string;
  probability: number;
}

export interface IAntibiogramResult {
  id: string;
  antibioticName: string;
  value: number;
  sir: ESusceptibility;
  expertSystem: EExpertSystem;
}

export interface IExpertRule {
  id: string;
  rule: string;
}

export interface ICulture {
  patient: IPatient;
  dishes: IDish[];
}
