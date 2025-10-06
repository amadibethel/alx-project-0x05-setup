import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

const handleGenerateImage = async () => {
    console.log("Generating Image")
    console.log(process.env.NEXT_PUBLIC_GPT_API_KEY)
  };