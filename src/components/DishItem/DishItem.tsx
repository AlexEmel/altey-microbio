import { EMedium } from "@/enums/microbio.enums";
import { addColony, deleteDish, selectDish } from "@/features/microbio.slice";
import { IDish } from "@/interfaces/domain/culture.interface";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { CloseOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Flex, Popconfirm, Tooltip } from "antd";
import type { ReactNode } from "react";
import bacteriaIconWhite from "../../assets/images/bacteria-white.svg";
import styles from "./DishItem.module.scss";

interface IDishItemProps {
  dish: IDish;
}

export function DishItem({ dish }: IDishItemProps): ReactNode {
  const isDishCollapsed = useAppSelector((store) => store.microbio.ui.isDishCollapsed);
  const selectedDishId = useAppSelector((store) => store.microbio.selected.dishId);
  const dispatch = useAppDispatch();

  const getMediumClass = (medium: EMedium): string => {
    switch (medium) {
      case EMedium.BLOOD_AGAR:
        return [styles.medium, styles.red].join(" ");
      case EMedium.SABURO:
        return [styles.medium, styles.purple].join(" ");
    }
  };

  const getDishClasses = (): string => {
    return [
      styles.dish,
      isDishCollapsed ? styles.collapsed : styles.expanded,
      dish.id === selectedDishId && styles.active,
    ].join(" ");
  };

  return (
    <Flex className={getDishClasses()} onClick={() => dispatch(selectDish(dish.id))}>
      <div className={getMediumClass(dish.medium)}>
        {dish.growth && <img src={bacteriaIconWhite} className={styles.bacteriaIcon} />}
      </div>
      <Flex vertical>
        <Flex gap={5}>
          <h5>{dish.number}</h5>
          {!isDishCollapsed && <h6>{dish.medium}</h6>}
        </Flex>
        <Flex gap={5}>
          {!isDishCollapsed && (
            <span className={dish.growth ? styles.redText : styles.greenText}>
              {dish.growth ? "РОСТ" : "РОСТА НЕТ"}
            </span>
          )}
          <Flex className={[styles.addElement, styles.addElementSmall].join(" ")}>
            <Tooltip title="Добавить новую колонию" placement="right">
              <PlusSquareOutlined onClick={() => dispatch(addColony(dish.id))} />
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
          onConfirm={() => dispatch(deleteDish(dish.id))}
        >
          <CloseOutlined />
        </Popconfirm>
      </Flex>
    </Flex>
  );
}
