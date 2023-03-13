import Link from 'next/link'

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'sentry-next/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Filler&nbsp;
          <code className={styles.code}>import/sentry.config</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/sentry.svg"
          alt="Sentry Logo"
          width={360}
          height={74}
          priority
        />
      </div>
      <br></br>
      <p>
        See how Sentry records unhandled exceptions in your code.
      </p>
      <br></br>
      <p>
        <strong>Important:</strong> exceptions in development mode take a
        different path than in production. These tests should be run on a
        production build (i.e. 'next build').{' '}
        <a href="https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-error-page">
          Read more
        </a>
      </p>

      <div className={styles.grid}>
        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            API routes <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Note that 1 and 2 are not expected to work if deployed to Vercel yet.
          </p>

          <li>
            top-of-module promise that rejects, but its result is not
            awaited.{'  '}
            <a href="/api/test1" target="_blank">
            API Test 1
            </a>
          </li>
          <br></br>
          <li>
            API has a top-of-module exception.{' '}
            <a href="/api/test2" target="_blank">
            API Test 2
            </a>
          </li>
          <br></br>
          <li>
            API with an exception in its request handler.{' '}
            <a href="/api/test3" target="_blank">
            API Test 3
            </a>
          </li>
          <br></br>
          <li>
            API uses a try/catch to handle an exception and records it.{' '}
            <a href="/api/test4" target="_blank">
            API Test 4
            </a>
          </li>
        </a>
        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            SSR <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Note that there are currently two known bugs with respect to SSR
            transactions: they don't get recorded on Vercel, and ones that are
            recorded and have an error are grouped in the Sentry UI by the error page
            name rather than the requested page name.</p>

          <li>
           <code className={styles.code}>getServerSideProps </code>
           &nbsp;throws an Error. This should cause _error.js to
            render and record Error('SSR Test 1') in Sentry.{' '}
            <a href="/ssr/test1" target="_blank">
            or open a new one
            </a>{' '}
            or <Link href="/ssr/test1">Navigate in this tab</Link>
          </li>
          <li>
            getServerSideProps returns a Promise that rejects. This should cause
            _error.js to render and record Error('SSR Test 2') in Sentry.{' '}
            <a href="/ssr/test2" target="_blank">
            or open a new one
            </a>
          </li>
          <li>
            getServerSideProps calls a Promise that rejects, but does not handle
            the rejection or await its result (returning synchronously). Sentry
            should record Error('SSR Test 3'), but <strong>will not</strong> when
            deployed to Vercel because the serverless function will already have
            exited.{' '}
            <a href="/ssr/test3" target="_blank">
            or open a new one
            </a>
          </li>
          <li>
            getServerSideProps manually captures an exception from a try/catch.
            This should record Error('SSR Test 4') in Sentry.{' '}
            <a href="/ssr/test4" target="_blank">
            or open a new one
            </a>
          </li>

        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Client exceptions <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            filler
          </p>

          <li>
            There is a top-of-module Promise that rejects, but its result is not
            awaited. Sentry should record Error('Client Test 1').{' '}
            <Link href="/client/test1">Navigate in this tab</Link> or{' '}
            <a href="/client/test1" target="_blank">
            or open a new one
            </a>
          </li>
          <li>
            There is a top-of-module exception. _error.js should render and record
            ReferenceError('process is not defined') in Sentry.{' '}
            <Link href="/client/test2">Navigate in this tab</Link> or{' '}
            <a href="/client/test2" target="_blank">
            or open a new one
            </a>
          </li>
          <li>
            There is an exception during React lifecycle that is caught by
            Next.js's React Error Boundary. In this case, when the component
            mounts. This should cause _error.js to render and record Error('Client
            Test 3') in Sentry.{' '}
            <Link href="/client/test3">Navigate in this tab</Link> or{' '}
            <a href="/client/test3" target="_blank">
            or open a new one
            </a>
          </li>
          <li>
            There is an unhandled Promise rejection during React lifecycle. In
            this case, when the component mounts. Sentry should record
            Error('Client Test 4').{' '}
            <Link href="/client/test4"> Navigate in this tab</Link> or{' '}
            <a href="/client/test4" target="_blank">
            or open a new one
            </a>
          </li>
          <li>
            An Error is thrown from an event handler. Sentry should record
            Error('Client Test 5'). (This page also demonstrates how to manually
            instrument your code for performance monitoring.){' '}
            <Link href="/client/test5">Navigate in this tab</Link> or{' '}
            <a href="/client/test5" target="_blank">
            or open a new one
            </a>
          </li>

        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            NextJS 13 Features <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            NextjS 13 continues to bring many new features to developers, especially those
            depoying on Vercel. We are trying to keep up, we promise!
          </p>
          <li>
            Add Edge Function example){' '}
            <Link href="/client/test5">Navigate in this tab</Link> or{' '}
            <a href="/client/test5" target="_blank">
              or open a new one
            </a>
          </li>
        </a>
        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Performance <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Why should I care about Performance?
          </p>
          <li>
          Front-end transactions are recorded for each pageload or navigation.
        </li>
        <li>
          Backend transactions are recorded for each API or page route.
        </li>
        <li>
          Sentry creates links between errors and transactions, and can be seen in the [trace
          navigator](https://docs.sentry.io/product/sentry-basics/tracing/trace-view/).
        </li>
        <li>
          Manual performance instrumentation is demonstrated in the final
          example below (throwing an error from an event handler).
        </li>
          <li>
            Add Edge Function example){' '}
            <Link href="/client/test5">Navigate in this tab</Link> or{' '}
            <a href="/client/test5" target="_blank">
              or open a new one
            </a>
          </li>
        </a>
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
      </div>
    </main>
  )
}
