export interface IApp {
  user: "";
  orgs: IOrganization[];
}
export interface IOrganization {
  docs: IDocs[];
  chat: "app";
  analytics: "app";
}

export interface IOrganizationSubgroups {
  docs: IDocs[];
}

export interface IDocs {
  name: "canvas" | "note" | "meeting" | "reminder";
}
