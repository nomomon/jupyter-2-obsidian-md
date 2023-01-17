import hashCode from "@/components/hashCode";

const converter = (ipynb: any) => {
    const { cells, metadata } = ipynb;

    const lang = metadata.language_info.name ||
        metadata.kernelspec.display_name || "";

    console.log(cells)

    const md = cells
        .map((cell: any) => {
            const cellMd = [];

            if (cell.cell_type === "markdown") {
                cellMd.push(
                    cell.source.join("")
                );
            } else if (cell.cell_type === "code") {
                cellMd.push(
                    "```" + lang + "\n" + cell.source.join("") + "\n```"
                );
            }

            cell.outputs?.forEach((output: any) => {
                if (output.output_type === "stream") {
                    // cellMd.push(
                    //     "> " + output.name + "\n> " + output.text.join("> ") + "\n```"
                    // );
                }

                else if (output.output_type === "display_data") {

                    if (output.data["text/markdown"]) {
                        cellMd.push(
                            output.data["text/markdown"]
                        );
                    }
                    else if (output.data["image/png"]) {
                        cellMd.push(
                            "![[" + hashCode(output.data["image/png"]) + ".png|300]]"
                        );
                    }
                    else {
                        cellMd.push(
                            "```\n" + output.data["text/plain"].join("") + "\n```"
                        );
                    }

                }
            });

            return cellMd;
        })
        .flat(2)
        .join("\n\n");

    const allImgs = cells
        .map((cell: any) => {
            const imgs: any[] = [];

            cell.outputs?.forEach((output: any) => {
                if (output.output_type === "display_data") {
                    if (output.data["image/png"]) {
                        imgs.push({
                            name: hashCode(output.data["image/png"]) + ".png",
                            data: "data:image/png;base64," + output.data["image/png"]
                        });
                    }
                }
            });

            return imgs;
        })
        .flat(2);

    const files = [
        {
            name: "file.md",
            data: md
        },
        ...allImgs
    ]

    return files;
}

export default converter;