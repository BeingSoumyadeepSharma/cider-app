"use client"

import { Tldraw, TLComponents } from "tldraw";

const components: TLComponents = {
    DebugPanel: null
}

export default function DrawPage() {
    return (
        <div className="absolute top-24 w-full h-[90vh] -z-0">
            <Tldraw components={components} inferDarkMode/>
        </div>
    );
}