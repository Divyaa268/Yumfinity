import RestaurantMenu from "../RestaurantMenu"
import { act } from "react-dom/test-utils"
import { render } from "@testing-library/react"
import MOCK_DATA from "../mocks/mockResMenu.json"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})
it("Should load Reastaurant Meu Component", async () => {

    await act( async => 
        render(<RestaurantMenu />))
})