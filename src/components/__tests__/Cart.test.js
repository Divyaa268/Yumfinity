import RestaurantMenu from "../RestaurantMenu"
import { act } from "react-dom/test-utils"
import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})
it("Should load Reastaurant Menu Component", async () => {

    await act( async => 
        render(
        <Provider store={appStore}> 
            <RestaurantMenu />
        </Provider>))

        const accordianHeader = screen.getByText("Kebabs (3)");

        // clicking on accordianHeader
        fireEvent.click(accordianHeader);

        const foodItem = screen.getAllByTestId("foodItems");

        expect(foodItem.length).toBe(3);

        // For Add button testing

        const addBtns = screen.getAllByRole("button", { name: "Add +"});

        fireEvent.click(addBtns[0]);  // clicking on first Add + button, header should change
        


})