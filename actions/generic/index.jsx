import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Component from './Component'

export const main = async () => {
  const stream = await ReactDOMServer.renderToNodeStream(
    <html>
      <Component/>
    </html>
  )
  
  // Streaming is not supported so we append chunks to form a string
  let body = ''
  await new Promise((res) => {
    stream.on('data', (chunk) => (body += chunk));
    stream.on('end', () => res(body));
  })
  
  return {
    status: 200,
    headers: {
      'content-type': 'text/html;charset=UTF-8'
    },
    body
  }
}
