import Image from 'next/image'
import { Hero, CustomFilter, SearchBar, CarCard } from '@/components'
import { fetchCars }  from "@/utils"
import { yearsOfProduction, fuels } from "@/constants"

export default async function Home() {

  // const allCars = await fetchCars();

  const allCars = [{
    city_mpg: 23,
    class: 'compact car',
    combination_mpg: 24,
    cylinders: 4,
    displacement: 1.6,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 26,
    make: 'toyota',
    model: 'corolla',
    transmission: 'a',
    year: 1993
  },
  {
    city_mpg: 23,
    class: 'compact car',
    combination_mpg: 26,
    cylinders: 4,
    displacement: 1.6,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 31,
    make: 'toyota',
    model: 'corolla',
    transmission: 'm',
    year: 1993
}]

  console.log(allCars); //will log on server side; we are not using "use client"
                        //by default nextjs is "use server";

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className='mt-12 padding-x padding-y
      max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

            <div className="home__filter-container">
                <CustomFilter title="fuel" options={fuels}/>
                <CustomFilter title="year" options={yearsOfProduction}/>
            </div>
        </div>
           {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
              {allCars?.map((car)=> (
                <CarCard car={car}/>
                ))}
              </div>
            </section>
            ) : (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">Oops, no results</h2>
                <p>{allCars?.message}</p>
              </div>
            )}
        </div>
    </main>
  )
}
