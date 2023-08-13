import { render } from "@testing-library/react"
import Body from "../Body"

// here the dummy fetch function is exactly like the fetch which the browser gives us
// global is a global object // defining our own dummy function for fetch which will return a promise 
// fetch function will resolve with a json
// json is a function that returns a Promise.resolve which has data
global.fetch = jest.fn( () => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data);
        }
    })
})

it("Should render Serach button on Body component", () => {

    render(<Body />);
})