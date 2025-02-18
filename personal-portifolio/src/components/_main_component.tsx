// 'use client'; // Adicione esta diretiva para garantir que seja tratado como um componente cliente

import styles from "@/styles/page.module.css";
import React, { useState } from 'react';

export function SideNavbar() {
  const [selectedItem, setSelectedItem] = useState('');

  const items = [
    'Home', 
    'About', 
    'Services', 
    'Contact'
  ];

  const handleItemClick = (item : string) => {
    setSelectedItem(item);
  };

  return (
    <aside className={styles.sideNavbar}>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className={selectedItem === item ? styles.active : ''}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
