function FloatingActionButton({className = ""}) {
    return <div className={`fixed bottom-0 right-0 mb-6 mr-6 ${className}`}>
        <a href="#home">
            <button className="btn btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                </svg>
            </button>
        </a>
    </div>
}

export default FloatingActionButton