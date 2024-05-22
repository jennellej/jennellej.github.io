export default function About() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-5xl">About</h1>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col justify-around">
                    <p className="text-center text-lg">
                        Jennelle Jagdeo is a writer and editor from Hamilton, Ontario.
                        <br />
                        She has articles such as bla and blah bajfkdhs
                    </p>
                </div>
                <img
                    src="/logo512.png"
                    alt="Portrait of Jennelle"
                />
            </div>
        </div>
    )
}