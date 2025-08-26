

type CSSColor = `#${string}`;

export interface ICalendarType {
    id: string;
    colorName: string;
    label: string;
    lightColors: {
        main: CSSColor;
        onContainer: CSSColor;
        container: CSSColor;
    };
    darkColors: {
        main: CSSColor;
        onContainer: CSSColor;
        container: CSSColor;
    };
}

