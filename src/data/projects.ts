import kitchenWood from '../assets/images/kitchen-wood.png';
import nursery from '../assets/images/nursery.png';
import kitchenWhite from '../assets/images/kitchen-white.png';
import dining from '../assets/images/dining.png';

export const projects = [
  { number: '01', title: 'Cozinha em madeira', category: 'Cozinhas', image: kitchenWood, alt: 'Cozinha com marcenaria amadeirada, ilha branca e mesa integrada', className: 'slot-large' },
  { number: '02', title: 'Quarto infantil', category: 'Quartos', image: nursery, alt: 'Quarto infantil com armários azuis, madeira e detalhes em palhinha', className: 'slot-tall' },
  { number: '03', title: 'Cozinha clara', category: 'Cozinhas', image: kitchenWhite, alt: 'Cozinha clara com armários sob medida e ilha central', className: 'slot-wide' },
  { number: '04', title: 'Espaço de convívio', category: 'Ambientes integrados', image: dining, alt: 'Sala de jantar integrada à cozinha, com mesa e teto de madeira', className: 'slot-fourth' },
] as const;
