import React from 'react'

export default function ErrorBanner({message}) {
    const errorMsg = message  || "error";

    return (
        <div
        data-testid="error-banner">
{errorMsg}
        </div>
    )
}

