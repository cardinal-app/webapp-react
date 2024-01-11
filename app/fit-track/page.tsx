"use server"
import React from 'react'
import { redirect } from 'next/navigation';
import { GetInitialProps } from '@/core/interfaces/page.interface';
import { authUtil } from '@/core/utils/auth.util';
import Wallet from '@/core/components/wallet/Wallet';
import Menu from '@/core/components/menu/Menu';
import styles from './FitTrack.module.scss'
import Running from './running/Running';
import Resistance from './resistance/Resistance';
import General from './general/General';
import Container from '@/core/components/container/Container';
import Accordion from '@/core/components/accordion/Accordion';
import FitTrackAdmin from './admin/Admin';

interface Week {
    block: number;
    week: number;
    running: {
        createdDate: string,
        session: Object[],
        volume: number;
    };
}

interface GetInitialReturnProps {
    authToken: string | undefined;
}

const FitTrackPage = async () => {

    // const [formData, setFormData] = useState({
    //     block: "",
    //     week: "",
    //     volume: ""
    // });

    const res = await fetch(
        'http://localhost:8080/weeks'
    );
    
    const weeks: Week[] = (await res.json())['_embedded']['weeks'];
    console.log(weeks);

    // const addWeek = (event: any) => {
    //     event.preventDefault();
    //
    //     console.log(event);
    //
    //     // POST the data to the URL of the form
    //     fetch('http://localhost:8080/weeks', {
    //         method: "POST",
    //         body: JSON.stringify({}),
    //     }).then(() => {
    //         // setFormData({
    //         //     block: "",
    //         //     week: "",
    //         //     volume: ""
    //         // })
    //     })
    // }

    return (
        <Wallet>
            <Menu>Fit Track</Menu>
            <section id={styles.fitTrackSection}>
                <FitTrackAdmin />
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
            </section>
        </Wallet>
    );
}

FitTrackPage.getInitialProps = async (ctx: GetInitialProps): Promise<GetInitialReturnProps> => {
    const authToken = authUtil.getAuthToken(ctx);

    if (!authToken) {
        redirect('/login');
    }

    return {authToken};
};

export default FitTrackPage;
