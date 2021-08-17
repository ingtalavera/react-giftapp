import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs")

describe('Pruebas en <GifGrid />', () => {
    const category = 'Goku';

    test('debe de cargar correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={ category }/>)

        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe cargar la informacion de las imagenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cosa.jpg',
                title: 'Cualquier cosa'
            },
            {
                id: 'ABD',
                url: 'https://localhost/cosa2.jpg',
                title: 'Cualquier cosa dos'
            }
        ]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={ category }/>)
        
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

    })
    
})