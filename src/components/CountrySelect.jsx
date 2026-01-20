import React from 'react';

const CountrySelect = ({onChange}) => {
    return (
        <div>
            <select
            className='border py-2 pl-2 w-60 rounded-lg'
            onChange={(e) => onChange(e.target.value)}
             name="" id="">
                <option value="us">USA</option>
                <option value="gb">UK</option>
                <option value="au">Australia</option>
                <option value="be">Belgium</option>
                <option value="hk">Hong Kong</option>
                <option value="ie">Ireland</option>
                <option value="it">Italy</option>
                <option value="ma">Morocco</option>
                <option value="mx">Mexico</option>
                <option value="pl">Poland</option>
                <option value="sa">Saudi Arabia</option>
                <option value="za">South Africa</option>
                <option value="tr">Turkey</option>
                <option value="pt">Portugal</option>
                <option value="my">Malaysia</option>
            </select>
            
        </div>
    );
};

export default CountrySelect;