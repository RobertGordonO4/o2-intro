import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    labelM: React.CSSProperties
    labelS: React.CSSProperties
    bodyM: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    labelM?: React.CSSProperties
    labelS?: React.CSSProperties
    bodyM?: React.CSSProperties
  }
  
  interface Palette {
    coreGray: {
      500: string;
      950: string;
      400: string;
      300: string;
      0: string;
    };
    o2Blue: {
      500: string;
    };
    coreRed: {
      600: string;
      100: string;
    };
    coreYellow: {
      700: string;
      100: string;
    };
    coreAlphaDim: {
      50: string;
      800: string;
    };
  }

  interface PaletteOptions {
    coreGray?: {
      500: string;
      950: string;
      400: string;
      300: string;
      0: string;
    };
    o2Blue?: {
      500: string;
    };
    coreRed?: {
      600: string;
      100: string;
    };
    coreYellow?: {
      700: string;
      100: string;
    };
    coreAlphaDim?: {
      50: string;
      800: string;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    labelM: true
    labelS: true
    bodyM: true
  }
}

export const theme = createTheme({
  typography: {
    labelM: {
      fontFamily: "On Air Var",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "22px",
      letterSpacing: "0.16px",
      color: "#2C2C31", // coreGray950
    },
    labelS: {
      fontFamily: "On Air Var",
      fontSize: "14px",
      fontWeight: 550,
      lineHeight: "17px",
      letterSpacing: "0.16px",
      color: "#7D7D8A", // coreGray400
    },
    bodyM: {
      fontFamily: "On Air Var",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22px",
      letterSpacing: "0.01px",
      color: "#8C8C9A", // coreGray500
    },
  },
  spacing: (factor: number | "xs" | "s" | "m" | "l") => {
    const spacingValues: Record<"xs" | "s" | "m" | "l", number> = {
      xs: 8,
      s: 12,
      m: 16,
      l: 20
    }
    if (typeof factor === "number") return `${factor * 8}px`
    return `${spacingValues[factor]}px`
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          display: "flex",
          gap: theme.spacing("xs")
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          gap: theme.spacing("xs"),
          padding: `${theme.spacing("s")} ${theme.spacing("xs")} ${theme.spacing("s")} ${theme.spacing("m")}`,
          borderRadius: "12px",
          height: "48px",
          minHeight: "48px",
          border: `1px solid ${theme.palette.coreGray[500]}`, 
          backgroundColor: theme.palette.coreGray[0],
          transition: "border-color 0.2s ease-in-out",
          
          "&:hover": {
            borderColor: theme.palette.coreAlphaDim[50], 
          },
          "&.Mui-focused": {
            border: `3px solid ${theme.palette.coreAlphaDim[800]}`, 
          },
          "&.Mui-error": {
            border: `3px solid ${theme.palette.coreRed[600]}`,
          },
          "& input": {
            caretColor: theme.palette.o2Blue[500],
          },
          "& .MuiOutlinedInput-notchedOutline": {
            display: "none",
          },
        }),
        multiline: {
          height: "unset",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.Mui-error": {
            color: theme.palette.coreRed[600],
          },
        }),
      },
    },
  },
  palette: {
    coreGray: {
      500: "#8C8C9A",
      950: "#2C2C31",
      400: "#7D7D8A",
      300: "#C9C9CE",
      0: "#FFFFFF",
    },
    o2Blue: {
      500: "#0050FF",
    },
    coreRed: {
      600: "#DC2828",
      100: "#FFDCDC",
    },
    coreYellow: {
      700: "#A56315",
      100: "#FAF1B6",
    },
    coreAlphaDim: {
      50: "rgba(26, 26, 26, 0.06)",
      800: "rgba(26, 26, 26, 0.80)",
    },
  }
})
