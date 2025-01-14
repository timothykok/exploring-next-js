// app/page.js (Server Component)
import Counter from "./ui/Counter"; // Client Component
import UserDetails from "./ui/UserDetails"; // Client Component
import UserList from "./ui/UserList"; // Server Component
import Comparison from "./ui/Comparison";
import DiscountCalculator from "./ui/DiscountCalculator";

export default async function Page() {
  // Fetch Pokemon data
  const pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res) =>
    res.json()
  );

  // Fetch User data
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );

  

  // Extract Pokemon data
  const pokemonAbilities = pokemonData.abilities;
  const pokemonExperience = pokemonData.base_experience;

  return (
    <div className="page-container">
      {/* Section: Pokemon Data (Server Component) */}
      <div className="pokemon-section">
        <h1>Pokemon Data</h1>
        <p>Server-side Component</p>
        <h2 className="sub-title">Abilities</h2>
        <ul className="list">
          {pokemonAbilities.map((ability, index) => (
            <li key={index} className="list-item">
              {ability.ability.name}
            </li>
          ))}
        </ul>
        <h3 className="base-experience">
          Base Experience: <span>{pokemonExperience}</span>
        </h3>
      </div>




      {/* Section: Counter (Client Component) */}
      <div className="counter-section">
        <h1>Counter</h1>
        <Counter /> {/* Client Component */}
      </div>





      {/* Section: User Data (Server & Client Components Combined) */}
      <h1 className="users-title">Users</h1>
      <div className="users-section">

        <p> Server & Client Components Combined </p>
        <UserList users={users}>
          <UserDetails /> {/* Client Component */}
        </UserList>
      </div>

      <Comparison></Comparison>

      

      <DiscountCalculator/>

    </div>
  );
}



