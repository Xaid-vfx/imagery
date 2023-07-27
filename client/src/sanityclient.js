import {createClient} from '@sanity/client'

export default createClient({
    projectId: "4uy74git",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-07-27"
})