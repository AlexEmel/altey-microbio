import {
  CloseOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  DownSquareOutlined,
  PlusSquareOutlined,
  PrinterOutlined,
  ProfileOutlined,
  ReloadOutlined,
  SaveOutlined,
  SignatureOutlined,
  UpSquareOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Dropdown, Flex, InputNumber, Popconfirm, Table, Tooltip, type MenuProps } from "antd";
import Column from "antd/es/table/Column";
import { useState, type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import bacteriaIconWhite from "../../assets/images/bacteria-white.svg";
import bacteriaIcon from "../../assets/images/bacteria.svg";
import {
  mockAntibiogramResults,
  mockColonies,
  mockDishes,
  mockExpertRules,
  mockMaldi,
  mockPatient,
} from "../../assets/mock/mock";
import {
  EMedium,
  ESusceptibility,
  type IAntibiogramResult,
  type IColony,
  type IDish,
  type IExpertRule,
  type IMaldiTOFResult,
  type IPatient,
} from "../../interfaces/domain/culture.interface";
import styles from "./Demo.module.scss";
import { BiochemicalPanel } from "./BiochemicalPanel";

export const Demo = (): ReactNode => {
  const [patient] = useState<IPatient>(mockPatient);
  const [dishes, setDishes] = useState<IDish[]>(mockDishes);
  const [dishesCollapsed, setDishesCollapsed] = useState<boolean>(false);
  const [antibiogram] = useState<IAntibiogramResult[]>(mockAntibiogramResults);
  const [colonyCollapsed, setColonyCollapsed] = useState<boolean>(false);
  const [colonies, setColonies] = useState<IColony[]>(mockColonies);
  const [abgCollapsed, setAbgCollapsed] = useState<boolean>(true);
  const [maldiResults] = useState<IMaldiTOFResult[]>(mockMaldi);
  const [maldiCollapsed, setMaldiCollapsed] = useState<boolean>(true);
  const [chemicalPanelCollapsed, setChemicalPanelCollapsed] = useState<boolean>(true);
  const [expertRules] = useState<IExpertRule[]>(mockExpertRules);
  const [esCollapsed, setEsCollapsed] = useState<boolean>(true);

  const renderDishes = (): ReactNode => {
    const deleteDish = (id: string): void => {
      const filteredDishes = dishes.filter((d) => d.id !== id);
      setDishes(filteredDishes);
    };

    const generateNewDish = (): void => {
      const id = uuidv4();
      const number = `1-${dishes.length + 1}`;
      const newDish: IDish = {
        id,
        number,
        medium: EMedium.BLOOD_AGAR,
        growth: false,
      };
      setDishes([...dishes, newDish]);
    };

    const generateNewColony = (): void => {
      const id = uuidv4();
      const number = `1-${colonies.length + 1}`;
      const newColony: IColony = {
        id,
        number,
        microorganism: "",
        cfu: "",
      };
      setColonies([...colonies, newColony]);
    };

    const getMediumClass = (medium: EMedium): string => {
      switch (medium) {
        case EMedium.BLOOD_AGAR:
          return [styles.medium, styles.red].join(" ");
        case EMedium.SABURO:
          return [styles.medium, styles.purple].join(" ");
      }
    };

    return (
      <>
        {dishes.map((d) => (
          <Flex
            key={d.id}
            className={[styles.dish, dishesCollapsed ? styles.collapsed : styles.expanded].join(" ")}
          >
            <div className={getMediumClass(d.medium)}>
              {d.growth && <img src={bacteriaIconWhite} className={styles.bacteriaIcon} />}
            </div>
            <Flex vertical>
              <Flex gap={5}>
                <h5>{d.number}</h5>
                {!dishesCollapsed && <h6>{d.medium}</h6>}
              </Flex>
              <Flex gap={5}>
                {!dishesCollapsed && (
                  <span className={d.growth ? styles.redText : styles.greenText}>
                    {d.growth ? "РОСТ" : "РОСТА НЕТ"}
                  </span>
                )}
                <Flex className={[styles.addElement, styles.addElementSmall].join(" ")}>
                  <Tooltip title="Добавить новую колонию" placement="right">
                    <PlusSquareOutlined onClick={generateNewColony} />
                  </Tooltip>
                </Flex>
              </Flex>
            </Flex>
            <Flex className={styles.closeBtn}>
              <Popconfirm
                title="Удалить посев?"
                description="Вы уверены, что хотите удалить этот посев и все связанные элементы?"
                okText="Да"
                cancelText="Нет"
                onConfirm={() => deleteDish(d.id)}
              >
                <CloseOutlined />
              </Popconfirm>
            </Flex>
          </Flex>
        ))}
        <Flex className={styles.addDish}>
          <Tooltip title="Добавить новый посев" placement="right">
            <PlusSquareOutlined onClick={generateNewDish} />
          </Tooltip>
        </Flex>
      </>
    );
  };

  const renderTopButtons = (): ReactNode => {
    return (
      <>
        <Button icon={<ReloadOutlined />}>Обновить</Button>
        <Button icon={<SaveOutlined />}>Сохранить</Button>
        <Button icon={<UserOutlined />}>Утвердить</Button>
        <Button icon={<PrinterOutlined />}>Печать</Button>
        <Button icon={<SignatureOutlined />}>Общее заключение</Button>
        <Button icon={<ProfileOutlined />}>Доп. показатели</Button>
      </>
    );
  };

  const renderPatientInfo = (): ReactNode => {
    return (
      <Flex className={styles.orderInfo}>
        <h3>{`${patient.lastName} ${patient.firstName} ${patient.middleName}, ${new Date(patient.bornDate).toLocaleDateString()}`}</h3>
        <span>
          Биоматериал: Моча Исследование: посев мочи на аэробные и анаэробные микроорганизмы с определением
          чувствительности
        </span>
      </Flex>
    );
  };

  const renderDishCollapseBtn = (): ReactNode => {
    return dishesCollapsed ? (
      <DoubleRightOutlined
        className={styles.collapseBtn}
        onClick={() => setDishesCollapsed(!dishesCollapsed)}
      />
    ) : (
      <DoubleLeftOutlined
        className={styles.collapseBtn}
        onClick={() => setDishesCollapsed(!dishesCollapsed)}
      />
    );
  };

  const renderColonyCollapseBtn = (): ReactNode => {
    return colonyCollapsed ? (
      <DoubleRightOutlined
        className={styles.collapseBtn}
        onClick={() => setColonyCollapsed(!colonyCollapsed)}
      />
    ) : (
      <DoubleLeftOutlined
        className={styles.collapseBtn}
        onClick={() => setColonyCollapsed(!colonyCollapsed)}
      />
    );
  };

  const renderAbgCollapseBtn = (): ReactNode => {
    return abgCollapsed ? (
      <DownSquareOutlined className={styles.collapseBtn} onClick={() => setAbgCollapsed(!abgCollapsed)} />
    ) : (
      <UpSquareOutlined className={styles.collapseBtn} onClick={() => setAbgCollapsed(!abgCollapsed)} />
    );
  };

  const renderMaldiCollapseBtn = (): ReactNode => {
    return maldiCollapsed ? (
      <DownSquareOutlined className={styles.collapseBtn} onClick={() => setMaldiCollapsed(!maldiCollapsed)} />
    ) : (
      <UpSquareOutlined className={styles.collapseBtn} onClick={() => setMaldiCollapsed(!maldiCollapsed)} />
    );
  };

  const renderChemicalPanelCollapseBtn = (): ReactNode => {
    return chemicalPanelCollapsed ? (
      <DownSquareOutlined
        className={styles.collapseBtn}
        onClick={() => setChemicalPanelCollapsed(!chemicalPanelCollapsed)}
      />
    ) : (
      <UpSquareOutlined
        className={styles.collapseBtn}
        onClick={() => setChemicalPanelCollapsed(!chemicalPanelCollapsed)}
      />
    );
  };

  const renderEsCollapseBtn = (): ReactNode => {
    return esCollapsed ? (
      <DownSquareOutlined className={styles.collapseBtn} onClick={() => setEsCollapsed(!esCollapsed)} />
    ) : (
      <UpSquareOutlined className={styles.collapseBtn} onClick={() => setEsCollapsed(!esCollapsed)} />
    );
  };

  const renderExpertRules = (): ReactNode => {
    return (
      <Table
        dataSource={expertRules}
        rowKey={"id"}
        size="small"
        pagination={false}
      >
        <Column title="Выводить в бланк" key="print" render={() => <Checkbox checked/>}/>
        <Column title="Заключение по EUCAST24" key="rule" dataIndex="rule" />
      </Table>
    );
  };

  const renderAntibiogramTable = (): ReactNode => {
    const perChunk = 10;

    const splitResults = antibiogram.reduce<IAntibiogramResult[][]>((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, []);

    const getSirClasses = (value: ESusceptibility): string => {
      const classes = [styles.sir];
      switch (value) {
        case ESusceptibility.S:
          classes.push(styles.sir__green);
          break;
        case ESusceptibility.I:
          classes.push(styles.sir__orange);
          break;
        case ESusceptibility.R:
          classes.push(styles.sir__red);
          break;
        case ESusceptibility.ATU:
          classes.push(styles.sir__purple);
          break;
        default:
          break;
      }
      return classes.join(" ");
    };

    return splitResults.map((res) => (
      <Table dataSource={res} rowKey={"id"} size="small" pagination={false}>
        <Column title="Антибиотик" key="antibioticName" dataIndex="antibioticName" />
        <Column
          title="МПК"
          render={() => {
            return <InputNumber></InputNumber>;
          }}
        />
        <Column
          title="Диаметр"
          key="value"
          dataIndex="value"
          render={(val) => {
            return <InputNumber value={val}></InputNumber>;
          }}
        />
        <Column
          title="SIR"
          key="sir"
          dataIndex="sir"
          onCell={(record) => {
            const value = record.sir as ESusceptibility;
            return {
              className: getSirClasses(value),
            };
          }}
        />
        <Column title="ЭС" key="expertSystem" dataIndex="expertSystem" />
      </Table>
    ));
  };

  const renderColonies = (): ReactNode => {
    const deleteColony = (id: string): void => {
      const filteredColonies = colonies.filter((cl) => cl.id !== id);
      setColonies(filteredColonies);
    };

    const addItems: MenuProps["items"] = [
      {
        label: "Биохимический ряд",
        key: "1",
        onClick: () => setChemicalPanelCollapsed(!chemicalPanelCollapsed),
      },
      {
        label: "Исследование на масс-спектрометре",
        key: "2",
        onClick: () => setMaldiCollapsed(!maldiCollapsed),
      },
      {
        label: "Чувствительность к антибиотикам",
        key: "3",
        onClick: () => setAbgCollapsed(!abgCollapsed),
      },
      {
        label: "Экспертная оценка",
        key: "4",
        onClick: () => setEsCollapsed(!esCollapsed),
      },
    ];

    return (
      <>
        {colonies.map((cl) => (
          <Flex key={cl.id} className={styles.colony}>
            <Flex vertical>
              <img src={bacteriaIcon} alt="" />
              <h5>{cl.number}</h5>
            </Flex>
            {!colonyCollapsed && (
              <Flex className={styles.colonyInfo}>
                <Flex className={styles.bacteriaInfo}>
                  <span>Организм:</span>
                  {cl.microorganism ? (
                    <h4 className={styles.bacteriaName}>{cl.microorganism}</h4>
                  ) : (
                    <span>не идентифицирован</span>
                  )}
                </Flex>
                <Flex className={styles.bacteriaInfo}>
                  <span>КОЕ:</span>
                  <span>{cl.cfu}</span>
                </Flex>
              </Flex>
            )}
            <Dropdown
              menu={{ items: addItems, onClick: () => {} }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Flex
                className={[styles.addElement, styles.addElementSmall].join(" ")}
                onClick={(e) => e.stopPropagation()}
              >
                <Tooltip title="Добавить новый элемент колонии" placement="right">
                  <PlusSquareOutlined />
                </Tooltip>
              </Flex>
            </Dropdown>
            <Flex className={styles.closeBtn}>
              <Popconfirm
                title="Удалить колонию?"
                description="Вы уверены, что хотите удалить эту колонию?"
                okText="Да"
                cancelText="Нет"
                onConfirm={() => deleteColony(cl.id)}
              >
                <CloseOutlined />
              </Popconfirm>
            </Flex>
          </Flex>
        ))}
      </>
    );
  };

  const renderMaldiTable = (): ReactNode => {
    const perChunk = 5;

    const splitResults = maldiResults.reduce<IMaldiTOFResult[][]>((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, []);

    return splitResults.map((res) => (
      <Table dataSource={res} rowKey={"id"} size="small" pagination={false}>
        <Column title="Категория" key="category" dataIndex="category" />
        <Column title="Микроорганизм" key="microorganism" dataIndex="microorganism" />
        <Column
          title="Вероятность"
          key="probability"
          dataIndex="probability"
          onCell={(record: IMaldiTOFResult) => {
            const value = record.probability;
            return {
              className: value > 9.5 ? styles.sir__green : value > 9.3 ? styles.sir__orange : styles.sir__red,
            };
          }}
        />
      </Table>
    ));
  };

  return (
    <Flex className={styles.container}>
      <Flex className={styles.buttonList}>{renderTopButtons()}</Flex>
      <Flex>{renderPatientInfo()}</Flex>
      <Flex className={styles.cultureBox}>
        <Flex className={[styles.sider, dishesCollapsed ? styles.collapsed : styles.expanded].join(" ")}>
          <Flex className={styles.siderHeader}>
            <h4>Посевы</h4>
            {renderDishCollapseBtn()}
          </Flex>
          <Flex className={styles.dishList}>{renderDishes()}</Flex>
        </Flex>
        <Flex className={styles.results}>
          <Flex
            className={[
              styles.sider,
              styles.colonySider,
              colonyCollapsed ? styles.colony__collapsed : styles.colony__expanded,
            ].join(" ")}
          >
            <Flex className={styles.siderHeader}>
              <h4>Колонии</h4>
              {renderColonyCollapseBtn()}
            </Flex>
            <Flex className={styles.colonyList}>{renderColonies()}</Flex>
          </Flex>
          <Flex className={styles.resultBox}>
            <Flex vertical gap={10}>
              <Flex className={styles.resultHeader}>
                <h4>Биохимическая панель идентификации</h4>
                {renderChemicalPanelCollapseBtn()}
              </Flex>
              <Flex className={[styles.resultList, chemicalPanelCollapsed ? styles.hidden : ""].join(" ")}>
                <BiochemicalPanel />
              </Flex>
            </Flex>
            <Flex vertical gap={10}>
              <Flex className={styles.resultHeader}>
                <h4>Масс-спектрометрия</h4>
                {renderMaldiCollapseBtn()}
              </Flex>
              <Flex className={[styles.resultList, maldiCollapsed ? styles.hidden : ""].join(" ")}>
                {renderMaldiTable()}
              </Flex>
            </Flex>
            <Flex vertical gap={10}>
              <Flex className={styles.resultHeader}>
                <h4>Чувствительность</h4>
                {renderAbgCollapseBtn()}
              </Flex>
              <Flex className={[styles.resultList, abgCollapsed ? styles.hidden : ""].join(" ")}>
                {renderAntibiogramTable()}
              </Flex>
            </Flex>
            <Flex vertical gap={10}>
              <Flex className={styles.resultHeader}>
                <h4>Экспертные правила</h4>
                {renderEsCollapseBtn()}
              </Flex>
              <Flex className={[styles.resultList, esCollapsed ? styles.hidden : ""].join(" ")}>
                {renderExpertRules()}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
