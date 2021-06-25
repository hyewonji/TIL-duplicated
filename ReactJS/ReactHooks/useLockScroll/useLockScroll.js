import React, { useEffect, useState } from "react";

const useLockScroll = () => {
    const [isLocked, setisLocked] = useState(false);

    const handle = {
        lockScroll: () => {
            window.onscroll = function () { window.scrollTo(0, 0); };
            setisLocked(true);
        },
        unlockScroll: () => {
            window.onscroll = function () { window.scrollTo(); };
            setisLocked(false);
        }
    }

    return {isLocked, ...handle}
}

export default useLockScroll;