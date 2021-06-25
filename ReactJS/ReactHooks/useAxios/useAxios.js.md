### useAxios.js

```jsx
import defaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  // opts.url이 없을경우, return
  if (!opts.url) {
    return;
  }

  // refetch 할경우, state.loading을 ture로 변경하고, trigger을 Date.now()로 변경
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  // triger이 변경될 때(refetch 될 때) useEffect실행
  // state.loading을 false로 변경하고 state.data를 새로 가져온다.
  // 만약 에러가 날 경우, state.error에 error메세지를 넣어준다.
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;
```
