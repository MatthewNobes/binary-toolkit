import '../../css/App.css';

import convertNumberToBinary from './DecimalToBinary'

export default function BinaryConverter() {

    const number = convertNumberToBinary(5);
    return (
        <div>
            <h2 className='BinaryConverter-Title'>Binary Converter</h2>
            <p>{number}</p>
        </div>
        
    )
}