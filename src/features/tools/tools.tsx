import { ReactNode, useState } from 'react';
import { ButtonObject, LogoButtonsGroup } from '../../components';
import { GradientText } from '../../components';
import './tools.css';

enum ButtonID {
    Aurelia = 'aurelia',
    React = 'react',
    JavaScript = 'JavaScript',
    TypeScript = 'TypeScript',
    AWS = 'aws',
    ElasticSearch = 'elasticSearch',
    Docker = 'docker',
}

interface InfoBox {
    title: string;
    experience: string;
    description?: ReactNode;
}

export function Tools() {
    const [activeButtonId, setActiveButtonId] = useState<ButtonID>(
        ButtonID.React
    );

    const handleChange = (buttonId: ButtonID) => {
        setActiveButtonId(buttonId);
    };

    const buttons: ButtonObject[] = [
        {
            id: ButtonID.Aurelia,
            src: '/images/logos/aureliaLogo.png',
            alt: 'Aurelia',
        },
        {
            id: ButtonID.React,
            src: '/images/logos/reactLogo.png',
            alt: 'React',
        },
        {
            id: ButtonID.JavaScript,
            src: '/images/logos/javaScriptLogo.png',
            alt: 'JavaScript',
        },
        {
            id: ButtonID.TypeScript,
            src: '/images/logos/typeScriptLogo.png',
            alt: 'TypeScript',
        },
        {
            id: ButtonID.AWS,
            src: '/images/logos/awsLogo.png',
            alt: 'AWS',
        },
        {
            id: ButtonID.ElasticSearch,
            src: '/images/logos/elasticSearchLogo.png',
            alt: 'Elastic Search',
        },
        {
            id: ButtonID.Docker,
            src: '/images/logos/dockerLogo.png',
            alt: 'Docker',
        },
    ];

    const infoBoxes: { [key in ButtonID]: InfoBox } = {
        [ButtonID.Aurelia]: {
            title: 'Aurelia',
            experience: '4+ years experience',
        },
        [ButtonID.React]: {
            title: 'React',
            experience: '2+ years experience',
        },
        [ButtonID.JavaScript]: {
            title: 'JavaScript',
            experience: '4+ years experience',
        },
        [ButtonID.TypeScript]: {
            title: 'TypeScript',
            experience: '1+ year experience',
        },
        [ButtonID.AWS]: {
            title: 'AWS',
            experience: '4+ years experience',
            description: (
                <>
                    <p style={{ fontWeight: 'bold' }}>Services Include:</p>
                    <ul>
                        <li>Dynamo DB</li>
                        <li>Lambda</li>
                        <li>API Gateway</li>
                        <li>Simple Queue Service</li>
                        <li>Elastic Container Service</li>
                        <li>EC2</li>
                        <li>S3</li>
                        <li>Secrets Manager</li>
                    </ul>
                </>
            ),
        },
        [ButtonID.ElasticSearch]: {
            title: 'ElasticSearch',
            experience: '4+ years experience',
        },
        [ButtonID.Docker]: {
            title: 'Docker',
            experience: '4+ years experience',
        },
    };

    return (
        <div className="tools-wrapper">
            <div className="tools-buttons">
                <LogoButtonsGroup
                    buttons={buttons}
                    activeButtonId={activeButtonId}
                    onChange={handleChange}
                />
            </div>
            {activeButtonId ? (
                <div className="tools-infoBox">
                    <div className="header">
                        <GradientText>
                            <h3>{infoBoxes[activeButtonId].title}</h3>
                        </GradientText>
                        <p>{infoBoxes[activeButtonId].experience}</p>
                    </div>
                    {infoBoxes[activeButtonId].description ? (
                        <div className="description">
                            {infoBoxes[activeButtonId].description}
                        </div>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
}
