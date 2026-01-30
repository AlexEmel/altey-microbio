import { Flex } from "antd";
import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import styles from "./ColonySider.module.scss";
import { setIsColonyCollapsed } from "@/features/microbio.slice";
import ColonyItem from "../ColonyItem/ColonyItem";

export default function ColonySider(): ReactNode {
  const isColonyCollapsed = useAppSelector((store) => store.microbio.ui.isColonyCollapsed);
  const selectedDishId = useAppSelector((store) => store.microbio.selected.dishId);
  const dishColonies = useAppSelector(
    (store) => store.microbio.data.culture.dishes.find((d) => d.id === selectedDishId)?.colonies,
  );
  const dispatch = useAppDispatch();

  const renderColonyCollapseBtn = (): ReactNode => {
    return isColonyCollapsed ? (
      <DoubleRightOutlined
        className={styles.collapseBtn}
        onClick={() => dispatch(setIsColonyCollapsed(!isColonyCollapsed))}
      />
    ) : (
      <DoubleLeftOutlined
        className={styles.collapseBtn}
        onClick={() => dispatch(setIsColonyCollapsed(!isColonyCollapsed))}
      />
    );
  };

  return (
    <Flex className={[styles.sider, isColonyCollapsed ? styles.collapsed : styles.expanded].join(" ")}>
      <Flex className={styles.siderHeader}>
        <h4>Колонии</h4>
        {renderColonyCollapseBtn()}
      </Flex>
      <Flex className={styles.colonyList}>
        {dishColonies && dishColonies.length > 0 ? (
          dishColonies.map((c) => <ColonyItem key={c.id} colony={c} />)
        ) : (
          <span>Выберите посев для отображения списка колоний или добавьте новую колонию</span>
        )}
      </Flex>
    </Flex>
  );
}
