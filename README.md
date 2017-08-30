# mobx-react-autorun

A small react HOC to run a mobx autorun function when a component mounts, and dispose of it when the component will unmount.

```
import React from "react"
import { observer } from "mobx-react"
import autorunner from "mobx-react-autorun"

@autorunner @observer
export default class MyComponent extends React.Component {

  autorunner = () => {
    // this function will run like any normal mobx autorun function,
    // so it will automatically react to changes in your
    // observables. Just remember to make the component an observer!
  }

  render() {
    return (
      <div>
        Hello world
      </div>
    )
  }

}
```
