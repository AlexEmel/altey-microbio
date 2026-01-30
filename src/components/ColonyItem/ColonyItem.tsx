import { deleteColony } from "@/features/microbio.slice";
import { IColony } from "@/interfaces/domain/culture.interface";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { PlusSquareOutlined, CloseOutlined } from "@ant-design/icons";
import { MenuProps, Flex, Dropdown, Tooltip, Popconfirm } from "antd";
import { ReactNode } from "react";
import bacteriaIcon from "../../assets/images/bacteria.svg";
import styles from "./ColonyItem.module.scss";

interface IColonyItemProps {
  colony: IColony;
}

export default function ColonyItem({ colony }: IColonyItemProps): ReactNode {
  const isColonyCollapsed = useAppSelector((store) => store.microbio.ui.isColonyCollapsed);
  const dispatch = useAppDispatch();

  const addItems: MenuProps["items"] = [
    {
      label: "Биохимический ряд",
      key: "1",
      // onClick: () => setChemicalPanelCollapsed(!chemicalPanelCollapsed),
    },
    {
      label: "Исследование на масс-спектрометре",
      key: "2",
      // onClick: () => setMaldiCollapsed(!maldiCollapsed),
    },
    {
      label: "Чувствительность к антибиотикам",
      key: "3",
      // onClick: () => setAbgCollapsed(!abgCollapsed),
    },
    {
      label: "Экспертная оценка",
      key: "4",
      // onClick: () => setEsCollapsed(!esCollapsed),
    },
  ];

  return (
    <Flex key={colony.id} className={styles.colony}>
      <Flex vertical>
        <img src={bacteriaIcon} alt="" />
        <h5>{colony.number}</h5>
      </Flex>
      {!isColonyCollapsed && (
        <Flex className={styles.colonyInfo}>
          <Flex className={styles.bacteriaInfo}>
            <span>Организм:</span>
            {colony.identification?.microorganism ? (
              <h4 className={styles.bacteriaName}>{colony.identification.microorganism.name}</h4>
            ) : (
              <span>не идентифицирован</span>
            )}
          </Flex>
          <Flex className={styles.bacteriaInfo}>
            <span>КОЕ:</span>
            <span>{colony.identification?.cfu}</span>
          </Flex>
        </Flex>
      )}
      <Dropdown menu={{ items: addItems, onClick: () => {} }} trigger={["click"]} placement="bottomRight">
        <Flex className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
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
          onConfirm={() => dispatch(deleteColony(colony.id))}
        >
          <CloseOutlined />
        </Popconfirm>
      </Flex>
    </Flex>
  );
}
