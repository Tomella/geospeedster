
const config = {
    port: process.env.SERVICES_SERVER_PORT ? +process.env.SERVICES_SERVER_PORT : 3000,
    directory_mappings: [ 
        {
            name:'3d',
            display: '3D Movies',
            path: process.env.SERVICES_3D_DIR ? process.env.SERVICES_3D_DIR: "X:/multimedia/3d"
        },
        {
            name:'tv',
            display: 'TV Series',
            path: process.env.SERVICES_TV_DIR ? process.env.SERVICES_TV_DIR: "X:/multimedia/tv"
        },
        {
            name:'movies',
            display: 'Movies',
            path: process.env.SERVICES_MOVIES_DIR ? process.env.SERVICES_MOVIES_DIR: "X:/multimedia/movies"
        },
        {
            name:'music',
            display: 'Music',
            path: process.env.SERVICES_MUSIC_DIR ? process.env.SERVICES_MUSIC_DIR: "X:/multimedia/music"
        }
    ]
}

export default config;