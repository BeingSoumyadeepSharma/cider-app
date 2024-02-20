"use client"

import { Tldraw } from "@tldraw/tldraw";

export default function DrawPage() {
    return (
        <div className="fixed inset-0">
            <Tldraw />
        </div>
    );
}