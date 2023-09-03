import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function IsLogedIn() {

    var navigate = useNavigate()
    
    useEffect(() => {
        if (sessionStorage.getItem("token") === null) {
            navigate("/login")
        }
    })
}