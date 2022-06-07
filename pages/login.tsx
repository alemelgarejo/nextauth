import * as React from "react";
import { useRouter } from 'next/router';
import { signIn, useSession, getProviders } from "next-auth/react";
import { useEffect } from 'react';

const LoginPage = () => {

  const {data: session, status} = useSession()
  const router = useRouter()
  
 /*  useEffect(() => {
    ( async () => 
        {
          const providers = await getProviders()
          console.log(providers)
        }
    )();
  }, []) */

  if (status !== 'loading' && status === 'authenticated') {
    router.push('/')
  }

  return (
    <div>
      <button onClick={() => signIn('github')}>
        Sign in with git hub
      </button>
    </div>
    )
}

export default LoginPage