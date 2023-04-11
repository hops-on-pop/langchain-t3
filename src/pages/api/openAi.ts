import { OpenAI } from "langchain"
import { NextApiRequest, NextApiResponse } from "next"

interface ApiResponse {
  data: string;
}

interface ApiRequestBody {
  prompt: string;
}

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
})

/* export default async function openAi(req: NextApiRequest, res: NextApiResponse) {

  const message = await model.call(
    "What's a good idea for an application to build with GPT-4?"
  )

  res.status(200).send(message)
} */

export default async function handler (req: NextApiRequest<ApiRequestBody>, res: NextApiResponse<ApiResponse>){
  try {
    const { prompt } = req.body
    
    const input = await model.call(prompt)

    return res.status(200).json({data: input})
  } catch (error) {
    console.error(error)
    return new Response("Error", { status: 500 })
  }
}