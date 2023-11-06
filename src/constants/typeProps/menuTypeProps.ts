//** Interface */
export interface MenuItemProps {
    onClick: () => {} | void;
    content: string;
    icon?: React.ReactNode;
    active?: boolean;
}

//** Enum */
export enum MenuLanguageProps {
    EN = "en",
    JP = "jp",
}
