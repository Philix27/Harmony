import Link from "next/link";
import styles from "./navbar.module.scss";
import { useAppDispatch, useAppSelector } from "hooks";
import { tabList } from "./list";

export default function NavBar() {
  const app_store = useAppSelector((state) => state.tabs);
  const { dispatch, actions } = useAppDispatch();

  return (
    <div className={styles.navbar}>
      <label className={styles.brand}>
        <Link href="/" className={styles.brand}>
          KOLAB
        </Link>
      </label>
      <div className={styles.tabs_container}>
        <div className={styles.tab_box}>
          {tabList.map((v) => (
            <TabItem
              key={v.title}
              isActive={app_store.name === v.type}
              onClick={() => {
                dispatch(
                  actions.tab.change_tab({
                    name: v.type,
                    org_name: "ORG_1",
                  })
                );
              }}
              title={v.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
function TabItem(props: {
  onClick: () => void;
  title: string;
  isActive: boolean;
}) {
  return (
    <div
      className={`${styles.tab_name} ${props.isActive ? styles.active : ""}`}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  );
}
