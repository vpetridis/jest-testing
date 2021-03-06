import {
  render,
  screen,
} from "@testing-library/react"
import App from "./App"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(
    /fail to learn react/i
  )
  const imgEl = screen.getByRole("img")
  const appEl = screen.getByTestId("app")
  expect(linkElement).toBeInTheDocument()
  expect(imgEl).toBeInTheDocument()
  expect(appEl).toBeInTheDocument()
})
