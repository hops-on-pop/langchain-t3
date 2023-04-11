import { type NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import UserInput from "~/components/userInput"

const Home: NextPage = () => {
/*   const [gpt4Response, setGpt4Response] = useState("")

  async function getGpt4Response() {
    try {
      const response = await fetch("/api/openAi")
      const text = await response.json()
      return text
    } catch (error) {
      return "An error occurred"
    }
  }

  const handleClick = async () => {
    const response = await getGpt4Response()
    setGpt4Response(response)
  } */
  
  return (
    <>
      <Head>
        <title>LangChain NextJS Demo</title>
        <meta name="description" content="A demonstration of using LangChain in NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-5 mt-2">
        <h1 className="text-xl text-center">Langchain NextJS Demo</h1>
        <UserInput />
      {/*<p>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Submit the Prompt
        </button> 
      </p>
      */}
      {/* {gpt4Response && <div className="m-4 p-4 bg-blue-600 text-white"><p>Here's the response:</p> {gpt4Response}</div>} */}
      </main>
    </>
  )
}

export default Home
