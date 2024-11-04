import { createGlobalTheme, style } from "@vanilla-extract/css";

createGlobalTheme(
    "root",
    {
        color: {
            primary: "#ffa726",
            primaryDark: "#f57c00",
            primaryLight: "#ffd740",
            secondary: "#64b5f6",
            secondaryDark: "#1e88e5",
            secondaryLight: "#9be7ff",
            list: "rgb(255, 236, 240)",
            task: "rgb(255, 245, 248)",
            taskHover: "rgb(255, 236, 240)",
            brightText: "#ffffff",
            darkText: "#000000",
            secondaryText: "#666666",
            disabled: "#bdbdbd",
            divider: "#e0e0e0",
            background: "#fafafa",
            surface: "#ffffff",
            error: "#d32f2f",
            onPrimary: "#000000",
            onSecondary: "#000000",
            onSurface: "#000000",
            onError: "#ffffff",
            border: "#e0e0e0",
            secondaryDarkText: "#212121",
            secondaryLightText: "#ffffff",
            secondaryDarkTextHover: "#1565c0",
            secondaryLightTextHover: "#0039cb",
            selectedTab: "#e0e0e0",
            updateButton: "#00796b",
            updateButtonHover: "#004c40",
            deleteButton: "#ef5350",
            deleteButtonHover: "#e53935",
        },
        fontSizing: {
            T1: "32px",
            T2: "24px",
            T3: "18px",
            T4: "14px",
            P1: "16px",
            body1: "1rem",
            body2: "0.875rem",
            button: "0.875rem",
            caption: "0.75rem",
            overline: "0.75rem",
        },
        spacing: {
            S1: "4px",
            S2: "8px",
            S3: "16px",
            S4: "24px",
        },
        font: {
            family: "noto-sans, sans-serif",
        },
        shoadow: {
            basic: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        },
        minWidth: {
            list: "250px",
        },
    }
)

export const appContainer = style(
    {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    }
)

export const button = style(
    {
        backgroundColor: "red",
    }
)
export const board = style(
    {
        display: "flex",
        flexDirection: "row",
        height: "100%",
    }
)