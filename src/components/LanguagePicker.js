import { useState } from "react";

const LanguagePicker = ({ language, setCurrentLanguage, supportedLanguages }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="language-picker">
      <div
          className="language-picker-input"
          onClick={() => setOpen(!open)}
      >
        <div className="language-picker-name">{language}</div>
        <svg className="language-picker-icon" width="24" height="24" viewBox="0 0 24 24">
          <path d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" />
        </svg>
      </div>
      {open && (
        <>
          <div
            className="language-picker-overlay"
            onClick={() => setOpen(false)}
          />
          <ul className="language-picker-list">
            {supportedLanguages.map((id, index) => {
              return (
                <li
                  className="language-picker-item"
                  key={index}
                  onClick={() => setCurrentLanguage(id)}
                >
                  {id}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default LanguagePicker;
