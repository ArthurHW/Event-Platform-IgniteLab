import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4vdrkxt1dmz01ta3z2n5hdw/master",
    cache: new InMemoryCache()
})