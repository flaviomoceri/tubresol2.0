import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { Tooltip, Alert } from "antd";

import classNames from "classnames";

import createPersistedState from "use-persisted-state";

const Home = (props) => {
  const router = useRouter();

  return (
      <div><h1>Start!</h1></div>
  );
};

export async function getServerSideProps(request) {

  return {
    props: {

    },
  };
}

export default Home;
