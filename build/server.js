import hypernova from 'hypernova/server';
import { renderVue, Vue } from 'hypernova-vue/server';
import express from 'express';
import path from 'path';
import LysModule from '../src/components/LysModule.vue';

hypernova({
  devMode: true,
  getComponent(name) {
    if (name === 'VUE_MODULE') {
      return renderVue(name, Vue.extend(LysModule));
    }
    return null;
  },
  port: 8080,
  endpoint: '/view',

  createApplication() {
    const app = express();

    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');// update to match the domain you will make the request from
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });

    app.use(express.static(path.join(process.cwd(), 'dist')));
    return app;
  },
});
