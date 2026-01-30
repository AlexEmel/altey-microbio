import { Flex } from "antd";
import type { ReactNode } from "react";
import AppHeader from "../AppHeader/AppHeader";
import styles from './AppLayout.module.scss';
import DishSider from "../DishSider/DishSider";
import ColonySider from "../ColonySider/ColonySider";

export default function AppLayout(): ReactNode {
  return (
    <Flex className={styles.container}>
      <AppHeader />
      <Flex className={styles.content}>
        <DishSider />
        <ColonySider />
      </Flex>
    </Flex>
  );
};
