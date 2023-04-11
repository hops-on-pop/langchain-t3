import { cva, type VariantProps } from "class-variance-authority"

const chatStyles = cva(
  "w-5/6 rounded-lg p-3 relative before:content-[''] before:absolute before:left-0 before:top-0 before:border-4 before:border-solid before:border-transparent before:border-t-current before:ml-3 before:mt-3",
  {
  variants: {
    agent: {
      user: "bg-lime-500 text-green-900 float-right",
      bot: "bg-orange-500 text-white float-left",
    },
  },
})

type ChatVariantProps = VariantProps<typeof chatStyles>

export type ChatProps = ChatVariantProps & {
  text: string;
}

export default function Chat({text, agent}: ChatProps) {
  return (
    <div className={chatStyles({agent})}>
      {text}
    </div>
  )
}