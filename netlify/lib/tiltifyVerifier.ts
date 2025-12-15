import {sha256} from "js-sha256";
import {createHmac} from "node:crypto";

/**
 * Verify the Tiltify request.
 * @param request The request to verify
 * @see https://developers.tiltify.com/docs/webhooks/receiving-webhooks/verifying#tag/user/operation/getUserCampaigns
 */
export default async function verifyTiltifyRequest(request: Request) {
    // Create a clone to prevent modifying the request
    request = request.clone()

    // Extract signature and timestamp from header
    const signature = request.headers.get('X-Tiltify-Signature')
    const timestamp = request.headers.get('X-Tiltify-Timestamp')
    if (!signature) {
        throw new Error("No X-Tiltify-Signature provided")
    } else if (!timestamp) {
        throw new Error("No X-Tiltify-Timestamp provided")
    }
    // Extract body
    const request_body = await request.text()

    // Generate signed payload
    const hmac = createHmac("sha256", process.env.TILTIFY_DONATION_LOGGER_WEBHOOK_KEY!);
    hmac.update(`${timestamp}.${request_body}`);
    return hmac.digest("base64") === signature
}
