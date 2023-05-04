import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { Container} from "@mui/material";
const App = () => {
  const { lng, setLng } = useState("en");
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <div className="navbar  bg-blue-600 h-[100px] pt-[30px]">
        <Container>
          <div className="flex justify-between">
            <div>
              <ul className="flex gap-[60px] text-[white] font-[600] text-[30px] cursor-pointer">
                <li>{t("navbar.home")}</li>
                <li>{t("navbar.about")}</li>
                <li>{t("navbar.contact")}</li>
                <li>{t("navbar.info")}</li>
              </ul>
            </div>
            <div className="pt-[10px]">
              <select
                className="bg-[white] border-none text-[black] h-[30px] w-[55px] font-[600] rounded-[2px]"
                value={lng}
                onChange={(e) => {
                  changeLanguage(e.target.value);
                  setLng(e.target.value);
                }}
              >
                <option value={"en"}>En</option>
                <option value={"ru"}>Ru</option>
              </select>
            </div>
          </div>
        </Container>
      </div>
      <div className="text-center pt-[100px] pp">
        <Container>
          <h1 className="text-[60px]">🤗{t("title")}🤗</h1>
          <h1 className="text-[30px] w-[100%] m-auto">
            {t("section1.desc")}
          </h1>
        </Container>
      </div>
    </div>
  );
};

export default App;
