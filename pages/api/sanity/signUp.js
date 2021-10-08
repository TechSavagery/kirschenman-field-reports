// pages/api/sanity/signUp.ts
import { signUpHandler } from 'next-auth-sanity';
import { client } from '../../../lib/sanity-auth';

export default signUpHandler(client);