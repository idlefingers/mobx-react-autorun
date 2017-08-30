import React from "react"
import { autorun } from "mobx"

export default InnerComponent =>
  class AutoRunner extends React.Component {

    componentDidMount() {
      if (this.inner.wrappedInstance.autorunner) {
        this.dispose = autorun(this.inner.wrappedInstance.autorunner)
      }
    }

    componentWillUnmount() {
      if (this.dispose) {
        this.dispose()
      }
    }

    render() {
      return (
        <InnerComponent
          ref={inner => { this.inner = inner }}
          {...this.props} />
      )
    }

  }
