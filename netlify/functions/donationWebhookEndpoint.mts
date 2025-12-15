import { Context } from "@netlify/functions";
import verifyTiltifyRequest from "../lib/tiltifyVerifier.ts";
import {TiltifyDonationUpdatedWebhook} from "../lib/tiltifyTypes.ts";
import {supabaseService} from "../lib/getSupabaseClient.ts";

export default async function handler(request: Request, context: Context) {
    // Verify signature
    if (!await verifyTiltifyRequest(request)) return new Response(undefined, {status: 403});
    const body = await request.json() as TiltifyDonationUpdatedWebhook;

    // Handle currency conversion
    const {data, error} = await supabaseService
        .from("donations")
        .insert({
            value: body.data.amount.value,
            name: body.data.donor_name,
            comment: body.data.donor_comment
        })
        .select()
    if (error) console.error(error);
}