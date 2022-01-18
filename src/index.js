import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router';

import { default as App } from './App';
const app = createApp(App);

// Start of vue-meta issue
import { createMetaManager, plugin as metaPlugin } from 'vue-meta';
const metaManager = createMetaManager();
app.use(metaManager);
app.use(metaPlugin);
// End of vue-meta issue

import { default as Page } from './Page';

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            component: Page,
        }
    ]
});

app.use(router);

app.mount('#app');
