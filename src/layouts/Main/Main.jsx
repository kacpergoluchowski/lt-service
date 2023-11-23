import React from "react";
import './Main.css';
import Header from "../../components/Header/Header";
import HabitsCard from "../../components/HabitsCard/HabitsCard";
import StatsCard from "../../components/StatsCard/StatsCard";
import GoalsCard from "../../components/GoalsCard/GoalsCard";
import EventsCard from "../../components/EventsCard/EventsCard";
import NotsCard from "../../components/NotsCard/NotsCard";

export default function Main() {
    return (
        <main>
            <Header />
            <section>
                <HabitsCard />
                <StatsCard />
                <GoalsCard />
                <NotsCard />
                <EventsCard />
            </section>
        </main>
    )
}