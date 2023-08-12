import { render, screen } from "@testing-library/react"
import RestaurantCards from "../RestaurantCards"
import MOCK_DATA from "../mocks/resCardMock.json"

it("Should render RestaurantCard component with Data (props)", () => {

    // as restaurantCard component has a prop
    render(<RestaurantCards resData={MOCK_DATA} />)

    const restName = screen.getByText("")

    expect(restName).toBeInTheDocument();
})