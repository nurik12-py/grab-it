import { Component, useEffect, useState } from "react";
import { ReduxContext } from "./Provider";

export const connect =
  (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    const Connect = ({ store, ...props }) => {
      const [state, setState] = useState(store.getState());

      useEffect(() => {
        store.subscribe((state) => {
          setState(state);
        });
      }, []);

      return (
        <WrappedComponent
          {...props}
          {...mapStateToProps(store.getState())}
          {...mapDispatchToProps(store.dispatch)}
        />
      );
    };

    return (props) => (
      <ReduxContext.Consumer>
        {(store) => <Connect {...props} store={store} />}
      </ReduxContext.Consumer>
    );
  };
