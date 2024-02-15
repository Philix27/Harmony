import { LinkItem } from "./linkItem";
import { GroupItemList } from "./data";
import { StylesWrapper } from "./styles";

export * from "./linkItem";

export function SidebarAccounts() {
  return (
    <StylesWrapper>
      <div className={"sidebar_start"}>
        <ul className={"sidebar_start_list"}>
          {GroupItemList.map((v, i) =>
            LinkItem({
              id: i,
              title: v.title,
              icon: v.icon,
              comp: v.comp,
            })
          )}
        </ul>
        <div className={"bottom_sidebar_start_list"}></div>
      </div>
    </StylesWrapper>
  );
}
