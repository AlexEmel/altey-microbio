import { useAppSelector } from "@/store/store";
import {
  PrinterOutlined,
  ProfileOutlined,
  ReloadOutlined,
  SaveOutlined,
  SignatureOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Flex } from "antd";
import { type ReactNode } from "react";
import styles from "./AppHeader.module.scss";

export default function AppHeader(): ReactNode {
  const { patient, services } = useAppSelector(store => store.microbio.data.order)

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

  const renderOrderInfo = (): ReactNode => {
    return (
      <>
        <h4>{`${patient.lastName} ${patient.firstName} ${patient.middleName}, ${new Date(patient.bornDate).toLocaleDateString()}`}</h4>
        <span>{`Биоматериал: ${services[0].biomaterial}`}</span>
        <span>{`Исследование: ${services[0].name}`}</span>
      </>
    );
  };

  return (
    <Flex className={styles.header}>
      <Flex className={styles.headerButtons}>{renderTopButtons()}</Flex>
      <Flex className={styles.headerOrderInfo}>{renderOrderInfo()}</Flex>
    </Flex>
  );
}
