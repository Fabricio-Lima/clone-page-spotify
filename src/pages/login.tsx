import { getProviders, signIn } from "next-auth/react"
import React from "react"


const Login = ({ providers }) => {
    return (
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            <img
                className="w-52 mb-5"
                src="https://links.papareact.com/9xl"
                alt="logo-spotify"
            />
            {Object.values(providers).map((provider: any) => (
                <div key={provider.name}>
                    <button
                        className="bg-[#18D860] text-white p-5 rounded-full"
                        onClick={() => signIn(provider.id, { callbackUrl: "/"}
                        )}
                    >
                        Login with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Login

export const getServerSideProps = async () => {
    const providers = await getProviders()

    return {
        props: {
            providers,
        }
    }
}


