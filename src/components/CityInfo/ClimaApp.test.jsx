import React from "react"

import ClimaApp from "./ClimaApp"

import { render } from "@testing-library/react"

test("Clima App Render", async () => {
    
    /**
     * AAA
     * Arrage   : se refiere a la fase de preparación de los datos y configuración necesarios para ejecutar una prueba. 
     *            Aquí se crean objetos, se establecen variables y se prepara el entorno para la prueba.
     * Act      : se refiere a la fase en la que se realiza la acción que se está probando. Esto puede ser cualquier cosa, desde una función hasta la interacción con un componente de React.    
     * Assert   : se refiere a la fase de verificación de los resultados de la prueba. Aquí se comprueba que los resultados esperados sean los obtenidos después de haber realizado la acción que se está probando.
     */

    //Arrage
    // Para evitar errores de tipeo se setean los valores usados en componentes y validaciones como constante al inicio de los test
    const city = 'Santiago'
    const country = 'Chile'
    

    //Act: Renderiza el componenre y busca todos los elementos heading
    //Render: Renderiza el componente
    const { findAllByRole } = render(<ClimaApp city={city} country={country} />)
    //findAllByRole buscara todos los componentes que sean cabeceras (h1, h2, etc..)
    const climaComponent = await findAllByRole("heading")
    
    
    
    //Assert : Valida que los elementos heading 0 y 1 coincidan con los valores prestablecidos en el arrange
    expect(climaComponent[0]).toHaveTextContent(city)
    expect(climaComponent[1]).toHaveTextContent(country)
})