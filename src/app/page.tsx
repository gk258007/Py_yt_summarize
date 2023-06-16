"use client";

import Image from 'next/image'
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
const { Configuration, OpenAIApi } = require("openai");
import { ChatGPTAPI } from 'chatgpt';


export default function Home() {

  const data = new FormData();
  // const [videoUrl, setvidepUrl] = useState('');
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const vidoe = "https://www.youtube.com/watch?v=r8O9ZVSjB3M"



  // const ytmp = async () => {
  //   const { ytmp } = require("youtube-exec");
  //   try {
  //     await ytmp({
  //       url: "https://www.youtube.com/watch?v=r8O9ZVSjB3M",
  //       folder: "", // optional, default: "youtube-exec"
  //       filename: "", // optional, default: video title
  //       quality: "best", // or "lowest"; default: "best"
  //     });
  //     console.log("Audio Downloaded successfully 🔊🎉");
  //   } catch (err) {
  //     console.log("An error occured", err)
  //   }
  // }
  const chatgpt = async () => {

    const messages = [];
    messages.push({ role: "user", content: `Summarize this video into bullet points ${videoUrl}` })
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });
    const completion_text = completion.data.choices[0].message.content;
    console.log(completion_text);
  }
  const handleChange = (event: any) => {
    console.log(videoUrl)
  }









  const [formData, setFormData] = useState<FormData | null>(null);
  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      console.log(typeof (e.target.files[0]))
      const data = new FormData();
      data.append('file', file);
      data.append('model', 'whisper-1');
      data.append('language', 'en');
      setFormData(data);
      console.log("Formdata set")
      // check if the size is less than 25MB
      if (file.size > 25 * 1024 * 1024) {
        alert("Please upload an audio file less than 25MB");
        return;
      }
    }
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a onClick={() => getYoutubeAudio("https://www.youtube.com/watch?v=kvN5_GXlg2Y")}>OMG click me </a>
    </main >
  )
}
