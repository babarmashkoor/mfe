import { mount } from 'auth/AuthAppApp';
import React, { useRef, useEffect } from 'react';
import {useHistory} from "react-router-dom"

export default () => {
  const ref = useRef(null);
  const history = useHistory()

  useEffect(() => {
    const {onParentNavigate} = mount(ref.current, {onNavigate: ({pathname: nextPathName}) => {
      const {pathname} = history.location
      pathname != nextPathName && history.push(nextPathName)
    }});

    history.listen(onParentNavigate)
  }, []);

  
  return <div ref={ref} />;
};
