import { MouseEventHandler } from "react";

/* Type is better than "Interface" because "Type" support
objects
*/
export type CustomButtonProps = {
    title: string;
    containerStyle?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface OptionProps {
    title: string;
    value: string;
}

export type CustomFilterProps = {
    title:string;
    options:OptionProps[];
}

export interface SearchManufacturerProps {
    manufacturer: string;
    /*setManfucturer - a function that takes manufacturer string and doesnt return anything 
                       its just the state */
    setManufacturer: (manufacturer: string) => void;
}

export interface CarCardProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}