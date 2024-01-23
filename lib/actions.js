"use server";

import { saveWeek } from './weeks';
import { redirect } from 'next/navigation'

export async function submitWeek(currentState, formData) {
    const week = {
        block: formData.get("block"),
        week: formData.get("week"),
        volume: formData.get("volume")
    }

    await saveWeek(week);
    // redirect("/fit-track")
}
