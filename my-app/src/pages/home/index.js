import React from "react"

function Home() {
    let valor
    const shopping = (lojas) => {
        valor = lojas
    }
    const click = () => {
        window.location.href = `/lojas?=${valor}`
    }
    return (
        <div className="box">
            <form>
                <input onChange={(e) => shopping(e.target.value)} />
                <button onClick={(e) => {
                    e.preventDefault()
                    click()
                }}
                >teste</button>
            </form>
        </div>
    )
}
export default Home;