import React from "react";
import useLockScroll from "./useLockScroll";

const UseLockScroll = () => {
    const {isLocked, lockScroll, unlockScroll } = useLockScroll();
    return (
        <div className="LockScroll">
            <h2>useLockScroll</h2>
            <div>Is Lock? {isLocked ? "yes" : "no"}</div>
            <button onClick = {lockScroll}>Lock Scroll</button>
            <button onClick = {unlockScroll}>Unlock Scroll</button>
        </div>
    )
}

export default UseLockScroll;