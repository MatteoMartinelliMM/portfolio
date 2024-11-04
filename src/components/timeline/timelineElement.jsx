// eslint-disable-next-line react/prop-types
function TimelineElement({left = true, time, title, children}) {
    return <div className={`${left ? 'timeline-start' : 'timeline-end'} text-left mt-2 ${left ? 'lg:text-end' : ''}`}>
        <time className="font-mono italic">{time}</time>
        <div className="text-lg font-black whitespace-pre-line">{title}</div>
        {children}
    </div>
}

export default TimelineElement