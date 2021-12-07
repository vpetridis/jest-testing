import React from "react"
import {
  render,
  screen,
} from "@testing-library/react"
import SimpleButton from "./index"

it("should render a simple button with text", function () {
  render(<SimpleButton text="Hello World" />)
  const button = screen.getByTestId("username")
  expect(button).toMatchSnapshot()
})
