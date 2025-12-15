export interface TiltifyDonationUpdatedWebhook {
    data: {
        amount: {
            currency: string
            value: string
        }
        campaignId: string
        cause_id: string
        completed_at: string
        created_at: string
        donor_comment: string
        donor_name: string
        email: string | null
        fundraising_event_id: string
        id: string
        legacy_id: number
        poll_id: string | null
        poll_option_id: string | null
        reward_custom_question: string | null
        reward_id: string | null
        reward_claims: any[]
        sustained: boolean
        target_id: string | null
        team_event_id: string
    }
    meta: {
        attempted_at: string
        event_type: string
        generated_at: string
        id: string
        subscription_source_id: string
        subscription_source_type: string
    }
}