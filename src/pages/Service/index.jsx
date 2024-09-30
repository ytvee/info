import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import ServiceItem from "../../components/ServiceItem";
import MediaGallery from "../../components/MediaGallery";
import { portfolioMeta } from "../../utils/constants";
import "./style.css";

const Service = () => {
    return (
        <DefaultLayout>
            <div className="service-wrapper">
                <div className="title about-page-big-title">YT DEV</div>
                <div className="service-description-container">
                    <div className="contacts-label">
                        Разрабатываем с командой
                    </div>
                    <div className="contacts-title">Веб-сервисы | сайты</div>
                    <div className="contacts-title">
                        чат-ботов | mini-App для Telegram
                    </div>
                    <ServiceItem />
                    <MediaGallery
                        galleryTitle={"Выполненные проекты"}
                        posts={portfolioMeta}
                    />
                </div>
                <div className="about-page-description-container"></div>
            </div>
        </DefaultLayout>
    );
};

export default Service;
