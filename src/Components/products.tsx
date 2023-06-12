import React from 'react';

export const productOne = () => {
    return (
        <div>
            <img className='picture' src='../src/assets/picOne.jpg' alt='picture-one' />
            <p>First product</p>
            <button>Add to Cart</button>
        </div>
    )
}

export const productTwo = () => {
    return (
        <div>
            <img className='picture' src='../src/assets/picTwo.jpg' alt='picture-two' />
            <p>Second product</p>
            <button>Add to Cart</button>
        </div>
    )
}

export const productThree = () => {
    return (
        <div>
            <img className='picture' src='../src/assets/picThree.jpg' alt='picture-three' />
            <p>Third product</p>
            <button>Add to Cart</button>
        </div>
    )
}

export const productFour = () => {
    return (
        <div>
            <img className='picture' src='../src/assets/picFour.jpg' alt='picture-four' />
            <p>Fourth product</p>
            <button>Add to Cart</button>
        </div>
    )
}

export const ProductsAndCart = () => {
    return (
        <div>
            <div className='products'>
            {[productOne(), productTwo(), productThree(), productFour()].map((product, index) => (
            <React.Fragment key={index}>{product}</React.Fragment>
            ))}
        </div>
        <div className='cart-div'></div>
        </div>
    );
};