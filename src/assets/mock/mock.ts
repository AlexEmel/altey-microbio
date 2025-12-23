import { ETestResult } from "../../components/Demo/BiochemicalPanel";
import {
  EExpertSystem,
  EMedium,
  ESex,
  ESusceptibility,
  type IAntibiogramResult,
  type IBiochemicalTest,
  type IColony,
  type ICulture,
  type IDish,
  type IExpertRule,
  type IMaldiTOFResult,
  type IPatient,
} from "../../interfaces/domain/culture.interface";

export const mockPatient: IPatient = {
  id: "123",
  firstName: "Алексей",
  lastName: "Емельянов",
  middleName: "Олегович",
  bornDate: "2011-10-05T14:48:00.000Z",
  sex: ESex.MALE,
};

export const mockDishes: IDish[] = [
  {
    id: "123",
    number: "1-1",
    medium: EMedium.BLOOD_AGAR,
    growth: true,
  },
  {
    id: "234",
    number: "1-2",
    medium: EMedium.SABURO,
    growth: true,
  },
  {
    id: "345",
    number: "1-3",
    medium: EMedium.SABURO,
    growth: false,
  },
];

export const mockCulture: ICulture = {
  patient: mockPatient,
  dishes: mockDishes,
};

export const mockChemicalPanel: IBiochemicalTest[] = [
  {
    id: "123",
    code: "URE",
    result: ETestResult.NA,
  },
  {
    id: "234",
    code: "LIP",
    result: ETestResult.NA,
  },
  {
    id: "345",
    code: "AMY",
    result: ETestResult.NA,
  },
  {
    id: "456",
    code: "TRIG",
    result: ETestResult.NA,
  },
  {
    id: "567",
    code: "CREA",
    result: ETestResult.NA,
  },
];

export const mockMaldi: IMaldiTOFResult[] = [
  {
    id: "maldi-1",
    category: "()()",
    microorganism: "Staphylococcus aureus",
    probability: 9.837,
  },
  {
    id: "maldi-2",
    category: "()()",
    microorganism: "Escherichia coli",
    probability: 9.802,
  },
  {
    id: "maldi-3",
    category: "()()",
    microorganism: "Klebsiella pneumoniae",
    probability: 9.761,
  },
  {
    id: "maldi-4",
    category: "()()",
    microorganism: "Pseudomonas aeruginosa",
    probability: 9.724,
  },
  {
    id: "maldi-5",
    category: "()()",
    microorganism: "Acinetobacter baumannii",
    probability: 9.689,
  },
  {
    id: "maldi-6",
    category: "()()",
    microorganism: "Enterococcus faecalis",
    probability: 9.652,
  },
  {
    id: "maldi-7",
    category: "()()",
    microorganism: "Enterococcus faecium",
    probability: 9.617,
  },
  {
    id: "maldi-8",
    category: "()()",
    microorganism: "Staphylococcus epidermidis",
    probability: 9.583,
  },
  {
    id: "maldi-9",
    category: "()()",
    microorganism: "Streptococcus pneumoniae",
    probability: 9.548,
  },
  {
    id: "maldi-10",
    category: "()()",
    microorganism: "Candida albicans",
    probability: 9.412,
  },
  {
    id: "maldi-11",
    category: "()()",
    microorganism: "Candida glabrata",
    probability: 9.476,
  },
  {
    id: "maldi-12",
    category: "()()",
    microorganism: "Proteus mirabilis",
    probability: 9.439,
  },
  {
    id: "maldi-13",
    category: "()()",
    microorganism: "Serratia marcescens",
    probability: 9.403,
  },
  {
    id: "maldi-14",
    category: "()()",
    microorganism: "Citrobacter freundii",
    probability: 9.368,
  },
  {
    id: "maldi-15",
    category: "()()",
    microorganism: "Morganella morganii",
    probability: 9.232,
  },
];

export const mockColonies: IColony[] = [
  {
    id: "123",
    number: "1-1",
    microorganism: "Staphylococcus aureus",
    cfu: "1,000*10^5 КОЕ/мл",
  },
  {
    id: "234",
    number: "1-2",
    microorganism: "Escherichia coli",
    cfu: "1,000*10^7 КОЕ/мл",
  },
  {
    id: "345",
    number: "1-3",
    microorganism: "Leuconostoc mesenteroides subspecies mesenteroides",
    cfu: "не установлен",
  },
];

// export const mockAntibiogramResults: IAntibiogramResult[] = [
//   {
//     id: "abg-1",
//     antibioticName: "Amoxicillin/Clavulanic acid",
//     value: 18,
//     sir: ESusceptibility.S,
//     expertSystem: EExpertSystem.EUCST25,
//   },
//   {
//     id: "abg-2",
//     antibioticName: "Ceftriaxone",
//     value: 26,
//     sir: ESusceptibility.S,
//     expertSystem: EExpertSystem.EUCST25,
//   },
//   {
//     id: "abg-3",
//     antibioticName: "Ciprofloxacin",
//     value: 12,
//     sir: ESusceptibility.R,
//     expertSystem: EExpertSystem.EUCST25,
//   },
//   {
//     id: "abg-4",
//     antibioticName: "Meropenem",
//     value: 30,
//     sir: ESusceptibility.S,
//     expertSystem: EExpertSystem.EUCST25,
//   },
//   {
//     id: "abg-5",
//     antibioticName: "Piperacillin/Tazobactam",
//     value: 16,
//     sir: ESusceptibility.I,
//     expertSystem: EExpertSystem.EUCST25,
//   },
//   {
//     id: "abg-6",
//     antibioticName: "Gentamicin",
//     value: 14,
//     sir: ESusceptibility.I,
//     expertSystem: EExpertSystem.EUCST25,
//   },
//   {
//     id: "abg-7",
//     antibioticName: "Vancomycin",
//     value: 19,
//     sir: ESusceptibility.S,
//     expertSystem: EExpertSystem.EUCST25,
//   },
//   {
//     id: "abg-8",
//     antibioticName: "Linezolid",
//     value: 24,
//     sir: ESusceptibility.S,
//     expertSystem: EExpertSystem.EUCST25,
//   },
//   {
//     id: "abg-9",
//     antibioticName: "Colistin",
//     value: 9,
//     sir: ESusceptibility.ATU,
//     expertSystem: EExpertSystem.EUCST25,
//   },
//   {
//     id: "abg-10",
//     antibioticName: "Trimethoprim/Sulfamethoxazole",
//     value: 11,
//     sir: ESusceptibility.R,
//     expertSystem: EExpertSystem.EUCST25,
//   },
// ];

export const mockAntibiogramResults: IAntibiogramResult[] = [
  {
    id: "abg-1",
    antibioticName: "Amoxicillin/Clavulanic acid",
    value: 18,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-2",
    antibioticName: "Ceftriaxone",
    value: 26,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-3",
    antibioticName: "Ciprofloxacin",
    value: 12,
    sir: ESusceptibility.R,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-4",
    antibioticName: "Meropenem",
    value: 30,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-5",
    antibioticName: "Piperacillin/Tazobactam",
    value: 16,
    sir: ESusceptibility.I,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-6",
    antibioticName: "Gentamicin",
    value: 14,
    sir: ESusceptibility.I,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-7",
    antibioticName: "Vancomycin",
    value: 19,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-8",
    antibioticName: "Linezolid",
    value: 24,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-9",
    antibioticName: "Colistin",
    value: 9,
    sir: ESusceptibility.ATU,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-10",
    antibioticName: "Trimethoprim/Sulfamethoxazole",
    value: 11,
    sir: ESusceptibility.R,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-11",
    antibioticName: "Imipenem",
    value: 28,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-12",
    antibioticName: "Ceftazidime",
    value: 17,
    sir: ESusceptibility.I,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-13",
    antibioticName: "Cefepime",
    value: 21,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-14",
    antibioticName: "Levofloxacin",
    value: 13,
    sir: ESusceptibility.R,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-15",
    antibioticName: "Amikacin",
    value: 22,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-16",
    antibioticName: "Tigecycline",
    value: 18,
    sir: ESusceptibility.I,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-17",
    antibioticName: "Azithromycin",
    value: 10,
    sir: ESusceptibility.R,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-18",
    antibioticName: "Doxycycline",
    value: 20,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-19",
    antibioticName: "Cefotaxime",
    value: 23,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-20",
    antibioticName: "Ertapenem",
    value: 27,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-21",
    antibioticName: "Nitrofurantoin",
    value: 15,
    sir: ESusceptibility.NA,
    expertSystem: EExpertSystem.EUCST25,
  },
];

export const mockExpertRules: IExpertRule[] = [
  {
    id: "123",
    rule: "[Гентамицин] ВНИМАНИЕ! Изолят обладает резистентностью Высокого уровня к гентамицину и другим аминогликозидам, за исключением стрептомицина. Синергизм с пенициллинами и/или гликопептидами отсутcтвует.",
  },
  {
    id: "234",
    rule: "Выделенный микроорганизм, в дополнение к природной резистентности грамположительных бактерий, природно резистентен к фузидовой кислоте, цефалоспоринам, аминогликозидам (низкий уровень резистентности), макролидам и сульфаниламидам.",
  },
  {
    id: "345",
    rule: "Выделенный изолят Enterococcus, чувствительный к ванкомицину, также чувствителен к далбаванцину, оритаванцину и телаванцину.",
  },
];
