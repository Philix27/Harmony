interface IApp {
  user: "";
  orgs: IOrganization[];
}
interface IOrganization {
  docs: IDocs[];
  chat: "app";
  analytics: "app";
}

interface IOrganizationSubgroups {
  docs: IDocs[];
}

interface IDocs {
  name: "canvas" | "note" | "meeting" | "reminder";
}
