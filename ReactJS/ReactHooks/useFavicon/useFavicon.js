import React, { useEffect, useState } from 'react';

const useFavicon = (initialFaviconUrl) => {

    const [state,setState] = useState(initialFaviconUrl)

    useEffect(() => {
        const head = document.querySelector("head")
        const link = head.querySelector("link")
        link.href = state
    },[state])

    const setFavicon = () => {
        setState("https://www.facebook.com/rsrc.php/yD/r/d4ZIVX-5C-b.ico")
    }
    return setFavicon
}

export default useFavicon;