import { Flex } from "antd";
import type { ReactNode } from "react";
import AppHeader from "../AppHeader/AppHeader";
import styles from './AppLayout.module.scss';

export default function AppLayout(): ReactNode {
  return (
    <Flex className={styles.container}>
      <AppHeader />
      <Flex className={styles.content}></Flex>
    </Flex>
  );
};
