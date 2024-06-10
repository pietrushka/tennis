import ky from 'ky';

export type Player = {
wtnRating: number | null // wtf idk eg.  5.08 
playerId: number // eg. 800190309,
givenName: string // "Asdrubal"
familyName: string // "Borban"
playerNationalityCode: string // "MEX"
playerNationality: string // "Mexico"
playerProfileLink: string // "/en/players/asdrubal-borban/800190309/mex/"
profileImage: string // "/media/1490/itf-uk-profile-placeholder-male.jpg?anchor=center&mode=crop&width=219&height=282&rnd=132174204480000000"
profileImageId: number // eg. 5457,
playedCircuits: Array<{
    label: string // "Juniors"
    value: string // "JT"
}>
FullName: string // eg. "Asdrubal Borban"
}

export type SearchResponse = {
players: Array<Player>
}

export const searchPlayersByName = async (searchString: string) => {
    // const url = 'https://www.itftennis.com/tennis/api/PlayerApi/GetPlayerSearch';
    // const searchParams = new URLSearchParams({
    //     searchString: searchString
    // });

    
    // return  ky.get(url, {
    //     searchParams,
    //     headers: {
    //         "Accept": "*/*",
    //         "Accept-Encoding": "gzip, deflate, br, zstd",
    //         "Accept-Language": "en-US,en;q=0.9,pl;q=0.8",
    //         "Cache-Control": "no-cache",
    //         "Pragma": "no-cache",
    //         "Sec-CH-UA": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    //         "Sec-CH-UA-Mobile": "?0",
    //         "Sec-CH-UA-Platform": "\"Windows\"",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-origin",
    //         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    //         "Cookie": "ARRAffinity=1a7aff82bc21373b03d8fda86d009014a254fb43661cd4068b45b28f7aa56160; ARRAffinitySameSite=1a7aff82bc21373b03d8fda86d009014a254fb43661cd4068b45b28f7aa56160; visid_incap_178373=vI680wf9Si6OuPRWuj89xS55I2YAAAAAQUIPAAAAAACdoTzFgsX1acSgEPxh2H/R; nlbi_178373=ONDdVJz5AGQZtDMKtoSRdQAAAAAubNaoHd0sQVBBvyQaENEl; incap_ses_323_178373=pnGEDPggtkGUBBiS1YZ7BC55I2YAAAAAm+UJMewJMJqAM+7RiMvJoQ==; OptanonAlertBoxClosed=2024-04-20T08:13:46.721Z; OptanonConsent=isGpcEnabled=0&datestamp=Sat+Apr+20+2024+10%3A21%3A32+GMT%2B0200+(Central+European+Summer+Time)&version=6.23.0&isIABGlobal=false&hosts=&consentId=889e2d40-1891-49e9-9dc9-e1f8d6daffa7&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1%2CC0005%3A1&geolocation=PL%3B10&AwaitingReconsent=false"
    //     },
    //     // "compress": true, // Compression is handled automatically by the browser and node-fetch if used
    // }).json<SearchResponse>();

    return 
};