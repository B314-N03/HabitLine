import type { JSX } from "@emotion/react/jsx-runtime";

export interface ISideNavPage {
    title: string;
    icon: JSX.Element;
    path: string;
}

export interface ISideNavTooling extends ISideNavPage {
    type: 'link' | 'button';
    onClick?: () => void;
}