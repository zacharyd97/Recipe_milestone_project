import React from 'react'
import Def from './default'
import Header from './components/header'

function home () {
    return (
        <Def>
            <Header/>
            <main>
                <div>
                    <h1>HOME PAGE</h1>
                </div>
            </main>
        </Def>
    )
}

export default home