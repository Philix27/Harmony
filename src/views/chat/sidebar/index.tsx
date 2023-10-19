import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "hooks";
import TopBar from "./topBar";
import Channels from "./channels";

export default function SideBar() {
  const selector = useAppSelector((s) => s.chat);
  const { dispatch, actions } = useAppDispatch();
  return (
    <div className={styles.container}>
      <TopBar />
      <Channels />
    </div>
  );
}
