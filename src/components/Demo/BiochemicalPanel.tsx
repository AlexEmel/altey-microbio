import { useState, type ReactNode } from "react";
import type { IBiochemicalTest } from "../../interfaces/domain/culture.interface";
import { mockChemicalPanel } from "../../assets/mock/mock";
import styles from "./Demo.module.scss";
import { Flex } from "antd";

export enum ETestResult {
  POS = "+",
  NEG = "-",
  PN = "+/-",
  NN = "-/-",
  NA = "n/a",
}

const testResultsList = Object.values(ETestResult);

export const BiochemicalPanel = (): ReactNode => {
  const [tests, setTests] = useState<IBiochemicalTest[]>(mockChemicalPanel);
  const [pickedResult, setPickedResult] = useState<ETestResult>(ETestResult.NEG);

  const getResultColor = (res: ETestResult): string => {
    switch (res) {
      case ETestResult.POS:
        return styles.panelTestBlue;
      case ETestResult.NEG:
        return styles.panelTestOrange;
      case ETestResult.PN:
        return styles.panelTestPurple;
      case ETestResult.NN:
        return styles.panelTestGreen;
      default:
        return styles.panelTestNa;
    }
  };

  const setTestResult = (id: string): void => {
    const updatedTests = tests.map((t) => {
      return t.id === id ? { ...t, result: pickedResult } : t;
    });
    setTests(updatedTests);
  };

  return (
    <Flex>
      <Flex className={styles.panel}>
        {tests.map((t) => (
          <Flex className={styles.panelTest} key={t.id} onClick={() => setTestResult(t.id)}>
            <Flex className={styles.cellBox}>
              <div className={[styles.cell, getResultColor(t.result)].join(" ")}>{t.result}</div>
            </Flex>
            <Flex className={styles.footer}>
              <h6>{t.code}</h6>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Flex className={styles.picker}>
        {testResultsList.map((tr) => (
          <div className={[styles.option, getResultColor(tr)].join(" ")} onClick={() => setPickedResult(tr)}>
            {tr}
          </div>
        ))}
      </Flex>
    </Flex>
  );
};
