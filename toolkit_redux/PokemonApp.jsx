import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './src/store/slices/pokemon';

const PokemonApp = () => {

  const dispatch = useDispatch();
  const { page, isLoading, pokemons = [] } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>

      <hr />

      <span> isLoading : {isLoading ? 'true' : 'false'}  </span>

      <ul>
        {pokemons.map(pok => (
          <li
            key={pok.name}
          >{pok.name}</li>
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  )
}

export default PokemonApp