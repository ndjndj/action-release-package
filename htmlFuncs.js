function getDirTree(){
     // "path/to/target" 直下のファイルやディレクトリ全てがDirentオブジェクトの配列で返ってくる
     const dirPath = '.';
     const fs = require('fs');
     const allDirents = fs.readdirSync(dirPath, { withFileTypes: true });

     const fileNames = allDirents.filter(dirent => dirent.isFile()).map(({ name }) => name);

     console.log(typeof fileNames);

     console.log(fileNames);

}
