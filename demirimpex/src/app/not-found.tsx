import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (

    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/" className="text-blue-500 underline">
        Go back home
      </Link>
    </div>
  );
}
