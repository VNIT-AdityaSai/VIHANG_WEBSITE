import React, { use, useEffect } from "react";
import Header from "../Header";
import { useState } from "react";
import ClubContent from "../ClubContent";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

const URL = "http://localhost:3000/summary";

const Club = () => {
    let params = useParams();
    let activeIndex = params.id ?? 0;
    activeIndex = activeIndex ? parseInt(activeIndex) : 0;
    const [activeTab, setActiveTab] = useState(activeIndex);

    const tabsData = [
        { teamId: 1, name: 'Terra Titans', url: '/pictures/TerraTitansLogo2.png', captain_boys: 'Name 1', captain_girls: 'Name 2', vice_captain_boys: 'Name 3', vice_captain_girls: 'Name 4', gold: 0, silver: 0, bronze: 0, total: 0 },
        { teamId: 2, name: 'Fiery Pheonix', url: '/pictures/Fiery PhonixLogo2.png', captain_boys: 'Name 1', captain_girls: 'Name 2', vice_captain_boys: 'Name 3', vice_captain_girls: 'Name 4', gold: 0, silver: 0, bronze: 0, total: 0 },
        { teamId: 3, name: 'Verdant Mavericks', url: '/pictures/VerdantMavericksLogo.png', captain_boys: 'Name 1', captain_girls: 'Name 2', vice_captain_boys: 'Name 3', vice_captain_girls: 'Name 4', gold: 0, silver: 0, bronze: 0, total: 0 },
        { teamId: 4, name: 'Thundering Strikers', url: '/pictures/ThunderStrickersLogo2.png', captain_boys: 'Name 1', captain_girls: 'Name 2', vice_captain_boys: 'Name 3', vice_captain_girls: 'Name 4', gold: 0, silver: 0, bronze: 0, total: 0 },
        { teamId: 5, name: 'Kinetic Kairos', url: '/pictures/KineticKairosLogo2.png', captain_boys: 'Name 1', captain_girls: 'Name 2', vice_captain_boys: 'Name 3', vice_captain_girls: 'Name 4', gold: 0, silver: 0, bronze: 0, total: 0 },
    ];

    const [tabs, setTabs] = useState(tabsData);

    useEffect(() => {
        setActiveTab(activeIndex);
    }, [activeIndex]);

    useEffect(() => {
        async function fetchData() {
            const pointsData = await fetch(URL);
            const result = await pointsData.json();

            if (result && result.length > 0) {

                const newTabs = tabs.map((team) => {
                    const club = result.find((item) => parseInt(item.teamId) === team.teamId);
                    if (club === undefined) {
                        return team;
                    }
                    const { teamId, gold, silver, bronze, total } = club;
                    return { ...team, gold, silver, bronze, total };
                })

                newTabs.sort((a, b) => b.total - a.total);

                console.log("points", newTabs)
                setTabs(newTabs);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="h-full">
            <Header />
            <div className="p-8 flex justify-center items-center flex-col">
                <div className="tabs tabs-border tabs-xl lspace-x-4 overflow-x-auto">
                    {tabs.map((tab, index) => (
                        <a
                            key={tab.teamId}
                            className={`tab tab-lifted ${activeTab === index ? 'tab-active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.name}
                        </a>
                    ))}
                </div>
            </div>
            <div>
                {tabs && tabs.length > 0 &&
                    <ClubContent key={activeTab} club={tabs[activeTab]} />
                }
            </div>
            <Footer />
        </div>
    );
};

export default Club;