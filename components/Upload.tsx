import UploadIcon from "@/components/UploadIcon";
import { FC } from "react";

interface UploadProps {
    handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Upload: FC<UploadProps> = ({ handleFileUpload }) => {
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col space-y-16 bg-gradient-to-tr from-gray-900 to-purple-700">

            <h1 className="font-bold text-3xl text-white drop-shadow-md">
                Jupyter to Obsidian Markdown
            </h1>

            <div className="w-full max-w-2xl">
                <label
                    className="flex justify-center w-full h-32 px-4 transition bg-purple-600 rounded-xl cursor-pointer duration-150 hover:shadow-md hover:-translate-y-1 focus:outline-none">
                    <span className="flex items-center space-x-2">
                        <UploadIcon />
                        <span className="font-medium text-white">
                            {"Drop "}
                            <span className="font-bold">
                                .ipynb
                            </span>
                            {" or "}
                            <span className="text-purple-50 underline">
                                browse
                            </span>
                        </span>
                    </span>
                    <input
                        type="file"
                        name="file_upload"
                        className="hidden"
                        accept=".ipynb"
                        onChange={handleFileUpload}
                    />
                </label>
            </div>
        </div>
    )
}

export default Upload;