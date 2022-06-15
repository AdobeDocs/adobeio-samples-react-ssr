import React, {lazy, Suspense} from 'react'

export default function Component() {
  const Text = lazy(() => import('./Text'))
  
  return <Suspense><Text/></Suspense>
}
