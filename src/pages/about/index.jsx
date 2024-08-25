import * as React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { pageLabels } from "../../components/AppHeader/meta";
import Seo from "../../components/seo";
import "./style.css";

const avaImagePath =
    "https://res.cloudinary.com/duyqvi0ig/image/upload/v1723193765/";
const imageKeys = {
    COLORED: "ava1_o48kxf",
    GREY: "ava2_xkrf7d",
};

const descriptionText =
    "Мне нравится создавать структуры и удобные, красивые интерфейсы. Изучаю Web3 и нейросети. Помимо профессиональной деятельности занимаюсь музыкой, люблю катать на борде, играть в настолки и путешествовать.";

const AboutPage = () => {
    const [currentImage, setCurrentImage] = React.useState(imageKeys.GREY);

    const avaImageToggle = () => {
        if (currentImage === imageKeys.COLORED) {
            return setCurrentImage(imageKeys.GREY);
        }
        return setCurrentImage(imageKeys.COLORED);
    };

    return (
        <DefaultLayout>
            <div className="title about-page-big-title">Y. TYAN</div>
            <div className="about-page-image-container">
                <img
                    className="about-page-image post-img"
                    src={avaImagePath + currentImage + ".png"}
                    onClick={avaImageToggle}
                />
            </div>
            <div className="about-page-description-container">
                <div className="about-page-description">
                    <span className="subtitle about-page-description-title">
                        Обо мне
                    </span>
                    <span className="text about-page-text about-page-description-text">
                        {descriptionText}
                    </span>
                </div>
                <div className="about-page-skills">
                    <span className="subtitle about-page-description-title">
                        Навыки
                    </span>
                    <ul className="about-page-ul">
                        <li className="text about-page-skills about-page-description-text">
                            JavaScript, TypeScript, React, Vue3
                        </li>
                        <li className="text about-page-skills about-page-description-text">
                            Bootstrap, MUI
                        </li>
                        <li className="text about-page-skills about-page-description-text">
                            Git
                        </li>
                    </ul>
                </div>
                <div className="about-page-experience">
                    <span className="subtitle about-page-description-title">
                        Проф опыт
                    </span>
                    <ul className="about-page-ul">
                        <li className="text about-page-exp about-page-description-text">
                            Singularity Net [с окт 2023] / Frontend-разработчик.
                            Разработка интерфейсов для blockchain-сервисов.
                            React.js, Vue.js, Web3
                        </li>
                        <li className="text about-page-exp about-page-description-text">
                            Choco Family [авг 2022 - янв 2023] /
                            Frontend-разработчик. Работа с интерфейсами магазина
                            ChocoFood. Vue.js, Vite, Vuetify
                        </li>
                        <li className="text about-page-exp about-page-description-text">
                            xCritical Software [фев 2019 - янв 2020] /
                            Backend-разработчик. Разработка CRM-систем. ASP.NET
                            C#
                        </li>
                        <li className="text about-page-exp about-page-description-text">
                            Freelance [авг 2018 - мар 2019] /
                            Backend-разработчик. Разработка чат-ботов для
                            Telegram. Python, PostgreSQL, Docker
                        </li>
                        <li className="text about-page-exp about-page-description-text">
                            Lab of the Future [сен 2014 - авг 2015] /
                            Backend-разработчик. Работа в IBM Domino. Lotus
                            Script
                        </li>
                        <li className="text about-page-exp about-page-description-text">
                            EduTech [паузы между работой и свбодное время] / 10
                            лет в сумме обучал программированию и алгоритмизации
                            школьников и студентов. Писал методический материал
                            для школ программирования
                        </li>
                    </ul>
                </div>
            </div>
        </DefaultLayout>
    );
};

export const Head = () => <Seo pageTitle={pageLabels.ABOUT} />;

export default AboutPage;
