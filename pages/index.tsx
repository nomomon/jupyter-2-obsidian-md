import download from "@/components/download";
import converter from "@/components/ipynb2md"
import Upload from "@/components/Upload";

export default function Home() {

    const convertFile = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
            const ipynb = JSON.parse(e.target.result as string)

            const converted = converter(ipynb);

            converted.forEach((item: any) => {
                download(item.name, item.data)
            })
        }
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0]

            const reader = new FileReader()
            reader.onload = convertFile;

            reader.readAsText(file)
        }
    }

    return (
        <Upload
            handleFileUpload={handleFileUpload}
        />
    )
}
