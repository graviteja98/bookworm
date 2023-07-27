import { createTheme } from "@mui/material";
const myTheme = createTheme({
    palette : {
        primary : {
            lightest : '#f4f4f1',
            main : '#e5e5e1',
            darkest : '#5e665d',
        },
        secondary : {
            lightest : '#ccf3ec ',
            main : '#0ad7b1',
            darkest : '#0da085'
        }
    },
    zIndex: {
        appBar: 1251,
        drawer: 1250,
      }
})

export default myTheme