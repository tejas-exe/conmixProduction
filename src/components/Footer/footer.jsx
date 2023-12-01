import React from 'react';
import s from "./style.module.css"; // Your custom CSS file

const CopyrightBar = () => {
  return (
    <footer className={s.copyright}>
      <div className={s.container}>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default CopyrightBar;
