import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { Fonts } from "../components/Fonts";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
