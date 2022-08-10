import { LockClosedIcon } from '@heroicons/react/solid';
import { useSession, signIn, signOut } from 'next-auth/client';
import { useState } from 'react';
import { signUp } from 'next-auth-sanity/dist/client';


export default function CreateUser() {
  const [email, setEmail] = useState('');
  const [session, loading] = useSession();
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await signUp({
      email,
      password,
      name,
    });

    await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    console.log(user);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div class="flex justify-center">
          <a href="/">
            <span className="sr-only">Workflow</span>
            <img
              className="h-[100px]"
              src="https://kirschenman.com/wp-content/uploads/2020/07/logo_shadowremoved.png"
              alt=""
            />
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-lime focus:border-lime focus:z-10 sm:text-sm"
                placeholder="First + Last Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-lime focus:border-lime focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-lime focus:border-lime focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime hover:bg-lime focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
