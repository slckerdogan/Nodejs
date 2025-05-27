import Model from "./exporter.js"; //!import ettiğin ad ile kullan aşağıda da sonra karışmasın

import { ModelNesne } from "./exporter.js"; //!import ettiğin ad ile kullan aşağıda da sonra karışmasın. Bu tarz importta, export tarafında verdiğin sabit adını kullanmalısın

Model();
ModelNesne();

//npx babel-node --presets  @babel/preset-env index.js ile çalıştır