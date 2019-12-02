# react-navigation-use-getparam
You can use `getParam` hooks by this library with [react-navigation v5](http://reactnavigation.org/next).

## install
```
$ npm install --save react-navigation-use-getparam
```

## usage
```
...

/* import */
import useGetParam from 'react-navigation-use-getparam';

function HogeScreen(){
  const getParam = useGetParam();

  useEffect(() => {
    if (getParam('foo', null) === 'bar') {

    } else {
      
    }
  },[]);

  ...
}

```