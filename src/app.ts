import Express from 'express';
import videoRoutes from './routes/videos.routes'
import morgan from 'morgan'
import cors from 'cors'
const App = Express();



App.use(morgan("dev")); //middle-ware
App.use(cors()); //Para que pueda entrar cualquier server ojo se puede espesificar cuales
App.use(Express.json()); // Para entender los Json que vengan
App.use(Express.urlencoded({extended: false})); //Entender los datos desde otro servidor




App.use(videoRoutes);
//App Setting

export default App;