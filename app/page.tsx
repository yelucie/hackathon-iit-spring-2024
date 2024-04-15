import Link from 'next/link';
import React from 'react';
import Layout from './layout';
const Page = () => {
  return (
    <div>
      <Layout>
        <div>
          <h1>Welcome to the Page</h1>
          <p>This is a sample page that links to the search page.</p>
          <Link href="/search">

            <a>Go to Search Page</a>
          </Link>
        </div>
      </Layout>
      </div>
  );
};



export default Page;
