import React, { use, useEffect } from "react";
import Header from "../Header";
import { useState } from "react";
import ClubContent from "../ClubContent";
import { useParams } from "react-router-dom";

const Club = () => {
    let {id: activeIndex} = useParams();
    activeIndex = activeIndex ? parseInt(activeIndex) : 0;
    const [activeTab, setActiveTab] = useState(activeIndex);

    const tabs = [
        { id: 0, name: 'Terra Titans', url: '/pictures/TerraTitansLogo2.png', captain_boys: 'Name 1', captain_girls: 'Name 2', vice_captain_boys: 'Name 3', vice_captain_girls: 'Name 4' },
        { id: 1, name: 'Fiery Pheonix', url: '/pictures/Fiery PhonixLogo2.png', captain_boys: 'Name 1', captain_girls: 'Name 2', vice_captain_boys: 'Name 3', vice_captain_girls: 'Name 4' },
        { id: 2, name: 'Verdant Mavericks', url: '/pictures/VerdantMavericksLogo.png', captain_boys: 'Name 1', captain_girls: 'Name 2', vice_captain_boys: 'Name 3', vice_captain_girls: 'Name 4' },
        { id: 3, name: 'Thundering Strikers', url: '/pictures/ThunderStrickersLogo2.png', captain_boys: 'Name 1', captain_girls: 'Name 2', vice_captain_boys: 'Name 3', vice_captain_girls: 'Name 4' },
        { id: 4, name: 'Kinetic Kairos', url: '/pictures/KineticKairosLogo2.png', captain_boys: 'Name 1', captain_girls: 'Name 2', vice_captain_boys: 'Name 3', vice_captain_girls: 'Name 4' },
    ];

    useEffect(() => {
        setActiveTab(activeIndex);
    }, [activeIndex]);

    return (
        <div className="h-full">
            <Header />
            <div className="p-8 flex justify-center items-center flex-col">
                <div className="tabs tabs-border tabs-xl lspace-x-4 overflow-x-auto">
                    {tabs.map((tab, index) => (
                        <a
                            key={tab.id}
                            className={`tab tab-lifted ${activeTab === index ? 'tab-active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.name}
                        </a>
                    ))}
                </div>
            </div>
            <div>
                <ClubContent club={tabs[activeTab]} />
            </div>
        </div>
    );
};

export default Club;