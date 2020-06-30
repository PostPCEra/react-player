#  TODO items list

### debug - 4
- fresh brand new github repo started by cloning a good working repo: https://github.com/PostPCEra/next-netlify-blog-starter
- made my own component SRComponet which uses React Hooks , it works ....
- all chagnes checked into the repo


### debug - 3
 - tried only <RTableApp/> with out <App/>  in index.js
 - changed getElementByID('root') inasted of 'getElementByID('app') which is used by <App/>
 - still blank screen
 - <RTableApp> in codesandbox does not have index.html , it diretly works from index.js .... that may be difference .....

### debug - 2
- so now we need to try  'useTable' in App2.js, it may have some problems ..., let us see
- it works even with useEffect/useState in App2.js file
-
- when <App2/> is commented  just kept <RTableApp/> in  App.js , still same blank screen, no compilation erros 

### debug - 1
 - with App2.js  it works and webpage displays player , every thing works
 - with RTabelApp.js , no build errors, but won't display web page
 - so Try doing RtableApp.js as stand alone React app and try to dispay Table page ...
 - if that works, then we see why  it won't work along with  React-player App.js  ...
