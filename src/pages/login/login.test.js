import { render, screen } from "@testing-library/react"
import Login from "./Login"

test("page title should be rendered", () => {
    render(<Login />)
    const titleText = screen.getByText(/sign in/i)
    expect(titleText).toBeInTheDocument()
})