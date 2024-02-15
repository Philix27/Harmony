import Link from "next/link";
import { useAppDispatch, useAppSelector } from "hooks";
import { TabItems } from "./array";
import { NavWrapper } from "./styles";

export function NavBar() {
  const app_store = useAppSelector((state) => state.tabs);
  const { dispatch, actions } = useAppDispatch();

  return (
    <NavWrapper>
      <label className={"brand"}>
        <Link href="/" className={"brand"}>
          KOLAB
        </Link>
      </label>
      <div className={"tabs_container"}>
        <div className={"tab_box"}>
          {TabItems.map((v, i) => (
            <TabItem
              key={i}
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
    </NavWrapper>
  );
}
function TabItem(props: {
  onClick: () => void;
  title: string;
  isActive: boolean;
}) {
  return (
    <div
      className={`${"tab_name"} ${props.isActive ? "active" : ""}`}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  );
}
