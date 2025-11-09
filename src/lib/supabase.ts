import {createClient} from "@supabase/supabase-js";
import {useEffect, useState} from "react";

const SUPABASE_DATABASE_URL = import.meta.env.VITE_SUPABASE_DATABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
export const supabase = createClient(SUPABASE_DATABASE_URL, SUPABASE_ANON_KEY)

export interface UseRPCReturn<T> {
    loading: boolean
    data?: T
    error?: Error
}

export async function callRPC(
    functionName: string,
    params?: { [key: string]: any },
    notify?: (msg: string) => void
): Promise<any> {
    const {data, error} = await supabase.rpc(functionName, params);
    if (error) {
        console.error(`Error calling RPC function "${functionName}":`, error);
        if (notify) notify(`An error occurred while calling the "${functionName}" function. Please try again later.`);
        return Promise.reject(error);
    } else {
        return data;
    }
}

export function useCallRPC(
    functionName: string,
    params?: { [key: string]: any },
    notify?: (msg: string) => void
) : UseRPCReturn<any> {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>(undefined);
    const [error, setError] = useState<Error | undefined>(undefined);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await callRPC(functionName, params, notify);
                setData(result);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return {loading, data, error};
}

/**
 * Fetch the top donors names and the amount they've donated, excluding Anonymous.
 * @param lim The number of top donors to return. Defaults to 10.
 * @return A list of objects with a `name` and `total_donation` number.
 */
export function useGetTopDonors(lim = 10) {
    const resp = useCallRPC(
        "get_top_donors",
        {lim},
    ) as UseRPCReturn<{name: string, total_donation: number}[]>;
    let topDonors = resp.data;

    // Before top donors are loaded, use placeholders
    if (!topDonors) {
        topDonors = []
        for (let i=0; i<lim; i++) {
            topDonors.push({name: "Name", total_donation: 0})
        }
    }
    return topDonors;
}

/**
 * Fetch the total amount of money donated so far.
 * @return A number representing the amount of money donated over all campaigns in GBP.
 */
export function useGetTotalDonations() {
    const resp = useCallRPC("get_total_donations")
    return resp.data as number || 0;
}