import copy from "rollup-plugin-copy-assets";

export default ({ command, mode }) => {
    if (command === 'build') {
        return {
            plugins: [
                copy({
                    assets: [
                        // You can include directories
                        "/src/Models/Monitor.glb",
                        // You can also include files
                        "src/external/buffer.bin",
                    ],
                }),
            ],
        }
    } else {
        return {
            // build specific config
        }
    }
};