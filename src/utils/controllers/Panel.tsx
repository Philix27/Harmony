export class Panel {

    constructor() { }
    homePage: JSX.Element = (<h2 />);


    get_active_panel(data: any): JSX.Element {
        switch (data) {
            case 1:
                return this.homePage;
            break;

            default:
                break;
        }
    }
}