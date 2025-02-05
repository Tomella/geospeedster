
const config = {
    port: process.env.SERVICES_SERVER_PORT ? +process.env.SERVICES_SERVER_PORT : 3000,
    directory_mappings: {
        '3d': process.env.SERVICES_3D_DIR ? +process.env.SERVICES_3D_DIR: "X:/multimedia/3d"
    }
}

export default config;