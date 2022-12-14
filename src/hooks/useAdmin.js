import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdLoading, setIsAdLoading] = useState(true)
    useEffect(() => {

        if (email) {
            fetch(`https://auto-shop-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsAdmin(data.isAdmin)
                    setIsAdLoading(false)
                })
        }

    }, [email])
    return [isAdmin, isAdLoading]
}

export default useAdmin;