import {render} from "@testing-library/react";
import {Breadcrump} from "./Breadcrump";

describe("Breadcrump", () => {

    it("Should not display anything once the navigation is empty", () => {
        const { container } = render(<Breadcrump navigation={[]} />)
        expect(container.getElementsByClassName('main').length).toBe(1)
    })
})