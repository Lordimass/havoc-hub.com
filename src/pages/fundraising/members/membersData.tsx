export type MemberData = {
    username: string
    icon: string
    name: string
    pronouns: string
    socials: SocialData[]
}

export type SocialData = {
    name: string,
    href: string
}

export type SocialIcon = {
    name: string,
    src: string
}

export const membersData: MemberData[] = [ // Order of members determines the order of render on the site
    {
        "username": "Lordimass",
        "icon" : "https://fljzgwpfjpgvhixuacrm.supabase.co/storage/v1/object/public/images/streamer-icons/lordimass-icon.png",
        "name" : "Sam",
        "pronouns" : "He/Him",
        "socials" : [ // First social is linked on the username
            {name: "twitch", href: "https://twitch.tv/lordimass"},
            {name: "youtube", href: "https://www.youtube.com/@lordimass1713"},
            {name: "bsky", href: "https://bsky.app/profile/lordimass.net"},
            {name: "discord", href: "https://discord.com/users/969949353605230604"},
            {name: "website", href: "https://lordimass.net"},
        ]
    },
    {
        "username": "Skipper",
        "icon" : "https://fljzgwpfjpgvhixuacrm.supabase.co/storage/v1/object/public/images/streamer-icons/skipper-icon.png",
        "name" : "Konrad",
        "pronouns" : "He/Him",
        "socials" : [
            {name: "twitch", href: "https://www.twitch.tv/masterskipper_"},
            {name: "youtube", href: "https://www.youtube.com/channel/UCwYIvxb2pGDQvWL0J340wzg"},
            {name: "bsky", href: "https://bsky.app/profile/skipprr.bsky.social"},
            {name: "discord", href: "https://discord.com/users/719290239696240731"},
            {name: "wiki", href: "https://reformation.wiki.gg/Skipper"},
        ]
    },
    {
        "username": "Dartnk",
        "icon" : "https://fljzgwpfjpgvhixuacrm.supabase.co/storage/v1/object/public/images/streamer-icons/darth-icon.png",
        "name" : "Ben",
        "pronouns" : "He/Him",
        "socials" : [
            {name: "youtube", href: "https://www.youtube.com/@DarthDankulous"},
        ]
    },
    {
        "username": "Goose",
        "icon" : "https://fljzgwpfjpgvhixuacrm.supabase.co/storage/v1/object/public/images/streamer-icons/goose-icon.png",
        "name" : "Zac",
        "pronouns" : "He/Him",
        "socials" : [
            {name: "twitch", href: "https://www.twitch.tv/thisisgoosewithaknife"},
            {name: "youtube", href: "https://www.youtube.com/@GosoeGoose"},
            {name: "discord", href: "https://discord.com/users/663784977871142912"},
        ]
    },
    {
        "username": "FourYearChaos",
        "icon" : "https://fljzgwpfjpgvhixuacrm.supabase.co/storage/v1/object/public/images/streamer-icons/chaos-icon.png",
        "name" : "Alan",
        "pronouns" : "He/Him",
        "socials" : [
            {name: "twitch", href: "https://www.twitch.tv/four_year_chaos"},
            {name: "discord", href: "https://discord.com/users/646413778807816194"},
        ]
    }
]

export const socialIcons: SocialIcon[] = [
    {name: "twitch", src: "https://fljzgwpfjpgvhixuacrm.supabase.co/storage/v1/object/public/images/social-platform-icons/twitch.jpg"},
    {name: "youtube", src: "https://fljzgwpfjpgvhixuacrm.supabase.co/storage/v1/object/public/images/social-platform-icons/youtube.jpg"},
    {name: "bsky", src: "https://fljzgwpfjpgvhixuacrm.supabase.co/storage/v1/object/public/images/social-platform-icons/bluesky.jpg"},
    {name: "discord", src: "https://fljzgwpfjpgvhixuacrm.supabase.co/storage/v1/object/public/images/social-platform-icons/discord.jpg"},
    {name: "website", src: "https://fljzgwpfjpgvhixuacrm.supabase.co/storage/v1/object/public/images/social-platform-icons/web.svg"},
    {name: "wiki", src: "https://fljzgwpfjpgvhixuacrm.supabase.co/storage/v1/object/public/images/social-platform-icons/rfwiki.jpg"}
]