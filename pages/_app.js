import { GeistProvider, CssBaseline } from '@geist-ui/react'

const myTheme = {
  "palette": {
    "success": "#ec5454"
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider theme={myTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
export default MyApp
