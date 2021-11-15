import React from 'react'
import './styled.css'

export default function ErrorBanner({message}) {
    const errorMsg = message  || "error";

    return (
        <div className="error-banner"
        data-testid="error-banner">
{errorMsg}
        </div>
    )
}

