import { EExpertSystem, EMedium, ESex, ESusceptibility } from "@/enums/microbio.enums";
import { ETestResult } from "../../components/Demo/BiochemicalPanel";
import {
  type IAntibiogramResult,
  type IBiochemicalTest,
  type ICulture,
  type IDish,
  type IExpertRule,
  type IMaldiTOFResult,
  type IMicrobio,
  type IOrder,
  type IPatient
} from "../../interfaces/domain/culture.interface";

const mockPatient: IPatient = {
  id: "123",
  firstName: "Алексей",
  lastName: "Емельянов",
  middleName: "Олегович",
  bornDate: "2011-10-05T14:48:00.000Z",
  sex: ESex.MALE,
};

const mockOrder: IOrder = {
  patient: mockPatient,
  services: [
    {
      id: "123",
      name: "Исследование: посев мочи на аэробные и анаэробные микроорганизмы с определением чувствительности",
      biomaterial: "Моча",
    },
  ],
};

const mockChemicalPanel: IBiochemicalTest[] = [
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

const mockMaldi: IMaldiTOFResult[] = [
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

const mockAntibiogramResults: IAntibiogramResult[] = [
  {
    id: "abg-1",
    antibiotic: {
      name: "Amoxicillin/Clavulanic acid",
      code: "AMX",
    },
    value: 18,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-2",
    antibiotic: {
      name: "Ceftriaxone",
      code: "CFX",
    },
    value: 26,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-3",
    antibiotic: {
      name: "Ciprofloxacin",
      code: "CIP",
    },
    value: 12,
    sir: ESusceptibility.R,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-4",
    antibiotic: {
      name: "Meropenem",
      code: "MEM",
    },
    value: 30,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-5",
    antibiotic: {
      name: "Piperacillin/Tazobactam",
      code: "TZP",
    },
    value: 16,
    sir: ESusceptibility.I,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-6",
    antibiotic: {
      name: "Gentamicin",
      code: "GEN",
    },
    value: 14,
    sir: ESusceptibility.I,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-7",
    antibiotic: {
      name: "Vancomycin",
      code: "VAN",
    },
    value: 19,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-8",
    antibiotic: {
      name: "Linezolid",
      code: "LZD",
    },
    value: 24,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-9",
    antibiotic: {
      name: "Colistin",
      code: "CST",
    },
    value: 9,
    sir: ESusceptibility.ATU,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-10",
    antibiotic: {
      name: "Trimethoprim/Sulfamethoxazole",
      code: "SXT",
    },
    value: 11,
    sir: ESusceptibility.R,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-11",
    antibiotic: {
      name: "Imipenem",
      code: "IPM",
    },
    value: 28,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-12",
    antibiotic: {
      name: "Ceftazidime",
      code: "CAZ",
    },
    value: 17,
    sir: ESusceptibility.I,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-13",
    antibiotic: {
      name: "Cefepime",
      code: "FEP",
    },
    value: 21,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-14",
    antibiotic: {
      name: "Levofloxacin",
      code: "LVX",
    },
    value: 13,
    sir: ESusceptibility.R,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-15",
    antibiotic: {
      name: "Amikacin",
      code: "AMK",
    },
    value: 22,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-16",
    antibiotic: {
      name: "Tigecycline",
      code: "TGC",
    },
    value: 18,
    sir: ESusceptibility.I,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-17",
    antibiotic: {
      name: "Azithromycin",
      code: "AZM",
    },
    value: 10,
    sir: ESusceptibility.R,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-18",
    antibiotic: {
      name: "Doxycycline",
      code: "DOX",
    },
    value: 20,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-19",
    antibiotic: {
      name: "Cefotaxime",
      code: "CTX",
    },
    value: 23,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-20",
    antibiotic: {
      name: "Ertapenem",
      code: "ETP",
    },
    value: 27,
    sir: ESusceptibility.S,
    expertSystem: EExpertSystem.EUCST25,
  },
  {
    id: "abg-21",
    antibiotic: {
      name: "Nitrofurantoin",
      code: "NIT",
    },
    value: 15,
    sir: ESusceptibility.NA,
    expertSystem: EExpertSystem.EUCST25,
  },
];

const mockExpertRules: IExpertRule[] = [
  {
    id: "123",
    ruleText:
      "[Гентамицин] ВНИМАНИЕ! Изолят обладает резистентностью Высокого уровня к гентамицину и другим аминогликозидам, за исключением стрептомицина. Синергизм с пенициллинами и/или гликопептидами отсутcтвует.",
  },
  {
    id: "234",
    ruleText:
      "Выделенный микроорганизм, в дополнение к природной резистентности грамположительных бактерий, природно резистентен к фузидовой кислоте, цефалоспоринам, аминогликозидам (низкий уровень резистентности), макролидам и сульфаниламидам.",
  },
  {
    id: "345",
    ruleText:
      "Выделенный изолят Enterococcus, чувствительный к ванкомицину, также чувствителен к далбаванцину, оритаванцину и телаванцину.",
  },
];


const mockDishes: IDish[] = [
  {
    id: "123",
    number: "1-1",
    medium: EMedium.BLOOD_AGAR,
    growth: true,
    colonies: [
      {
        id: "123",
        dishId: "123",
        number: "1-1",
        cfu: "",
        biochemicalTests: mockChemicalPanel,
        massSpectrometry: mockMaldi,
        identification: {
          id: "123",
          colonyId: "123",
          microorganism: {
            code: "STA",
            name: "Staphylococcus aureus",
          },
          cfu: "10*7",
          isIdentified: true,
        },
        antibiogram: {
          results: mockAntibiogramResults,
          evaluation: mockExpertRules,
        },
      },
    ],
  },
  {
    id: "234",
    number: "1-2",
    medium: EMedium.SABURO,
    growth: true,
    colonies: [],
  },
  {
    id: "345",
    number: "1-3",
    medium: EMedium.SABURO,
    growth: false,
    colonies: [],
  },
];

export const mockCulture: ICulture = {
  dishes: mockDishes,
}

export const mockMicrobio: IMicrobio = {
  order: mockOrder,
  culture: mockCulture,
}