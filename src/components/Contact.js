const Contact = () => {
    return(
        <div>
            <h1 className="font-bold text-2xl p-4 m-4">Contact</h1>
            <form>
                <input className="p-2 m-2 border border-black focus:outline-none" type="text" placeholder="name" />
                <input className="p-2 m-2 border border-black focus:outline-none" type="text" placeholder="message" />
                <button className="px-6 py-2 m-4 bg-gray-100 rounded-lg border border-black">Submit</button>
            </form>
        </div>
    )
}

export default Contact