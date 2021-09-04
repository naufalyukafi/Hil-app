export interface INavbar {
    toggle: () => void,
}

export interface IDropdown {
    toggle: () => void,
    isShowMobileNav: boolean,
}

export interface IAbouts {
    id: number,
    title: string,
    description: string,
    image: string
}

export interface IContext {
    children: React.ReactNode;
}

export interface IContextValue {
    abouts: IAbouts[];
    getAllAbouts: () => void;
}