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
        "icon" : "https://cdn.reformationfundraising.com/rffcom/streamer-icons/lordimass-icon.png",
        "name" : "Sam",
        "pronouns" : "He/Him",
        "socials" : [ // First social is linked on the username
            {name: "twitch", href: "https://twitch.tv/lordimass"},
            {name: "youtube", href: "https://www.youtube.com/@lordimass1713"},
            {name: "bsky", href: "https://bsky.app/profile/lordimass.net"},
            {name: "discord", href: "https://discord.com/users/969949353605230604"},
            {name: "website", href: "https://lordimass.net"},
            {name: "wiki", href: "https://reformation.wiki.gg/Lordimass"}
        ]
    },
    {
        "username": "Skipper",
        "icon" : "https://cdn.reformationfundraising.com/rffcom/streamer-icons/skipper-icon.png",
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
        "username": "OtherworldlyFinn",
        "icon" : "https://cdn.reformationfundraising.com/rffcom/streamer-icons/otherwordlyfinn-icon.png",
        "name" : "Finn",
        "pronouns" : "He/They",
        "socials" : [
            {name: "twitch", href: "https://www.twitch.tv/otherworldlyfinn"},
            {name: "youtube", href: "https://www.youtube.com/@OtherworldlyFinn"},
            {name: "bsky", href: "https://bsky.app/profile/otherworldlyfinn.bsky.social"},
            {name: "discord", href: "https://discord.com/users/710071392288112793"},
        ]
    },
    {
        "username": "Dartnk",
        "icon" : "https://cdn.reformationfundraising.com/rffcom/streamer-icons/darth-icon.png",
        "name" : "Ben",
        "pronouns" : "He/Him",
        "socials" : [
            {name: "youtube", href: "https://www.youtube.com/@DarthDankulous"},
        ]
    },
    {
        "username": "Goose",
        "icon" : "https://cdn.reformationfundraising.com/rffcom/streamer-icons/goose-icon.png",
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
        "icon" : "https://cdn.reformationfundraising.com/rffcom/streamer-icons/chaos-icon.png",
        "name" : "Alan",
        "pronouns" : "He/Him",
        "socials" : [
            {name: "twitch", href: "https://www.twitch.tv/four_year_chaos"},
            {name: "discord", href: "https://discord.com/users/646413778807816194"},
        ]
    }
]

export const socialIcons: SocialIcon[] = [
    {name: "twitch", src: "https://cdn.reformationfundraising.com/rffcom/social-platform-icons/twitch.jpg"},
    {name: "youtube", src: "https://cdn.reformationfundraising.com/rffcom/social-platform-icons/youtube.jpg"},
    {name: "bsky", src: "https://cdn.reformationfundraising.com/rffcom/social-platform-icons/bluesky.jpg"},
    {name: "discord", src: "https://cdn.reformationfundraising.com/rffcom/social-platform-icons/discord.jpg"},
    {name: "website", src: "https://cdn.reformationfundraising.com/rffcom/social-platform-icons/web.svg"},
    {name: "wiki", src: "https://cdn.reformationfundraising.com/rffcom/social-platform-icons/rfwiki.jpg"}
]