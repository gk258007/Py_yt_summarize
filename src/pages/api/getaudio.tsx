import { NextApiRequest, NextApiResponse } from "next";
import { useState } from "react";


import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://jogacecupzimnnnqrcuq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZ2FjZWN1cHppbW5ubnFyY3VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwNjg5ODYsImV4cCI6MTk5OTY0NDk4Nn0.7y2EWp1pnE4LxurlN77NN2yX3UMPQYe6DDBXS9bNIP4')

const fs = require('fs');


const uploadaud =async (audioFile: any) =>{
const { data, error } = await supabase
  .storage
  .from('avatars')
  .upload('public/', audioFile, {
    cacheControl: '3600',
    upsert: false
  })
  if(error){
    console.log(error)
  }else{
    console.log(data)
  }
}

export default function audio(req:NextApiRequest,res:NextApiResponse){
    const path ="/Users/gnanesh.k/coding/nextjs/nextjs-blog/public/files"
    const yt = require("yt-converter");
    //req.body.videoUrl
    //https://jogacecupzimnnnqrcuq.supabase.co/storage/v1/object/public/AUDIO/A%20one%20minute%20TEDx%20Talk%20for%20the%20digital%20age%20%20Woody%20Roseland%20%20TEDxMileHigh.mp3?t=2023-05-14T15%3A19%3A03.939Z

    console.log("Entered server side")
        yt.convertAudio({
            url:req.body.videoUrl,
            itag: 140,
            directoryDownload: '/https://jogacecupzimnnnqrcuq.supabase.co/storage/v1/object/public/AUDIO/',
            title: "Your titel here"
        }).then(( info:any) =>{
            uploadaud("/Users/gnanesh.k/coding/nextjs/nextjs-blog/public/files/OPPENHEIMER.mp3")
            console.log(info);
            // uploadaud()
            res.status(200).json(
                {
                    text:(info),   
                }
            )
        })
 
    
}

// const s3 = new S3Client({
//   region: 'your-region',
//   credentials: {
//     accessKeyId: 'AKIA533RKBZ2RQKPZFVV',
//     secretAccessKey: 'p6I+Xsbbea/cHHX9rKiHtnwCUUtZ6UKi008po8QE',
//   },
// });