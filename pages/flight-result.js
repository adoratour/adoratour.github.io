import React from 'react';
import Head from 'next/head';
import FlightSearchResult from 'container/Flight/result';

export default function flightSearchResultPage() {
  return (
    <>
      <Head>
        <title>Flight Search Result Page | TripFinder.</title>
      </Head>
      <FlightSearchResult />
    </>
  );
}