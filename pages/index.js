import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Restaurant Survey Completer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Automatic Restaurant Survey Completer" />
        <p className="description">
          Welcome. Please fill out the information below.
        </p>
        <form name="survey" method="POST" data-netlify="true">
          <p>
            <label>Restaurant: <select name="restaurant[]" multiple>
              <option value="panda">Panda</option>
              <option value="mcd">McDonald's</option>
            </select>
            </label>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  )
}
