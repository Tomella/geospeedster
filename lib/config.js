
const config = {
    port: process.env.SERVICES_SERVER_PORT ? +process.env.SERVICES_SERVER_PORT : 3000,
    directory_mappings: {
        '3d': process.env.SERVICES_3D_DIR ? process.env.SERVICES_3D_DIR: "X:/multimedia/3d",
        'tv': process.env.SERVICES_TV_DIR ? process.env.SERVICES_TV_DIR: "X:/multimedia/tv",
        'movies': process.env.SERVICES_MOVIES_DIR ? process.env.SERVICES_MOVIES_DIR: "X:/multimedia/movies",
        'music': process.env.SERVICES_MUSIC_DIR ? process.env.SERVICES_MUSIC_DIR: "X:/multimedia/music"
    }
}

export default config;