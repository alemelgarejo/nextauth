import * as React from "react";
import nextAuth from "next-auth";
import githubProvider from 'next-auth/providers/github'
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"


export default nextAuth({
  /* adapter: MongoDBAdapter(clientPromise), */
  providers: [
    githubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    /* GoogleProvider({
      clientId:'',
      clientSecret:''
    }), */
    
  ]
})