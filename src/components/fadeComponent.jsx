import {useEffect, useRef, useState} from "react";

function FadeComponent({children, fast = false}) {
    const elementRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const animation = fast ? 'animate-fade-in-fast' : 'animate-fade-in'
    useEffect(() => {
        const element = elementRef.current

        if (!element) return

        const obs = new IntersectionObserver(([entry]) => {
            entry.isIntersecting ? entry.target.classList.add(animation) : entry.target.classList.remove(animation)
            console.log(animation)
            /*console.log('BEFORE')
            console.log(`isIntersecting ${entry.target.id} ${entry.isIntersecting}`)
            console.log(`classList ${entry.target.classList.toString()}`)
            //setIsVisible(entry.isIntersecting);
            console.log('AFTER')
            console.log(`isIntersecting ${entry.target.id} ${entry.isIntersecting}`)
            console.log(`classList ${entry.target.classList.toString()}`)
            if (entry.isIntersecting) {
                entry.target.classList.add('animate')
                requestAnimationFrame(() => {
                    entry.target.opacity = 1
                });
                return
            }
           /* entry.target.classList.remove('animate-fade-in')
            entry.target.classList.add('animate-fade-out'
            entry.target.classList.remove('animate')
            entry.target.opacity = 0*/
        }, {
            threshold: fast ? 0.5: 0, rootMargin: fast ? '0px -10%':'0px'
        })
        obs.observe(element)
        return () => obs.disconnect()
    }, []);

    return <div ref={elementRef}
                className={animation}>
        {children}
    </div>
}

export default FadeComponent