import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req:NextApiRequest, res:NextApiResponse) {
    const youtubedl = require('youtube-dl-exec')
    //https://www.youtube.com/watch?v=6xKWiCMKKJg
    youtubedl('https://www.youtube.com/watch?v=6xKWiCMKKJg', {
        dumpSingleJson: true,
        noCheckCertificates: true,
        noWarnings: true,
        addHeader: [
          'referer:youtube.com',
          'user-agent:googlebot'
        ]
      
      }).then((output: any) => res.status(200).json(
        { 
          text: 
          output["requested_formats"][1]["url"]  
        }

        )
        )
      
}

