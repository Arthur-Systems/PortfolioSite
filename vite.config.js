import copy from "rollup-plugin-copy-assets";

export default {
    build: {
        input: "/src/Scripts/General.js",
        output: {
            file: "dist/bundle.js",
            format: "cjs",
        },
        plugins: [
            copy({
                assets: [
                    // You can include directories
                    "/src/Models",
                    // You can also include files

                ],
            }),
        ],
    },
};