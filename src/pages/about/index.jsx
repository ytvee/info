import * as React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { pageLabels } from "../../components/AppHeader/meta";
import Seo from "../../components/seo";
import {
    avaImagePath,
    imageKeys,
    descriptionText,
    expertDescription,
    expertDescriptionKeys,
} from "./meta";
import "./style.css";

const AboutPage = () => {
    const [currentImage, setCurrentImage] = React.useState(imageKeys.GREY);

    const AboutDescription = () => {
        return (
            <div className="about-page-description">
                <span className="subtitle about-page-description-title">
                    {expertDescriptionKeys.ABOUT}
                </span>
                <span className="text about-page-text about-page-description-text">
                    {descriptionText}
                </span>
            </div>
        );
    };

    const AboutSkills = () => {
        return (
            <div className="about-page-skills">
                <span className="subtitle about-page-description-title">
                    {expertDescriptionKeys.SKILLS}
                </span>
                <ul className="about-page-ul">
                    {expertDescription[expertDescriptionKeys.SKILLS].map(
                        (item) => (
                            <li className="text about-page-skills about-page-description-text">
                                {item}
                            </li>
                        )
                    )}
                </ul>
            </div>
        );
    };

    const AboutExperience = () => {
        return (
            <div className="about-page-experience">
                <span className="subtitle about-page-description-title">
                    {expertDescriptionKeys.EXP}
                </span>
                <ul className="about-page-ul">
                    {expertDescription[expertDescriptionKeys.EXP].map(
                        (item) => (
                            <li className="text about-page-exp about-page-description-text">
                                {item}
                            </li>
                        )
                    )}
                </ul>
            </div>
        );
    };

    return (
        <DefaultLayout>
            <div className="title about-page-big-title">
                {expertDescriptionKeys.TITLE}
            </div>
            <div className="about-page-image-container">
                <img
                    className="about-page-image post-img"
                    src={avaImagePath + currentImage + ".png"}
                    onMouseEnter={() => setCurrentImage(imageKeys.COLORED)}
                    onMouseLeave={() => setCurrentImage(imageKeys.GREY)}
                />
            </div>
            <div className="about-page-description-container">
                <AboutDescription />
                <AboutSkills />
                <AboutExperience />
            </div>
        </DefaultLayout>
    );
};

export const Head = () => <Seo pageTitle={pageLabels.ABOUT} />;

export default AboutPage;
