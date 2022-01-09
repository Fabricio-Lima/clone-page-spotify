import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

const Middleware = async(req) => {
    const token = await getToken({
    req,
    secret: process.env.JWT_SECRET
})

    const { pathname } = req.nextUrl

    if(pathname.includes('/api/auth') || token) {
        return NextResponse.next()
    }

    if(!token && pathname !== '/login'){
        return NextResponse.redirect('/login')
    }

}

export default Middleware
