import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import os from 'os'
import path from 'path'
const fs = require('fs')
import getVideoTitle from "yt-get"



export default async function audio(req: NextApiRequest, res: NextApiResponse) {
  const yt = require("yt-converter");
  // Download audio file from YouTube
  const audioInfo = await yt.convertAudio({
    url: req.body.videoUrl,
    itag: 140,
    directoryDownload: '/temp/',
    title: 'Your_title_here',
  });
  console.log("End of the Audio function", audioInfo)
  console.log("End of the Audio function", audioInfo)


  // const yt = async () => {



  // const audioInfo = await yt.convertAudio({
  //   url: req.body.videoUrl,
  //   itag: 140,
  //   directoryDownload: '/mnt/data',
  //   title: 'Your title here',
  // });
  // const audioFilePath = path.join(audioInfo.directory, audioInfo.filename);
  // console.log('audioFilePath:', audioFilePath);
  // const audioBuffer = await fs.promises.readFile(audioFilePath);
  // console.log('audioBuffer:', audioBuffer);
  // // Upload audio file to S3
  // const s3 = new S3Client({
  //   region: 'US East (N. Virginia) us-east-1',
  //   credentials: {
  //     accessKeyId: 'AKIA533RKBZ2RQKPZFVV',
  //     secretAccessKey: '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',
  //   },
  // });
  // const key = `audio/${uuidv4()}.mp3`;
  // const params = {
  //   Bucket: 'oaisum',
  //   Key: key,
  //   Body: audioBuffer,
  // };
  // const command = new PutObjectCommand(params);
  // await s3.send(command);

  //   res.status(200).json({ success: true, message: 'Audio uploaded to S3' });
  // // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ success: false, message: 'Error uploading audio to S3' });
  // }
  //
}
