import React from 'react';
import s from "./style.module.css"; // Your custom CSS file

const CopyrightBar = () => {
  return (
    <footer className={s.copyright}>
      <div className={s.container}>
        <p>copyright@{new Date().getFullYear()}|Conmix Somnath RMC|developed by Tejas Kumarley  & Mayuri Soni . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default CopyrightBar;
