import { createGlobalTheme, style } from "@vanilla-extract/css";

export const vars = createGlobalTheme(
    ":root",
    {
        color: {
            primary: "#FFB5A7",           // Warm pastel coral
            primaryDark: "#E8A19B",       // Darker pastel coral
            primaryLight: "#FFD1C9",      // Light pastel coral
            secondary: "#F7D1BA",         // Warm pastel peach
            secondaryDark: "#E5BFA8",     // Darker pastel peach  
            secondaryLight: "#FDE2D4",    // Light pastel peach
            list: "#FFF1E6",             // Soft cream
            task: "#FFF5EB",             // Lighter cream
            taskHover: "#FFE8D6",        // Warm cream hover
            brightText: "#ffffff",        // Keep white for contrast
            darkText: "#4A3B38",         // Warm dark brown
            secondaryText: "#8B7355",     // Warm medium brown
            disabled: "#D5C4B9",          // Muted warm gray
            divider: "#EDE0D4",          // Light warm divider
            background: "#FFF9F5",        // Very light warm background
            surface: "#ffffff",           // Keep white
            error: "#E88D83",            // Pastel error red
            onPrimary: "#4A3B38",        // Dark brown on primary
            onSecondary: "#4A3B38",      // Dark brown on secondary
            onSurface: "#4A3B38",        // Dark brown on surface
            onError: "#ffffff",          // White on error
            border: "#EDE0D4",           // Light warm border
            secondaryDarkText: "#4A3B38", // Dark warm text
            secondaryLightText: "#ffffff", // White text
            secondaryDarkTextHover: "#6B5750", // Darker hover
            secondaryLightTextHover: "#FFF9F5", // Light hover
            selectedTab: "#EDE0D4",       // Selected tab background
            updateButton: "#A7C4BC",      // Pastel sage green
            updateButtonHover: "#96B3AB",  // Darker sage green
            deleteButton: "#E6A6A1",      // Pastel red
            deleteButtonHover: "#D49590",  // Darker pastel red
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
       
    }
)
export const board = style(
    {
        display: "flex",
        flexDirection: "row",
        height: "100%",
    }
)