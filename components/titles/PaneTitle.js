import React from 'react'

function PaneTitle1({ children }) {
    return (
        <h1 className="my-6 text-2xl font-semibold ">{children}</h1>
    )
}

function PaneTitle2({ children }) {
    return (
        <h1 className="my-6 text-xl font-semibold ">{children}</h1>
    )
}


export {
    PaneTitle1,
    PaneTitle2
}