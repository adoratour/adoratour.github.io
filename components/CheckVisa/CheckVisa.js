import React from 'react';
import CheckVisaWrapper from './CheckVisa.style';

const CheckVisaItem = ({
    question,
    children
}) =>{
    return (
        <CheckVisaWrapper>
            <CheckVisaWrapper>
                <div className='title'> {question} </div>
                <div> {children} </div>
            </CheckVisaWrapper>
        </CheckVisaWrapper>
    )
}

export default CheckVisaItem;