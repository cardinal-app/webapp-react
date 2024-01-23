"use server"
import React, { Suspense } from 'react'
import Wallet from '@/core/components/wallet/Wallet';
import Menu from '@/core/components/menu/Menu';
import styles from './FitTrack.module.scss'
import Running from './running/Running';
import Resistance from './resistance/Resistance';
import General from './general/General';
import Container from '@/core/components/container/Container';
import Accordion from '@/core/components/accordion/Accordion';
import FitTrackAdmin from './admin/Admin';
import { getWeeks } from '@/lib/weeks';
import FitTrackLoadingPage from './loading';

interface Week {
    block: number;
    week: number;
    running: {
        createdDate: string,
        session: Object[],
        volume: number;
    };
}

async function FitTrackContent() {
    const weeks: Week[] = await getWeeks();
    
    return (
        <>
            <Container>
                <Accordion title="General">
                    <General />
                </Accordion>
            </Container>
            <Container>
                <Accordion title="Resistance">
                    <Resistance />
                </Accordion>
            </Container>
            <Container>
                <Accordion title="Running">
                    <Running weeks={weeks}/>
                </Accordion>
            </Container>
        </>
    )
}

const FitTrackPage = async () => {
    // const res = await fetch(
    //     'http://localhost:8080/weeks'
    // );

    // const weeks: Week[] = (await res.json())['_embedded']['weeks'];
    // console.log(weeks);

    return (
        <Wallet>
            <Menu>Fit Track</Menu>
            <section id={styles.fitTrackSection}>
                <FitTrackAdmin />
                <Suspense fallback={<FitTrackLoadingPage />}>
                    <FitTrackContent />
                </Suspense>
            </section>
        </Wallet>
    );
}

export default FitTrackPage;
