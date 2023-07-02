import bcrypt from "bcrypt";

import NextAuth, {AuthOptions} from "next-auth";
import  CredentialsProvider  from "next-auth/providers";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@next-auth/prisma-adapter";