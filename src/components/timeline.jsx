import {useEffect, useRef, useState} from "react";

function Timeline({items}) {
    const timelineRef = useRef(null)
    const [lineHeight, setLineHeight] = useState(0)

    useEffect(() => {
        const listItems = timelineRef.current?.document.querySelectorAll('li')
        if (!listItems) return

        const obs = new IntersectionObserver((entries) => {
            const maxBottom = entries.reduce((max, entry) => entry.isIntersecting ?
                    Math.max(max, entry.target.getBoundingClientRect().bottom) : max
                , 0)

            if (timelineRef.current) {
                const timelineRect = timelineRef.current.getBoundingClientRect()
                setLineHeight(maxBottom - timelineRect.top)
            }
        }, {
            threshold: 0.5,
            rootMargin: "0px"
        })

        listItems.forEach(li => obs.observe(li))
        return () => obs.disconnect()
    }, []);
}