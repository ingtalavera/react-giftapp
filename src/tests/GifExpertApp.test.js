import { shallow } from "enzyme"
import GifExpertApp from '../GifExpertApp'


describe('Pruebas en <GifExpertApp />', () => {

    test('debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cargar dos categorias', () => {
        const wrapper = shallow(<GifExpertApp />)
        // console.log(wrapper.getElements())
        // console.log(wrapper.props())
        // console.log(wrapper.debug());
    })
    
    
})