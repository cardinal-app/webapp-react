"use client"
import Container from "@/core/components/container/Container";
import styles from './Admin.module.scss';
import * as React from 'react';
import { Box, Modal, Button } from "@mui/material";
import { useState } from "react";

export default function FitTrackAdmin() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [block, setBlock] = useState("");
    const [week, setWeek] = useState("");
    const [volume, setVolume] = useState("");


    const addWeek = (event: any) => {
        event.preventDefault();
        
        // POST the data to the URL of the form
        fetch('http://localhost:8080/weeks', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                block: parseInt(block),
                week: parseInt(week),
                running: {
                    volume: parseInt(volume)
                }
            }),
        }).then(() => {
            // Reset form?
            setOpen(false);
        })
    }

    return (
        <>
        <section>
            <header id={styles.fitTrackHeader}>
                <p>Import</p>
                <p>Export</p>
                <p onClick={handleOpen}>Add Week</p>
            </header>
            <Container>
                <p>B14:W4</p>
            </Container>
        </section>
        <Modal
            id={styles.addWeekModal}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box id={styles.addWeekModalBox}>
                <h1>Add Week</h1>
                <form id={styles.addWeekForm}>
                    <label>Block: <input type="number" value={block} onChange={(e) => setBlock(e.target.value)}/></label>
                    <label>Week: <input type="number" value={week} onChange={(e) => setWeek(e.target.value)}/></label>
                    <label>Volume (miles): <input type="number" value={volume} onChange={(e) => setVolume(e.target.value)}/></label>
                    <Button onClick={addWeek}>Submit</Button>
                </form>
            </Box>
        </Modal>
        </>
    )


}
