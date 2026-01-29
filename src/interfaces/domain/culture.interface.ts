import type { ETestResult } from "@/components/Demo/BiochemicalPanel";
import type { EExpertSystem, EMedium, ESex, ESusceptibility } from "@/enums/microbio.enums";

export interface IPatient {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  bornDate: string;
  sex: ESex;
}

export interface IOrderService {
  id: string;
  name: string;
  biomaterial: string;
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
  colonies: IColony[];
}

export interface IColony {
  id: string;
  dishId: string;
  number: string;
  cfu: string;
  biochemicalTests: IBiochemicalTest[];
  identification: IIdentification;
  massSpectrometry: IMaldiTOFResult[];
  antibiogram: {
    results: IAntibiogramResult[];
    evaluation: IExpertRule[];
  };
}

export interface IMicroorganism {
  code: string;
  name: string;
}

export interface IIdentification {
  id: string;
  colonyId: string;
  microorganism: IMicroorganism | null;
  cfu: string;
  isIdentified: boolean;
}

export interface IAntibiotic {
  code: string;
  name: string;
}

export interface IMaldiTOFResult {
  id: string;
  category: string;
  microorganism: string;
  probability: number;
}

export interface IExpertRule {
  id: string;
  ruleText: string;
}

export interface IAntibiogramResult {
  id: string;
  antibiotic: IAntibiotic;
  value: number;
  sir: ESusceptibility;
  expertSystem: EExpertSystem;
}

export interface IOrder {
  patient: IPatient;
  services: IOrderService[];
}

export interface ICulture {
  dishes: IDish[];
}

export interface IMicrobio {
  order: IOrder;
  culture: ICulture;
}
