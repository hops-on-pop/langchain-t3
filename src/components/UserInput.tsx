import { useState, type ChangeEvent, type FormEvent } from "react";
import Chat from "./ui/Chat"

interface ApiResponse {
  data: string;
}

function UserInput() {
  const [inputText, setInputText] = useState<string>("")
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await fetch("/api/openAi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: inputText })
      })
      const data: ApiResponse = await response.json()
      setApiResponse(data)
    } catch (error) {
      setApiResponse("An error occurred:" + error)
    }
  }


  const cleanedResponse: string | undefined = apiResponse?.data

  return (
    <>
      <div className="border-blue-800 bg-slate-200 m-3 p-4">
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="inputText">Enter a prompt:</label>
        </p>
        <p>
          <input
            type="text"
            id="inputText"
            value={inputText}
            onChange={handleChange}
            className="w-11/12 border-slate-800 h-8"
          />
          <button type="submit" className="ml-2 px-3 py-2 bg-blue-400 text-slate-800 rounded-xl">
            Submit
          </button>
        </p>
      </form>
      </div>
      <div>
          {apiResponse && (<div className="my-2">
          <p>Here's the response:</p>
          <Chat agent="bot" text={cleanedResponse ?? ""} />
          </div>
        )}
      </div>
    </>
  )
}

export default UserInput