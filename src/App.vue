<template>
    <div>
        <h1>Demo App</h1>
        <router-view></router-view>
        <metainfo>
            <template v-slot:title="{ content }">{{ content }} | Site Demo</template>
        </metainfo>
    </div>
</template>
<script>
    export default {
        metaInfo: {
            link: [
                { href: '/file-app.css', rel: 'stylesheet', type: 'text/css', media: 'all' },
            ]
        }
    }
</script>
