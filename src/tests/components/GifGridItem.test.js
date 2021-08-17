import { shallow } from "enzyme"
import GifGridItem from '../../components/GifGridItem'

describe('Pruebas en <GifGridITem />', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un <p> con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe de tener la imagen igual url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toContain('animate__fadeIn')
    })
    
})