// page.tsx

import Link from 'next/link';
import React from 'react';
import Layout from './layout'; // Assuming you are using this Layout components for page layout

const Page = () => {
  return (
      <Layout>
        <div>
          <h1>Welcome to the Page what's </h1>
          <p>This is a sample page that links to the search page.</p>
          <Link href="/search">

            <a>Go to Search Page</a>
          </Link>
        </div>
      </Layout>
  );
};



export default Page;
