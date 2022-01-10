import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
//import SpotifyWebApi from 'spotify-web-api-node'
import spotifyApi from '../lib/spotify'


/*const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})*/

export default function useSpotify() {
    const { data: session, status } = useSession()

    useEffect(() => {
        if(session) {
            if(session.error === 'RefreshedAccessTokenError'){
                signIn()
            }
            spotifyApi.setAccessToken(session.user.accessToken)
        }

    }, [session])


    return spotifyApi
}
