import NextAuth, { NextAuthOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiRequest, NextApiResponse } from 'next';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { client } from '../../../lib/sanity';

const options = {
  providers: [
    SanityCredentials(client) // only if you use sign in with credentials
  ],
  session: {
    jwt: true
  },
  adapter: SanityAdapter(client)
};

export default (req, res) =>
  NextAuth(req, res, options);