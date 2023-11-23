export async function fetchCars (){
    const headers = {
        headers: {
            "X-RapidAPI-Key": "7b6fdc7428msh2771f1087ee9903p123d3djsn61a6331b1b84",
            "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com"
        }
    }
    const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
    try {
        const response = await fetch(url, headers);
        const result = await response.json();
        return result;
    }catch(error){
        console.log(error)
    }
}

export const calculateCarRent = (city_mpg:number, year:number) => {
    const basePricePerDay = 50; //base rental price per day in dollar
    const mileageFactor = 0.1; //additional rate per mile driven
    const ageFActor = 0.05;
    //additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFActor;
    //total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
}

export const updateSearchParams = (type: string, value: string) => {
    //get the current URL search parameter
    const searchParams = new URLSearchParams(window.location.search);
    //set the 
    searchParams.set(type, value);
    
    const newPathname = `${window.location.pathname} ? ${searchParams.toString()}`;

    return newPathname;
}