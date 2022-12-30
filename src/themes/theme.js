
export const lightTheme = {
  palette: {
    primary: {
      main: "rgba(81, 169, 245, 0.87)",
    },
  },
  components: {
    MuiBox: {
      variants: [
        {
          props: { variant: 'list' },
          sx: {
            m: 1,
            borderRadius: 1,
            border: '1px solid grey'
          }
        }
      ]
    }
  },
  typography: {
    logging: {
      fontFamily: "Consolas",
      fontSize: "0.75rem"
    },
    listTitle: {
      fontSize: "0.85rem",
      backgroundColor: "rgba(245, 201, 105, 0.87)",
    },
    listItem: {
      fontSize: "0.75rem",
      backgroundColorCodeCommand: "#4caf50",
      backgroundColorSuccessReport: "#4caf50",
      backgroundColorFailedReport: "#ff784e",
    }
  }
}

