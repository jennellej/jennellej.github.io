export default function CV() {
    return (
        <div className="px-4 flex flex-col sm:flex-row justify-between gap-6">
            <h1 className="text-5xl font-bold">CV</h1>

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl">Education</h2>
                    <p>
                        2021-2025
                        <br />
                        BA in English and Cultural Studies from McMaster University
                        <br />
                        Certificate of Creative Writing and Narritive Arts from McMaster University
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl">Work</h2>
                    <p>
                        Writer for herCampus McMaster Chapter
                    </p>
                </div>
            </div>
        </div>
    )
}