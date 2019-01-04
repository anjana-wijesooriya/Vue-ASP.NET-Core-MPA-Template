export class MenuItem {
    title: string;
    icon: string;
    children: MenuItem[];

    constructor(title: string, icon: string, children: MenuItem[]) {
        this.title = title;
        this.icon = icon;
        this.children = children;
    }
}