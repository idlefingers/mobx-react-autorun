// TODO - write tests ;)
import React from "react"
import { mount } from "enzyme"
import { expect } from "chai"
import sinon from "sinon"
import autorun from "./index"

class ComponentWithAutorun extends React.Component {
  autorunner() {

  }

  render() {
    return <div>Hello world</div>
  }
}
const MyComponent = autorun(ComponentWithAutorun)

describe("autorunner hoc", () => {

  it("should render the child component", () => {
    const comp = render(<MyComponent />)
    expect(comp.text()).to.contain("Hello world")
  })

  describe("when the child implements an autorun function", () => {
    it("should run the autorunner function", () => {
      // const spy = sinon.stub(MyComponent.prototype, "autorunner").returns(() => {})
      // const wrapper = mount(<MyComponent />)
      // expect(spy.calledOnce).to.equal(true)
    })

    it("should run the disposer when unmounting", () => {
      // const wrapper = mount(<MyComponent />)
    })
  })

})
