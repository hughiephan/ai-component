"use client";

import * as React from "react"
import { Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Menu } from "/components/basic/Menu"
import { Input } from "@/components/ui/input"
import "./page.css"
export default function ChatBot() {
  const [messages, setMessages] = React.useState([
    {
      role: "agent",
      content: "Hi, what papers are you working on?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with Transformer paper",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "The architecture of the paper is unclear",
    },
  ])
  const [input, setInput] = React.useState("")
  const inputLength = input.trim().length

  return (
    <>
      <main className="flex flex-col items-center justify-center p-24">
        <Menu> </Menu>
      </main>
      <Card style={{margin: "auto", marginTop:"50px", width: "500px"}}>
        <CardContent>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                style={{marginTop: "30px"}}
                key={index}
                className={cn(
                  "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.content}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              if (inputLength === 0) return
              setMessages([
                ...messages,
                {
                  role: "user",
                  content: input,
                },
              ])
              setInput("")
            }}
            className="flex w-full items-center space-x-2"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1"
              autoComplete="off"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button style={{marginLeft: "10px"}} type="submit" size="icon" disabled={inputLength === 0}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  )
}