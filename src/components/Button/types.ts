export interface IButton {
    name: string | undefined;
    onClick?: () => void;
    variant?: string
}

export interface IButtonStyle {
    variant: string;
}