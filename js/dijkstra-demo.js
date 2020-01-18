import base from './base-demo.js';
import Dijkstra from './routers/Dijkstra.js';
base.router = new Dijkstra(100);
base.init();