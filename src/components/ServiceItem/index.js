import React, { useEffect, useState } from "react";
import { serviceMeta } from "../../utils/constants";
import "./style.css";

const ServiceItem = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event) => {
            setScreenSize(event.target.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="service-container">
            {serviceMeta.map((item) => (
                <div key={item.id} className="service-item">
                    <img
                        src={
                            screenSize >= 760
                                ? item.imagePath
                                : item.imageMobilePath
                        }
                    />
                    <div className="title service-title">{item.title}</div>
                    <div className="subtitle service-sub-title">
                        {item.subTitle}
                    </div>
                    <div className="text service-text-content">
                        {item.description}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceItem;
