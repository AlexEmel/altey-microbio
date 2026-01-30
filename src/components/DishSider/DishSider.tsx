import { useAppDispatch, useAppSelector } from "@/store/store";
import { Flex, Tooltip } from "antd";
import type { ReactNode } from "react";
import styles from "./DishSider.module.scss";
import { DoubleRightOutlined, DoubleLeftOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { addDish, setIsDishCollapsed } from "@/features/microbio.slice";
import { DishItem } from "../DishItem/DishItem";

export default function DishSider(): ReactNode {
  const isDishCollapsed = useAppSelector((store) => store.microbio.ui.isDishCollapsed);
  const dishes = useAppSelector((store) => store.microbio.data.culture.dishes);
  const dispatch = useAppDispatch();

  const renderDishCollapseBtn = (): ReactNode => {
    return isDishCollapsed ? (
      <DoubleRightOutlined
        className={styles.collapseBtn}
        onClick={() => dispatch(setIsDishCollapsed(false))}
      />
    ) : (
      <DoubleLeftOutlined className={styles.collapseBtn} onClick={() => dispatch(setIsDishCollapsed(true))} />
    );
  };

  return (
    <Flex
      className={[styles.sider, isDishCollapsed ? styles.siderCollapsed : styles.siderExpanded].join(" ")}
    >
      <Flex className={styles.siderHeader}>
        <h4>Посевы</h4>
        {renderDishCollapseBtn()}
      </Flex>
      <Flex className={styles.dishList}>
        {dishes.map((d) => (
          <DishItem key={d.id} dish={d} />
        ))}
        <Flex className={styles.addDish}>
          <Tooltip title="Добавить новый посев" placement="right">
            <PlusSquareOutlined onClick={() => dispatch(addDish())} />
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
}
