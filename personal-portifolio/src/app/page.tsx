'use client';
import styles from "@/styles/page.module.css";
import React, { useState, useEffect, Children } from 'react';
import { SideNavbar } from "@/components/_main_component"; // Certifique-se de que o caminho está correto
import { BannerContainer } from "@/components/bannerContainer";

export default function Home() {
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    setInitialRender(false);
  }, []);

  return (
    <div className={styles.page}>
      <BannerContainer />
      <h1>Hello I'm Samuel and thats is my portfolio</h1>
      {!initialRender && <SideNavbar />}
    </div>
  );
}
