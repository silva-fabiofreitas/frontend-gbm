export default function Composition() {
    return (
        <>
            <div className="p-4 flex flex-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 grow">
                    <div className="border-2 border-cyan-950">01</div>
                    <div className="border-2 border-cyan-950">02</div>
                    <div className="border-2 border-cyan-950">03</div>
                    <div className="border-2 border-cyan-950">04</div>
                    <div className="col-span-full lg:col-span-4 border-2 border-cyan-950">05</div>
                    <div className="col-span-full lg:col-span-2 border-2 border-cyan-950 ">06</div>
                    <div className="border-2 border-cyan-950">07</div>
                    <div className="border-2 border-cyan-950">08</div>
                </div>
            </div>
        </>
    )
}